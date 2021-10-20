let bilInput = document.getElementById("bill");
let tipPercentages = document.querySelectorAll(".tipAmount-btns");
let customInput = document.getElementById("custom");
let personInput = document.getElementById("person");
let resetBtn = document.getElementById("reset");
let resultPerPerson = document.getElementById("result-person");
let resultAll = document.getElementById("result-all");
let erorMes = document.getElementById("eror-m");

let bill = 0;
let tipPercent = 0;
let persons = 1;
tipPercentages.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    customInput.value = "";
    customInput.blur();
    tipPercentages.forEach(function (e) {
      e.classList.remove("checked");
    });
    e.target.classList.add("checked");
    tipPercent = Number(e.target.getAttribute("data-value"));
    tipCalc(bill, tipPercent, persons);
  });
});

customInput.addEventListener("click", function (e) {
  tipPercentages.forEach(function (e) {
    e.classList.remove("checked");
  });
});

customInput.addEventListener("input", function (e) {
  tipPercent = Number(customInput.value);
  tipCalc(bill, tipPercent, persons);
});

bilInput.addEventListener("input", function (e) {
  bill = bilInput.value;
  tipCalc(bill, tipPercent, persons);
});

personInput.addEventListener("input", function (e) {
  if (personInput.value == 0) {
    personInput.style.outlineColor = "#b57b6d";
    erorMes.style.opacity = 1;
  } else {
    personInput.style.outlineColor = "#5daaa2";
    erorMes.style.opacity = 0;
    persons = personInput.value;
    tipCalc(bill, tipPercent, persons);
  }
});

function tipCalc(bill, percent, persons) {
  let totalTip = 0;
  totalTip = bill * (percent / 100);
  let tipPerPerson = totalTip / persons;
  let totalAmount = bill + totalTip;
  let totalPerPerson = totalAmount / persons;
  resultPerPerson.textContent = `$${tipPerPerson.toFixed(2)}`;
  resultAll.textContent = `$${tipPerPerson.toFixed(2)}`;
}
resetBtn.addEventListener("click", function (e) {
  bill = 0;
  tipPercent = 0;
  persons = 1;
  tipPercentages.forEach(function (e) {
    e.classList.remove("checked");
  });

  customInput.value = ""
  personInput.value = ""
  bilInput.value = ""
  resultAll.textContent = `$0.00`
  resultPerPerson.textContent = `$0.00`
});
