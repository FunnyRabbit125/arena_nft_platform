import { useEffect, useState } from 'react';
import { SilverHunterContract, CastleContract } from '../../utils/contract';

const GameStats = () => {
    const [knightMinted, setKnightMinted] = useState();
    const [knightStaked, setKnightStaked] = useState();
    const [vikingMinted, setVikingMinted] = useState();
    const [vikingStaked, setVikingStaked] = useState();
    const [stolenKnights, setStolenKnights] = useState();
    const [stolenVikings, setStolenVikings] = useState();

    useEffect(() => {
        // async function init() {
        //     const tokenMinted = await SilverHunterContract.methods.tokensMinted().call();
        //     const vMinted = await SilverHunterContract.methods.vikingMinted().call();
        //     setKnightMinted(tokenMinted - vMinted);
        //     setVikingMinted(vMinted);

        //     const kStaked = await CastleContract.methods.totalKnightStaked().call();
        //     setKnightStaked(kStaked);
        //     const vStaked = await CastleContract.methods.totalVikingStaked().call();
        //     setVikingStaked(vStaked);

        //     const kStolen = await SilverHunterContract.methods.knightStolen().call();
        //     setStolenKnights(kStolen);
        //     const vStolen = await SilverHunterContract.methods.vikingStolen().call();
        //     setStolenVikings(vStolen);
        // }

        // init();

        let isMounted = true;

        SilverHunterContract.methods.tokensMinted().call()
          .then(tokenMinted => {
            // if (isMounted) {
            //   setStakedKnights(stkKnights);
            // }
            SilverHunterContract.methods.vikingMinted().call()
                .then(vMinted => {
                    if (isMounted) {
                        setKnightMinted(tokenMinted - vMinted);
                        setVikingMinted(vMinted);
                    }
                })
          });
        
        CastleContract.methods.totalKnightStaked().call()
        .then(kStaked => {
            if (isMounted) setKnightStaked(kStaked);
        });
        CastleContract.methods.totalVikingStaked().call()
        .then(vStaked => {
            if (isMounted) setVikingStaked(vStaked);
        });
        
        SilverHunterContract.methods.knightStolen().call()
        .then(kStolen => {
            if (isMounted) setStolenKnights(kStolen);
        });
        SilverHunterContract.methods.vikingStolen().call()
        .then(vStolen => {
            if (isMounted) setStolenVikings(vStolen);
        })
        
        return () => { isMounted = false };
    }, []);

    return (
        <div className="shield_wrapper">
            <h2>GAME STATS</h2>
            <table>
                <tbody>
                    <tr>
                        <td>KNIGHTS MINTED</td>
                        <td>{knightMinted}</td>
                    </tr>
                    <tr>
                        <td>KNIGHTS STAKED</td>
                        <td>{knightStaked}</td>
                    </tr>
                    <tr>
                        <td>VIKINGS MINTED</td>
                        <td>{vikingMinted}</td>
                    </tr>
                    <tr>
                        <td>VIKINGS STAKED</td>
                        <td>{vikingStaked}</td>
                    </tr>
                    <tr>
                        <td>STOLEN KNIGHTS</td>
                        <td>{stolenKnights}</td>
                    </tr>
                    <tr>
                        <td>STOLEN VIKINGS</td>
                        <td>{stolenVikings}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameStats;