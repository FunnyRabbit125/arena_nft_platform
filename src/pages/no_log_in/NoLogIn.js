import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameStats from '../gameStats/GameStats';

function NoLogIn({ walletAddress }) {
  if (walletAddress) {
    return <Navigate to='/log_in_page' />;
  }

  return (
    <section id="NoLogIn">
      <p className="d-none d-sm-block">
        WARRIORS & VIKINGS BATTLE IT OUT TO FIND OUT WHO REIGNS SUPREME. <br />{" "}
        $SILVER IS AT STAKE AND RICHES ARE READY FOR EVERYONE.
      </p>

      <div className="diamong_image_wrapper">
        <img
          className="diamond_1"
          src={require("../../assets/img/diamond_1.png").default}
          alt="diamond_1"
        />
        <img
          className="diamond_1 diamond_1_copy d-sm-none"
          src={require("../../assets/img/diamond_1.png").default}
          alt="diamond_1"
        />
        <img
          className="steel_1"
          src={require("../../assets/img/steel_1.png").default}
          alt="steel_1"
        />

        <GameStats />

        {/* <div className="btn_control_top btn_control d-sm-none">
          <Link to="/roadmap" className="btn_roadmap">
            CONNECT WALLET
          </Link>
        </div>

        <div className="btn_control">
          <Link to="/roadmap" className="btn_roadmap">
            ROADMAP
          </Link>
        </div> */}
      </div>
    </section>
  );
}

NoLogIn.propTypes = {
  walletAddress: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  walletAddress: state.wallet.walletAddress
});

export default connect(mapStateToProps)(NoLogIn);
