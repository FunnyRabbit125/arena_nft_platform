import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameStats from '../gameStats/GameStats';

import { SilverHunterContract, CastleContract, SilverContract } from '../../utils/contract';
import { SilverHunterAddress, CastleAddress, web3 } from '../../utils/contract';

import { getArtUrl } from '../../utils/urls';

function LogInPage({ walletAddress }) {
  const [amountItem, setAmountItem] = useState(1);
  const [cost, setCost] = useState();
  const [isWhite, setWhite] = useState(false);

  useEffect(() => {
    async function init() {
      let whiteList = await SilverHunterContract.methods.getWhiteAddressList().call();
      let flag = 0;
      let addr = walletAddress.toUpperCase();
      for (let i = 0; i < whiteList.length; i ++) {
        let temp = whiteList[i].toUpperCase();
        if (temp == addr) {
          flag = 1;
          break;
        }
      }

      let priceForWhite = await SilverHunterContract.methods.priceForWhite().call();
      priceForWhite = web3.utils.fromWei(priceForWhite.toString());

      let priceForPhase = await SilverHunterContract.methods.phasePrice(1).call();
      priceForPhase = web3.utils.fromWei(priceForPhase.toString());

      if (flag == 1) {
        setCost(priceForWhite);
        setWhite(true);
      } else {
        setCost(priceForPhase);
        setWhite(false);
      }
    }
    init();
  }, [walletAddress]);

  if (walletAddress.length == 0) {
    return <Navigate to='/' />;
  }

  function amountPlus() {
    if (amountItem >= 20) {
      return;
    }
    setAmountItem(amountItem + 1);
    let price = isWhite == true ? 15 : 70;
    setCost(parseInt(100 * cost + price) / 100);
  }

  function amountMinus() {
    if (amountItem > 1) {
      setAmountItem(amountItem - 1);
      let price = isWhite == true ? 15 : 70;
      setCost(parseInt(100 * cost - price) / 100);
    }
  }

  const mintPressed = async () => {
    await SilverHunterContract.methods.mint(amountItem, false).send({
      from: walletAddress,
      to: SilverHunterAddress,
      value: web3.utils.toWei(cost.toString()),
    });
  }

  const mintStakePressed = async () => {
    await SilverHunterContract.methods.mint(amountItem, true).send({
      from: walletAddress,
      to: SilverHunterAddress,
      value: web3.utils.toWei(cost.toString()),
    });
  }

  return (
    <section id="LogInPage">
      <div className="page_content">
        <p>
          WARRIORS & VIKINGS BATTLE IT OUT TO FIND OUT WHO REIGNS SUPREME.{" "}
          <br /> $SILVER IS AT STAKE AND RICHES ARE READY FOR EVERYONE.
        </p>

        <ul className="ul_list_wrapper">
          <li className="list_btn btn_animate" onClick={mintPressed}>
            <p>MINT</p>
          </li>
          <li className="list_btn btn_animate" onClick={mintStakePressed}>
            <p>MINT + STAKE</p>
          </li>
          <li className="btn_cost_action_list">
            <div className="amount_control">
              <span className="amount_btn">AMOUNT :</span>
              <div className="amount_btn">
                <span className="btn_animate" onClick={() => amountMinus()}>
                  {" "}
                  &lt;
                </span>{" "}
                {amountItem}{" "}
                <span className="btn_animate" onClick={() => amountPlus()}>
                  {" "}
                  &gt;
                </span>
              </div>
            </div>
            <span className="cost_value btn_animate">COST: {cost}bnb </span>
          </li>
        </ul>
      </div>

      <DiamondImageControl wallet={walletAddress}></DiamondImageControl>
    </section>
  );
}

