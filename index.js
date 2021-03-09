let massLotteryNums = [];
let luckyNum = null;

let winningLotteryNums = [];
let winningLucky = null;

let winningCount = 0;
let prize = null;
let lucky = false;

const getLottery = () => {
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 47 + 1);
    massLotteryNums.push(num);
  }

  massLotteryNums.sort(function (x, y) {
    return x - y;
  });

  luckyNum = Math.floor(Math.random() * 17 + 1);
  console.log(massLotteryNums);
};

const getWinning = () => {
  let string = prompt(
    "Enter 5 lottery numbers (1 through 48) with a space between each of them:"
  );
  winningLucky = parseInt(prompt("Enter 1 lucky number (1 through 18):"));

  let result = string.split(" ");
  for (let i = 0; i < 5; i++) {
    let number = parseInt(result[i]);
    winningLotteryNums.push(number);
  }

  winningLotteryNums.sort(function (x, y) {
    return x - y;
  });
  console.log(winningLotteryNums);
};

const checkLottery = () => {
  winningLotteryNums.forEach((num) => {
    if (massLotteryNums.includes(num)) {
      winningCount++;
    }
  });
  if (winningLucky == luckyNum) {
    lucky = true;
  }
};

const computePrize = () => {
  if (winningCount === 5) {
    prize = lucky ? "$7,000 a WEEK for LIFE" : "$25,000 a YEAR for LIFE";
  } else if (winningCount === 4) {
    prize = lucky ? "$5,000" : "$200";
  } else if (winningCount === 3) {
    prize = lucky ? "$150" : "$20";
  } else if (winningCount === 2) {
    prize = lucky ? "$25" : "$3";
  } else if (winningCount === 1 && lucky) {
    prize = "$6";
  } else if (winningCount === 0 && lucky) {
    prize = "$4";
  } else {
    prize = "$0";
  }
};

const reportLottery = () => {
  let lotteryResult = document.getElementById("root");
  let massLotteryPrint = document.createElement("p");
  massLotteryPrint.innerHTML =
    "The Mass Lottery numbers were: " + massLotteryNums.join(" ");
  lotteryResult.appendChild(massLotteryPrint);

  let luckyNumPrint = document.createElement("p");
  luckyNumPrint.innerHTML = "The Lucky Number was: " + luckyNum;
  lotteryResult.appendChild(luckyNumPrint);

  let playerLotteryPrint = document.createElement("p");
  playerLotteryPrint.innerHTML =
    "Your numbers were: " + winningLotteryNums.join(" ");
  lotteryResult.appendChild(playerLotteryPrint);

  let playerLuckyPrint = document.createElement("p");
  playerLuckyPrint.innerHTML = "Your lucky number was: " + winningLucky;
  lotteryResult.appendChild(playerLuckyPrint);

  let winningCountPrint = document.createElement("p");
  winningCountPrint.innerHTML =
    winningCount + " lottery numbers matched with ours!";
  lotteryResult.appendChild(winningCountPrint);

  let luckyPrint = document.createElement("p");
  luckyPrint.innerHTML = lucky
    ? "The lucky numbers matched!"
    : "The lucky numbers did not match!";
  lotteryResult.appendChild(luckyPrint);

  let prizePrint = document.createElement("p");
  prizePrint.innerHTML = "The prize is " + prize;
  lotteryResult.appendChild(prizePrint);
};

getLottery();
getWinning();
checkLottery();
computePrize();
reportLottery();
