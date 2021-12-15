import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameStats from '../gameStats/GameStats';

import { SilverHunterContract, CastleContract } from '../../utils/contract';
import { SilverHunterAddress, CastleAddress, web3 } from '../../utils/contract';

import { getArtUrl } from '../../utils/urls';

function LogInPage({ walletAddress }) {
  const [amountItem, setAmountItem] = useState(1);
  const [cost, setCost] = useState(0.07);

  if (walletAddress.length == 0) {
    return <Navigate to='/' />;
  }

  function amountPlus() {
    if (amountItem >= 20) {
      return;
    }
    setAmountItem(amountItem + 1);
    setCost(parseInt(100 * cost + 7) / 100);
  }

  function amountMinus() {
    if (amountItem > 1) {
      setAmountItem(amountItem - 1);
      setCost(parseInt(100 * cost - 7) / 100);
    }
  }

  const mintPressed = async () => {
    await SilverHunterContract.methods.mint(1, false).send({
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
          <li onClick={mintPressed}>
            <p>MINT</p>
          </li>
          <li onClick={mintStakePressed}>
            <p>MINT + STAKE</p>
          </li>
          <li className="btn_cost_action_list">
            <div className="amount_control">
              AMOUNT : <span onClick={() => amountMinus()}> &lt;</span>{" "}
              {amountItem} <span onClick={() => amountPlus()}> &gt;</span>
            </div>
            <span className="cost_value">COST : {cost} eth </span>
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

  useEffect(() => {
    let isMounted = true;

    CastleContract.methods.getAccountKnights(props.wallet).call()
      .then(stkKnights => {
        if (isMounted) {
          setStakedKnights(stkKnights);
        }
      });
    CastleContract.methods.getAccountVikings(props.wallet).call()
      .then(stkVikings => {
        if (isMounted) setStakedVikings(stkVikings);
      });

    async function setUnstake() {
      const balance = await SilverHunterContract.methods.balanceOf(props.wallet).call();

      var unstkTokens = [];
      for (let i = 0; i < balance; i++) {
        var id = await SilverHunterContract.methods.tokenOfOwnerByIndex(props.wallet, i).call();
        var subarray = [id];
        unstkTokens.push(subarray);
      }

      setUnstakedTokens(unstkTokens);
    }

    setUnstake();

    return () => { isMounted = false };
  }, []);

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
            <div className="content_head">
              <span>SILVER POUCH</span>
              <span>$100000000</span>
            </div>
          </div>
          <div className="content_img_wrapper">
            <SmImgShield
              src={unstakedTokens}
              name="UNSTAKED"
            ></SmImgShield>
            <SmImgShield
              src={stakedKnights}
              name="KNIGHT BATTALION"
            ></SmImgShield>
            <SmImgShield
              src={stakedVikings}
              name="VIKINGS CREW"
            ></SmImgShield>
          </div>
        </div>
      </div>
      <div className="btn_control">
        <Link to="/roadmap" className="btn_roadmap">
          ROADMAP
        </Link>
      </div>
    </div>
  );
}

function SmImgShield({ name, src }) {
  return (
    <div className="item">
      <span>{name}</span>
      <div className="img_container">
        <div className="box">
          {
            src.map((item, index) => {
              return (
                <div className="img_item" key={index}>
                  <img src={getArtUrl(item[0])} alt="img" />
                  <span>0</span>
                </div>
              )
            }
            )
          }

          {/* <div className="img_item">
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className="img_item">
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