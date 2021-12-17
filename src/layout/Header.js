import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setWallet } from '../actions/wallet';

function Header({ setWallet }) {
  useEffect(() => {
    async function init() {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);
      addWalletListener();
    }
    init();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });

      window.ethereum.on("chainChanged", (_chainId) => {
        if (_chainId != 3) {
          setWallet("");
        }
      });
    } else {
      setWallet("");
    }
  }

  const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const chainId = await window.ethereum.request({
          method: "eth_chainId"
        });

        if (chainId != 3) {
          return {
            address: ""
          }
        }

        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
          };
        } else {
          return {
            address: "",
          };
        }
      } catch (err) {
        return {
          address: "",
        };
      }
    } else {
      return {
        address: "",
      };
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const chainId = await window.ethereum.request({
        method: "eth_chainId"
      });

      if (chainId != 3) {
        alert("Please switch to Ropsten test network!");
        return {
          address: ""
        }
      }

      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "success",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "fail",
        };
      }
    } else {
      return {
        address: "",
        status: "fail"
      };
    }
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  }

  return (
    <header id="header">
      <div className="wrapper">
        <div className="left_box">
          <Link to="/">
            <svg
              width="32"
              height="25"
              viewBox="0 0 32 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0894 2.54093C25.0498 1.60508 22.8626 0.915598 20.5759 0.5207C20.5342 0.513078 20.4926 0.532124 20.4712 0.570218C20.1899 1.0705 19.8783 1.72317 19.6601 2.23616C17.2005 1.86794 14.7536 1.86794 12.3444 2.23616C12.1262 1.71177 11.8033 1.0705 11.5208 0.570218C11.4993 0.533395 11.4577 0.514349 11.4161 0.5207C9.13055 0.914336 6.94341 1.60382 4.90258 2.54093C4.88491 2.54854 4.86977 2.56125 4.85972 2.57775C0.711189 8.77556 -0.425267 14.821 0.13224 20.7916C0.134763 20.8208 0.15116 20.8487 0.173864 20.8665C2.91095 22.8765 5.56228 24.0968 8.16437 24.9056C8.20602 24.9183 8.25014 24.9031 8.27664 24.8688C8.89217 24.0283 9.44086 23.1419 9.9113 22.2099C9.93906 22.1553 9.91256 22.0905 9.85582 22.069C8.98551 21.7388 8.1568 21.3363 7.35964 20.8792C7.29659 20.8424 7.29154 20.7522 7.34954 20.709C7.5173 20.5833 7.68509 20.4525 7.84527 20.3204C7.87425 20.2963 7.91464 20.2912 7.94871 20.3065C13.1857 22.6975 18.8554 22.6975 24.0306 20.3065C24.0647 20.29 24.1051 20.2951 24.1353 20.3192C24.2955 20.4512 24.4633 20.5833 24.6323 20.709C24.6903 20.7522 24.6865 20.8424 24.6235 20.8792C23.8263 21.3452 22.9976 21.7388 22.126 22.0677C22.0693 22.0893 22.044 22.1553 22.0718 22.2099C22.5523 23.1406 23.101 24.0269 23.7052 24.8676C23.7304 24.9031 23.7758 24.9183 23.8175 24.9056C26.4322 24.0968 29.0835 22.8765 31.8206 20.8665C31.8446 20.8487 31.8597 20.822 31.8622 20.7928C32.5294 13.8902 30.7447 7.89435 27.131 2.57901C27.1221 2.56125 27.107 2.54854 27.0894 2.54093ZM10.6934 17.1561C9.11666 17.1561 7.81751 15.7086 7.81751 13.9309C7.81751 12.1532 9.09147 10.7057 10.6934 10.7057C12.3078 10.7057 13.5944 12.1659 13.5692 13.9309C13.5692 15.7086 12.2952 17.1561 10.6934 17.1561ZM21.3263 17.1561C19.7497 17.1561 18.4505 15.7086 18.4505 13.9309C18.4505 12.1532 19.7244 10.7057 21.3263 10.7057C22.9408 10.7057 24.2274 12.1659 24.2022 13.9309C24.2022 15.7086 22.9408 17.1561 21.3263 17.1561Z"
                fill="black"
              />
            </svg>
          </Link>

          <a href="#">
            <svg
              width="32"
              height="26"
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0634 26.0009C22.1389 26.0009 28.7437 15.9965 28.7437 7.32061C28.7437 7.03645 28.7437 6.75357 28.7245 6.47197C30.0094 5.54258 31.1185 4.39182 32 3.07357C30.8019 3.60477 29.5307 3.95298 28.2291 4.10653C29.5998 3.28612 30.6255 1.99558 31.1155 0.475172C29.8268 1.23998 28.4168 1.77894 26.9466 2.06877C25.9567 1.01621 24.6475 0.319227 23.2216 0.0856846C21.7957 -0.147858 20.3326 0.0950582 19.0586 0.776843C17.7847 1.45863 16.771 2.54127 16.1743 3.85724C15.5777 5.1732 15.4314 6.64913 15.7581 8.05661C13.1479 7.92568 10.5943 7.24732 8.26327 6.06558C5.9322 4.88384 3.87569 3.22512 2.2272 1.19709C1.38764 2.64242 1.1305 4.3534 1.50813 5.98166C1.88577 7.60991 2.86979 9.03303 4.25984 9.96125C3.21498 9.93064 2.19286 9.64877 1.28 9.13949V9.22269C1.28041 10.7385 1.80513 12.2075 2.76516 13.3805C3.72519 14.5535 5.06141 15.3584 6.5472 15.6585C5.58064 15.9222 4.5665 15.9607 3.58272 15.7712C4.00242 17.0756 4.81924 18.2163 5.91899 19.0338C7.01873 19.8512 8.34644 20.3046 9.71648 20.3305C8.35525 21.4005 6.79642 22.1916 5.12917 22.6585C3.46191 23.1255 1.71895 23.2591 0 23.0518C3.00244 24.9785 6.4959 26.0005 10.0634 25.9958"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div className="right_box">
          {useLocation().pathname == "/" ? (
            <Link
              className="anchor_bg anchor_login btn_animate"
              to="/"
              onClick={connectWalletPressed}
            >
              CONNECT WALLET
            </Link>
          ) : (
              ""
            )}

          {useLocation().pathname === "/whitepaper" ? (
            <Link className="anchor_bg btn_animate" to="/">
              HOME
            </Link>
          ) : (
              ""
            )}

          {useLocation().pathname == "/roadmap" ? (
            <Link className="anchor_bg btn_animate" to="/">
              HOME
            </Link>
          ) : (
              ""
            )}

          {useLocation().pathname == "/whitepaper" ? (
            <Link className="anchor_bg btn_animate" to="/roadmap">
              ROADMAP
            </Link>
          ) : (
              <Link className="anchor_bg btn_animate" to="/whitepaper">
                WHITEPAPER
            </Link>
            )}

          {useLocation().pathname == "/" ? (
            <Link className="anchor_bg btn_animate" to="/roadmap">
              ROADMAP
            </Link>
          ) : (
              ""
            )}

          {useLocation().pathname == "/log_in_page" ? (
            <Link className="anchor_bg btn_animate" to="/roadmap">
              ROADMAP
            </Link>
          ) : (
              ""
            )}
        </div>
      </div>

      <div className="logo_wrapper">
        <img
          src={require("../assets/img/area_royale_logo.png").default}
          alt="logo"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setWallet: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { setWallet })(Header);
