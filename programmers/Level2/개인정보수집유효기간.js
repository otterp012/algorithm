const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

const parsedTerms = {};
terms.forEach((item) => {
  const [term, num] = item.split(" ");
  parsedTerms[term] = +num;
});


const dateToDay = (string) => {
  const [y, m, d] = string.split(".").map(Number);

  const YY = 28 * 12;

  return y * YY + m * 28 + d;
};

const TToday = dateToDay(today);

const answer = privacies
  .map((item) => {
    const [date, term] = item.split(" ");
    const parsedTerm = parsedTerms[term];

    return dateToDay(date) + parsedTerm * 28 - 1;
  })
  .map((item, index) => {
    if (item < TToday) return index + 1;
  })
  .filter((item) => item);

console.log(dateToDay(today), answer);
