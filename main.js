let name = prompt("Ismingizni kiriting...");

let money = Number(
  prompt(`${name}, qancha pulingiz bor? (Faqat so\`mda kiriting!)`)
);

const travel = 500 * 11000.34;
const hotel = 250 * 11000.34;
const walk = 120 * 12354.03;
let total = travel + hotel + walk;

if (money >= total) {
  alert(`Oq yo\`l, ${name}`);
} else {
  alert(`${name}, ozgina sabr qilish kerak bo\`lar ekan.`);
}
