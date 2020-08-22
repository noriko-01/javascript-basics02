"use strict"

//showRank
let score = Math.round(Math.random() * 100);
console.log("得点：" + score);
if (score >= 80) {
  console.log("成績は優です");
} else if (score >= 70) {
  console.log("成績は良です");
} else if (score >= 60) {
  console.log("成績は可です");
} else {
  console.log("成績は不可です");
}

// 論理演算子
let num = Math.round(Math.random() * 100);
console.log("現在の値" + num);
if ((num % 2 === 0) && (num % 3 === 0)) {
  console.log("2の倍数でしかも３の倍数である。");
} else {
  console.log("それ以外です。");
}

// switch
let nu = Math.round(Math.random() * 5);
console.log("現在の値" + nu);
switch (nu) {
  case 1:
    console.log("大吉です！");
    break;
  case 2:
    console.log("中吉です");
    break
  case 3:
    console.log("吉です");
    break
  case 4:
    console.log("凶です");
    break
  case 5:
    console.log("大喬です");
    break
  default:
    console.log("これが表示されたら破滅です");
    break
}

//fiveSeasons
let month = Math.round(Math.random() * 11) + 1;
switch (month) {
  case 3:
  case 4:
  case 5:
    console.log(month + "月は春です");
    break;
  case 6:
    console.log(month + "月は梅雨です");
    break;
  case 7:
  case 8:
  case 9:
    console.log(month + "月は夏です");
    break;
  case 10:
  case 11:
    console.log(month + "月は秋です");
    break;
  case 12:
  case 1:
  case 2:
    console.log(month + "月は冬です");
    break;
}



