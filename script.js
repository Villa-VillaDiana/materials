//prepend section
function prependSection() {
  let container = document.querySelector(".prepend-container");
  const newPrepSection = document.createElement("div");

  newPrepSection.classList.add("new-prepend-section");
  // newSection.style.border = "1px solid blue";
  newPrepSection.textContent = "New Prepend Section";

  container.prepend(newPrepSection);
}
//append section
function appendSection() {
  let container = document.querySelector(".append-container");
  const newAppSection = document.createElement("div");

  newAppSection.classList.add("new-append-section");
  newAppSection.textContent = "New Append Section";

  container.append(newAppSection);
}
// insert adjacent html section using afterbegin
function insertAdjacentSectionAB() {
  let container = document.querySelector(".adjacent-ab-container");
  const newElement =
    '<div class="new-adjacent-ab-section">using afterbegin</div>';

  container.insertAdjacentHTML("afterbegin", newElement);
}
//insert adjacent html section using afterend
function insertAdjacentSectionAE() {
  let container = document.querySelector(".adjacent-ae-container");
  const newElement =
    '<div class="new-adjacent-ae-section">using afterend</div>';

  container.insertAdjacentHTML("afterend", newElement);
}
//insert adjacent html section using beforebegin
function insertAdjacentSectionBB() {
  let container = document.querySelector(".adjacent-bb-container");
  const newElement =
    '<div class="new-adjacent-bb-section">using beforebegin</div>';

  container.insertAdjacentHTML("beforebegin", newElement);
}
//insert adjacent html section using beforeend
function insertAdjacentSectionBE() {
  let container = document.querySelector(".adjacent-be-container");
  const newElement =
    '<div class="new-adjacent-be-section">using beforeend</div>';

  container.insertAdjacentHTML("beforeend", newElement);
}
//clone
function clone() {
  let container = document.querySelector(".clone-container");
  const input = document.querySelector(".clone-input");

  container.append(input.cloneNode());
}
//before
function oneBefore2() {
  let elem1 = document.querySelector("#before_section_1");
  let elem2 = document.querySelector("#before_section_2");

  elem2.before(elem1);
}

function twoBefore1() {
  let elem1 = document.querySelector("#before_section_1");
  let elem2 = document.querySelector("#before_section_2");

  elem1.before(elem2);
}

function oneAfter2() {
  let elem1 = document.querySelector("#after_section_1");
  let elem2 = document.querySelector("#after_section_2");

  elem2.after(elem1);
}

function twoAfter1() {
  let elem1 = document.querySelector("#after_section_1");
  let elem2 = document.querySelector("#after_section_2");

  elem1.after(elem2);
}

function remove(element) {
  element.parentElement.remove();
}
