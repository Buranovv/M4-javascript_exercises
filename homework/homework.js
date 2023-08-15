const texti = document.querySelector("#text");

let word = "Lorem ipsum fhgjhgjhgfdgfgfdhgfj fghdolor sit amet btrytjukjy";
let words = word.split(" ");

let max;
var num = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].length > num) {
    var num = words[i].length;
    max = words[i];
  }
}
console.log(max);
