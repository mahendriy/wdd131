const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#button_A");

let count = 1;
buttonA.onclick = () => {
    buttonA.textContent = "Try again";
    headingA.textContent = `${count} clicks so far`;
    count += 1;
};

