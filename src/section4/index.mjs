/**
 * const , letなどの変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// var1 = "上書き";
// console.log(var1);

// var var1 = "再宣言";
// console.log(var1);

/**
 * let変数
 */
// let let1 = "let変数";
// console.log(let1);

// let1 = "上書きlet";
// console.log(let1);

/**再宣言はlet変数だと不可能 */
// let let1 = "再宣言let";
// console.log(let1);

/**
 * const変数
 */
// const const1 = "const変数";
// console.log(const1);

// /**const宣言だと上書き不可 */
// const1 = "上書きconst";
// console.log(const1);

/**const宣言は再宣言不可 */
// const const1 = "再宣言ふか";
// console.log(const1);

// constで宣言したオブジェクトはプロパティの変更が可能
// const object1 = {
//   name: "aa",
//   age: 21,
// };
// console.log(object1);
// object1.name = "たこ"; //変更
// console.log(object1);

// const で定義した配列はプロパティの変更が可能
// const arr = ["dog", "cat"];
// console.log(arr);
// arr[0] = "rabbit";
// console.log(arr);

/**
 * テンプレート文字列
 */
// const name = "はるや";
// const age = 21;
// const templatemsg = `${name}は${age}歳です`;
// console.log(templatemsg);

/**
 * アロー関数
 */
//従来の関数宣言
// function func1(str) {
//   return str;
// }
//アロー関数
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("func1"));
//2つの引数
// const func2 = (str1, str2) => {
//   return str1 + str2;
// };
// console.log(func2("func", "2"));

/**
 * 分割代入
 */
// const myprof = {
//   name: "はるや",
//   age: 21,
// };

// const { name, age } = myprof;
// const msg1 = `${name}, ${age}`;
// console.log(msg1);

// const myprofArry = ["haruya", 21];
// const [nameArr, ageArr] = myprofArry;
// console.log(nameArr, ageArr);

/**
 * デフォルト値(引数,分割代入)
 */
// const sayHello = (name = "タコ") => console.log(`こんにちは${name}さん`);
// sayHello();

// const myprof2 = {
//   age2: 21,
// };
// const { age2, name2 = "げすと" } = myprof2;
// console.log(age2, name2);

/**
 * オブジェクトの省略記号
 */
// const name3 = "はるや";
// const age3 = 21;

// const myprof3 = {
//   name3,
//   age3,
// };
// console.log(myprof3);

/**
 * スプレッド構文
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる (分割代入の応用)
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//展開、分解して処理、ある変数にまとめる

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// コピー
// const arr6 = [...arr4];

//結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map, filterを使った配列の処理
 */
// const nameArr = ["haruya", "tatuya", "taiki"];

// nameArr.map((name) => {
//   console.log(name);
// });

// const numArr = [1, 2, 3, 4, 5];
// const evenArr = numArr.filter((num) => num % 2 != 0);
// console.log(evenArr);

// const filterdArr = nameArr.map((name) => {
//   if (name == "haruya") {
//     return name + "さん";
//   } else {
//     return name;
//   }
// });

// console.log(filterdArr);

/**
 * 三項演算子
 */
// const var1 = 1 > 0 ? "true" : "false";
// const num = 1300;

// const formattedNum = typeof num === "number" ? num.toLocaleString() : num;
// console.log(formattedNum);

/**
 * 論理演算子のほんとうの意味を知ろう
 */
// truthy, falsyについて(暗黙的)
// "ABC" 0 10 undefined null false NaN "" [] {}

const var1 = {};
if (var1) {
  console.log("varはtruthy");
} else {
  console.log("varはfalsy");
}