function DiamondImageControl(props) {
  const [unstakedTokens, setUnstakedTokens] = useState([]);
  const [stakedKnights, setStakedKnights] = useState([]);
  const [stakedVikings, setStakedVikings] = useState([]);
  const [silverBalance, setSilverBalance] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(0);

  const [unstakeSelectArray, setUnstakeSelectArr] = useState([]);
  const [knightSelectArray, setKnightSelectArr] = useState([]);
  const [vikingSelectArray, setVikingSelectArr] = useState([]);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let isMounted = true;

    CastleContract.methods.getAccountKnights(props.wallet).call()
      .then(stkKnights => {
        if (isMounted) {
          setStakedKnights(stkKnights);

          let temp = [];
          for (let i = 0; i < stkKnights.length; i++) {
            temp.push(false);
          }
          setKnightSelectArr(temp);
        }
      });
    CastleContract.methods.getAccountVikings(props.wallet).call()
      .then(stkVikings => {
        if (isMounted) setStakedVikings(stkVikings);

        let temp = [];
        for (let i = 0; i < stkVikings.length; i++) {
          temp.push(false);
        }
        setVikingSelectArr(temp);
      });

    async function setUnstake() {
      const balance = await SilverHunterContract.methods.balanceOf(props.wallet).call();

      var unstkTokens = [];
      var temp = [];
      for (let i = 0; i < balance; i++) {
        var id = await SilverHunterContract.methods.tokenOfOwnerByIndex(props.wallet, i).call();
        var subarray = [id];
        unstkTokens.push(subarray);
        temp.push(false);
      }

      setUnstakedTokens(unstkTokens);
      setUnstakeSelectArr(temp);
    }

    setUnstake();

    SilverContract.methods.balanceOf(props.wallet).call()
      .then(balance => {
        setSilverBalance(parseInt(100 * web3.utils.fromWei(balance, 'ether')) / 100);
      })

    return () => { isMounted = false };
  }, [refresh]);

  useEffect(() => {
    let cnt = 0;
    for (let i = 0; i < unstakeSelectArray.length; i++) {
      if (unstakeSelectArray[i] == true) cnt++;
    }
    if (cnt) {
      setButtonStatus(2);
      return;
    }

    cnt = 0;
    for (let i = 0; i < knightSelectArray.length; i++) {
      if (knightSelectArray[i]) cnt++;
    }
    for (let i = 0; i < vikingSelectArray.length; i++) {
      if (vikingSelectArray[i]) cnt++;
    }
    if (cnt) {
      setButtonStatus(1);
      return;
    }

    setButtonStatus(0);

  }, [unstakeSelectArray, knightSelectArray, vikingSelectArray]);

  const stakePressed = async () => {
    let tokenIds = [];
    for (let i = 0; i < unstakedTokens.length; i++) {
      if (unstakeSelectArray[i] == true) {
        let item = unstakedTokens[i];
        tokenIds.push(item[0]);
      }
    }
    await CastleContract.methods.addTokensToStake(props.wallet, tokenIds).send({
      from: props.wallet,
      to: CastleAddress
    });
  }

  const claimPressed = async () => {
    let tokenIds = [];
    for (let i = 0; i < stakedKnights.length; i++) {
      if (knightSelectArray[i] == true) {
        let item = stakedKnights[i];
        tokenIds.push(item[0]);
      }
    }
    for (let i = 0; i < stakedVikings.length; i++) {
      if (vikingSelectArray[i] == true) {
        let item = stakedVikings[i];
        tokenIds.push(item[0]);
      }
    }

    await CastleContract.methods.claimFromStake(tokenIds, false).send({
      from: props.wallet,
      to: CastleAddress
    })
  }

  const claimAndUnstakePressed = async () => {
    let tokenIds = [];
    for (let i = 0; i < stakedKnights.length; i++) {
      if (knightSelectArray[i] == true) {
        let item = stakedKnights[i];
        tokenIds.push(item[0]);
      }
    }
    for (let i = 0; i < stakedVikings.length; i++) {
      if (vikingSelectArray[i] == true) {
        let item = stakedVikings[i];
        tokenIds.push(item[0]);
      }
    }

    await CastleContract.methods.claimFromStake(tokenIds, true).send({
      from: props.wallet,
      to: CastleAddress
    })
  }

  const refreshPressed = () => {
    let temp = !refresh;
    setRefresh(temp);
  }

  return (
    <div className="diamong_image_wrapper">
      <div className="diamond_1"></div>
      <div className="diamond_1 diamond_1_copy d-sm-none"></div>
      <div className="steel_1"></div>
      <GameStats />

      <div className="shield_wrapper_2">
        <h2>YOUR STATS</h2>
        <div className="shield_content_wrapper">
          <div className="content">
            <div className="content_head">MY SILVER : ${silverBalance}</div>
            <button className="redu_btn btn_animate1" onClick={refreshPressed}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.29578 1.70421C7.44994 0.858374 6.28911 0.333374 4.99994 0.333374C2.42161 0.333374 0.339111 2.42171 0.339111 5.00004C0.339111 7.57837 2.42161 9.66671 4.99994 9.66671C7.17578 9.66671 8.98994 8.17921 9.50911 6.16671H8.29578C7.81744 7.52587 6.52244 8.50004 4.99994 8.50004C3.06911 8.50004 1.49994 6.93087 1.49994 5.00004C1.49994 3.06921 3.06911 1.50004 4.99994 1.50004C5.96828 1.50004 6.83161 1.90254 7.46161 2.53837L5.58328 4.41671H9.66661V0.333374L8.29578 1.70421Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="content_img_wrapper">
            <SmImgShield
              src={unstakedTokens}
              name="INVENTORY"
              type="unstake"
              selectArr={unstakeSelectArray}
              setSelect={setUnstakeSelectArr}
            ></SmImgShield>
            <SmImgShield
              src={stakedKnights}
              name="KNIGHT BATTALION"
              type="knightStake"
              selectArr={knightSelectArray}
              setSelect={setKnightSelectArr}
            ></SmImgShield>
            <SmImgShield
              src={stakedVikings}
              name="VIKINGS CREW"
              type="vikingStake"
              selectArr={vikingSelectArray}
              setSelect={setVikingSelectArr}
            ></SmImgShield>
          </div>
        </div>

        {
          buttonStatus == 0 ? "" : (
            buttonStatus == 1 ? (
              <div className="shield_btn_wrapper">
                <button className="btn_animate" onClick={claimPressed}>CLAIM SILVER</button>
                <button className="btn_animate" onClick={claimAndUnstakePressed}>CLAIM & UNSTAKE</button>
              </div>
            ) : (
                <div className="shield_btn_wrapper">
                  <button className="btn_animate" onClick={stakePressed}>STAKE</button>
                </div>
              )
          )
        }

        {/* <div className="shield_btn_wrapper">
          <button className="btn_animate">CLAIM SILVER</button>
          <button className="btn_animate">CLAIM & UNSTAKE</button>
        </div> */}
      </div>
      {/* <div className="btn_control">
        <Link to="/roadmap" className="btn_roadmap">
          ROADMAP
        </Link>
      </div> */}
    </div>
  );
}

