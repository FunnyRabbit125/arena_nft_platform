export const getArtUrl = (tokenId) => {
    var artUrl = '';
    if (tokenId >= 1 && tokenId <= 2000) {
        artUrl = 'https://gateway.pinata.cloud/ipfs/QmRjf2bZqqEJxhoPPeNqg4wMmdEd7NcfsDNNYdsjLLt23H/Pattern_' + tokenId + '.png';
    } else if (tokenId <= 4000) {
        artUrl = 'https://gateway.pinata.cloud/ipfs/QmPnizdA3Doi6xU2Lv2FCt1KCratstJePjpPySxwcpMfEZ/Pattern_' + tokenId + '.png';
    } else if (tokenId <= 6000) {
        artUrl = 'https://gateway.pinata.cloud/ipfs/QmS9E1B74RvrA6oxpN76ixoEieuJmdNKsasZP8p6x9LJCz/Pattern_' + tokenId + '.png';
    } else if (tokenId <= 10000) {
        artUrl = 'https://gateway.pinata.cloud/ipfs/QmRMfv6a72PmDz2Zy5eAWz3B2HeDdGNLRupHQm6vw4sU3g/Pattern_' + tokenId + '.png';
    }
    return artUrl;
}