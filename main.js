var ball = prompt("Ballni kirirting...");

if (ball < 80) {
  alert("O`qishga kira olmadingiz");
} else if (ball == 80 || (ball > 80 && ball < 100)) {
  alert("Siz Super Kantrakt asosida o`qishga qabul qilindingiz!");

  var efford = prompt("Kantrakt miqdori yiliga 3000$, qancha pulingiz bor?");
  if (efford > 3000) {
    alert("O`qishga qabul qilindingiz!");
  } else {
    alert("Kira olmadingiz.");
  }
} else if (ball == 100 || (ball > 100 && ball < 130)) {
  alert("Siz kantrakt asosida qabul qilindingiz!");

  var efford = prompt("Kantrakt miqdori yiliga 2000$, qancha pulingiz bor?");
  if (efford > 2000) {
    alert("O`qishga qabul qilindingiz!");
  } else {
    alert("Kira olmadingiz.");
  }
} else if (ball == 130 || (ball > 130 && ball == 180) || ball < 180) {
  alert("Tabriklaymiz! Siz GRAND asosida o`qishga qabul qilindingiz!");
} else {
  alert("Mavjud bo`lmagan miqdor kiritildi!");
}
