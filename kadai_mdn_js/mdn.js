// 年月日の取得
const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

// 年月日の出力
console.log(year + '年' + month + '月' + day + '日');

