import { useEffect, useState } from 'react';
import { SilverHunterContract, CastleContract } from '../../utils/contract';

const GameStats = () => {
    const [knightMinted, setKnightMinted] = useState(0);
    const [knightStaked, setKnightStaked] = useState(0);
    const [vikingMinted, setVikingMinted] = useState(0);
    const [vikingStaked, setVikingStaked] = useState(0);
    const [stolenKnights, setStolenKnights] = useState(0);
    const [stolenVikings, setStolenVikings] = useState(0);

    useEffect(() => {
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
            <table cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td>
                            <b>KNIGHTS MINTED</b>
                        </td>
                        <td>
                            <b>{knightMinted}</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>KNIGHTS STAKED</b>
                        </td>
                        <td>
                            <b>{knightStaked}</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>VIKINGS MINTED</b>
                        </td>
                        <td>
                            <b>{vikingMinted}</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>VIKINGS STAKED</b>
                        </td>
                        <td>
                            <b>{vikingStaked}</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>STOLEN KNIGHTS</b>
                        </td>
                        <td>
                            <b>{stolenKnights}</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>STOLEN VIKINGS</b>
                        </td>
                        <td>
                            <b>{stolenVikings}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameStats;