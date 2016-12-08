const DashButton = require("dash-button"); // モジュール読み込み

console.log("I'm listening'");

const PHY_ADDR = "xx:xx:xx:xx:xx:xx";
let button = new DashButton(PHY_ADDR);

/*
  以下が発火するイベントの指定部。
*/
let i = 0;

button.addListener(() => {
  console.log("["+(i++)+"] It works."); // 今回はシンプルに呼び出し回数を併記してコンソール出力
});
