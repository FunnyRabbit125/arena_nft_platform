import React from "react";

function WhitePaper2(props) {
  return (
    <section id="WhitePaper2">
      <h1>Whitepaper</h1>
      <h2>Game Details</h2>
      <div id="about_game_details">
        <img
          src={require("../../assets/img/social_art_game.png").default}
          alt="img"
        />
        <p>
          Arena Royale is a game in which players stake their warriors to earn
          SILVER which can be used for multiple functionalities. Along with such
          players can use their warriors to fight in the arena and earn more
          silver.
        </p>
      </div>
      <h2>SILVER Token</h2>
      <div id="silver_token">
        <p>
          $Silver supply is 5,000,000,000:
          <br />
          <br />
          When supply reaches 2,400,000,000 $silver earned for staking, the
          staking “faucet” turns off.
          <br />
          <br />
          The developers will receive 600,000,000 $silver.
          <br />
          <br />
          Community Rewards will be allocated 2,000,000,000 $silver.
        </p>
        <img
          src={require("../../assets/img/social_art2.png").default}
          alt="img"
        />
      </div>
      <h2>Warrior Atributes</h2>
      <div id="warrior_attributes">
        <img
          src={require("../../assets/img/social_art3.png").default}
          alt="img"
        />
        <p>
          Each warrior is minted with a set of armor and attack weapons that
          come of different rarity. Each type and rarity is allocated a special
          ranking and thus decides the power of your warrior. These elements
          will effect the battle ability of your NFT in the ARENA.
        </p>
      </div>
      <div id="rarity_ranking_wrapper">
        <h2 className="title">RARITY RANKING</h2>
        <ul>
          <li>
            <h2>DIAMOND</h2>
          </li>
          <li>
            <h2>STEEL</h2>
          </li>
          <li>
            <h2>GOLD</h2>
          </li>
          <li>
            <h2>BRONZE</h2>
          </li>
          <li>
            <h2>IRON</h2>
          </li>
        </ul>
      </div>
      <div className="knights_wrapper">
        <h2>KNIGHTS</h2>
        <div id="knights">
          <img
            src={require("../../assets/img/diamond_65.png").default}
            alt="img"
          />
          <div className="knights_content">
            <table>
              <thead>
                <tr>
                  <td>ACTION</td>
                  <td>NOTES</td>
                  <td>RISK</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stake Knight</td>
                  <td>Earn 10,000 Silver/Day</td>
                  <td>NO RISK</td>
                </tr>

                <tr>
                  <td>Withdraw Silver</td>
                  <td>Receive 80% of silver when withdrawing.</td>
                  <td>
                    <small>
                      20% of withdrawal tax is distributed to staked vikings
                    </small>
                  </td>
                </tr>

                <tr>
                  <td>Withdraw Knight + Silver</td>
                  <td>
                    <small>
                      To Withdraw Knight + Silver, Warrior must have accumulated
                      2 days worth of Silver (20,000)
                    </small>
                  </td>
                  <td>
                    <small>
                      {" "}
                      50% Chance of all Silver accumulated by Knights is stolen
                      and split among all staked vikings
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="weapons_wrapper">
        <h3>Weapons</h3>
        <div id="weapons">
          <table>
            <thead>
              <tr>
                <td>
                  <b>SWORD</b>
                </td>
                <td>
                  <b>SPEAR</b>
                </td>
                <td>
                  <b style={{ marginRight: "0px" }}>AXE</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="weapons_wrapper armor_wrapper">
        <h3>Armor</h3>
        <div id="weapons" className="armor_wrapper_table">
          <table>
            <thead>
              <tr>
                <td>
                  <b>HELMET</b>
                </td>
                <td>
                  <b>CHEST</b>
                </td>
                <td>
                  <b>LEGPLATE</b>
                </td>
                <td>
                  <b>SHIELD</b>
                </td>
                <td>
                  <b style={{ marginRight: "0px" }}>LEGPLATE</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="knights_wrapper">
        <h2>VIKINGS</h2>
        <div id="knights">
          <img
            src={require("../../assets/img/VIKINGS.png").default}
            alt="img"
          />
          <div className="knights_content">
            <table>
              <thead>
                <tr>
                  <td>ACTION</td>
                  <td>NOTES</td>
                  <td>RISK</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stake Viking</td>
                  <td>Earn 20% of all silver generated on island</td>
                  <td>NO RISK</td>
                </tr>

                <tr>
                  <td>Withdraw Silver</td>
                  <td>Receive all withdrawn silver</td>
                  <td>NO RISK</td>
                </tr>

                <tr>
                  <td>Withdraw Viking + Silver</td>
                  <td>Receive all withdrawn silver</td>
                  <td>NO RISK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="weapons_wrapper">
        <h3>Weapons</h3>
        <div id="weapons" className="weapons2_wrapper_table">
          <table>
            <thead>
              <tr>
                <td>
                  <b>SWORD</b>
                </td>
                <td>
                  <b>SPEAR</b>
                </td>
                <td>
                  <b>AXE</b>
                </td>
                <td>
                  <b style={{ marginRight: "0px" }}>HAMMER</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="weapons_wrapper armor_wrapper">
        <h3>Armor</h3>
        <div id="weapons" className="armor_wrapper_table">
          <table>
            <thead>
              <tr>
                <td>
                  <b>HELMET</b>
                </td>
                <td>
                  <b>CHEST</b>
                </td>
                <td>
                  <b>LEGPLATE</b>
                </td>
                <td>
                  <b>SHIELD</b>
                </td>
                <td>
                  <b style={{ marginRight: "0px" }}>LEGPLATE</b>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
                <td>
                  <b>DIAMOND</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
                <td>
                  <b>STEEL</b>
                </td>
              </tr>

              <tr>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
                <td>
                  <b>GOLD</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
                <td>
                  <b>BRONZE</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
                <td>
                  <b>IRON</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </section>
  );
}

export default WhitePaper2;
