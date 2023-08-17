const texti = document.querySelector("#text");

let word = "Lorem ipsum fhgjhgjhgfdgfgfdhgfj fghdolor sit amet btrytjukjy";
let words = word.split(" ");

function findMax(array) {
  let max;
  let num = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      num = array[i].length;
      max = array[i];
    }
  }
  console.log(max);
  return max;
}
findMax(words);
