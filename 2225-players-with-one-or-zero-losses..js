/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let zeroLoss = [],
    oneLoss = [];

  const losers = matches.map((match) => match[1]);
  const players = [
    ...new Set(matches.map((match) => match[0]).concat(losers)),
  ].sort((a, b) => a - b);

  players.forEach((player) => {
    let lossNumber = losers.filter((loser) => loser === player).length;
    if (lossNumber == 0) zeroLoss.push(player);
    if (lossNumber == 1) oneLoss.push(player);
  });
  return [zeroLoss, oneLoss];
};