function SmImgShield({ name, src, type, selectArr, setSelect }) {
  //const [manSelect, setManSelect] = useState(false);

  const [valueArray, setValueArray] = useState([]);

  useEffect(() => {
    if (type === "knightStake") {
      let spanArr = [];
      for (let i = 0; i < src.length; i++) {
        let item = src[i];
        var seconds = parseInt(new Date().getTime() / 1000);
        let amount = parseInt((seconds - item[1]) * 10000 / 86400);
        spanArr.push(amount);
      }
      setValueArray(spanArr);
    } else if (type === "vikingStake") {
      setVikingValues();
    }

    async function setVikingValues() {
      let amount = 0;
      let spanArr = [];
      for (let i = 0; i < src.length; i++) {
        let item = src[i];
        let point = await SilverHunterContract.methods.getPoint(item[0]).call();
        let rewardPerPoint = await CastleContract.methods.vikingRewardPerPoint().call();
        amount = parseInt(web3.utils.fromWei((rewardPerPoint - item[1]).toString()) * point);
        spanArr.push(amount);
      }
      setValueArray(spanArr);
    }
  }, [src]);

  function selectManFunc(v, index) {
    let tempSelect = [...selectArr];
    tempSelect[index] = !tempSelect[index];
    setSelect(tempSelect);
    let i = 0;
    Array.from(v.target.parentElement.children).forEach((v) => {
      if (tempSelect[i]) {
        v.classList.add("active_item")
      } else {
        v.classList.remove("active_item");
      }
      i++;
    }
    );
  }

  return (
    <div className="item">
      <span>{name}</span>

      <div className="img_container">
        {/* <button className="redu_btn btn_animate">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.29578 1.70421C7.44994 0.858374 6.28911 0.333374 4.99994 0.333374C2.42161 0.333374 0.339111 2.42171 0.339111 5.00004C0.339111 7.57837 2.42161 9.66671 4.99994 9.66671C7.17578 9.66671 8.98994 8.17921 9.50911 6.16671H8.29578C7.81744 7.52587 6.52244 8.50004 4.99994 8.50004C3.06911 8.50004 1.49994 6.93087 1.49994 5.00004C1.49994 3.06921 3.06911 1.50004 4.99994 1.50004C5.96828 1.50004 6.83161 1.90254 7.46161 2.53837L5.58328 4.41671H9.66661V0.333374L8.29578 1.70421Z"
              fill="black"
            />
          </svg>
        </button> */}

        <div className="box">
          {
            src.map((item, index) => {
              return (
                <div className={`img_item`} key={index} onClick={(event) => selectManFunc(event, index)}>
                  <img src={getArtUrl(item[0])} alt="img" />
                  {type !== "unstake" ? <span>{valueArray[index]}</span> : ""}
                </div>
              )
            }
            )
          }

          {/* <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}


LogInPage.propTypes = {
  walletAddress: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  walletAddress: state.wallet.walletAddress
});

export default connect(mapStateToProps)(LogInPage);