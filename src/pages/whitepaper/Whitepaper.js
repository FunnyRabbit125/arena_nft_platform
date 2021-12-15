import React from "react";

function Whitepaper(props) {
  return (
    <section id="Whitepaper">
      <h1>Whitepaper</h1>
      <h2>Game Details</h2>
      <p>
        Minting <br />
        10,000 GEN 0 Warriors (Knights & Vikings) <br />
        COST = 0.07 ETH <br />
        10,0000 GEN 1 Warriors (TBA) <br />
        40,000 SILVER <br /> <br />
        Warrior Attributes <br />
        <span className="alg_span">
          Each warrior is minted with a set of armor and attack weapons that
          come of different rarity. Each type and rarity is allocated a special
          ranking and thus decides the power of your warrior. These elements
          will effect the battle ability of your NFT in the ARENA.
        </span>
      </p>

      <div className="content_wrapper">
        <h3 className="rarity">Rarity</h3>
        <div className="content_sizer">
          <h3>DIAMOND</h3>
          <h3>STEEL</h3>
          <h3>GOLD</h3>
          <h3>BRONZE</h3>
          <h3>IRON</h3>
        </div>
        <div className="content_sizer_sm">
          <h3>AXE</h3>
          <h3>SWORD</h3>
          <h3>HAMMER</h3>
          <h3>SPEAR</h3>
        </div>
        <div className="content_footer">
          <p>
            EARNING $SILVER
            <br />
            <br />
            Silver is earned by staking your Warriors. Warriors earn a steady
            10,000 Silver per day + more based on special abilities of each
            warrior.
            <br />
            <br />
            Knights
            <br />
            <br />
            Earns 10,000 Silver / Day 20% tax to with Silver (Redistributed to
            staked Vikings) 50% Chance to lose all Silver When Unstaking Knight
            <br />
            <br />
            Viking
            <br />
            Earns redistributable Silver that is from taxed porton of Knights
            10% chance to steal a newly minted Warrior Zero tax when unstaking
            and claiming Silver
            <br />
            <br />
            SILVER
            <br />
            Used for minting new generations of Warriors
            <br />
            Enter the arena with a set wage to battle and take all your
            opponents Silver
            <br />
            Upgrade your warriors abilities etc (Upcoming)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Whitepaper;
