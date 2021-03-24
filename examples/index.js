import RainbowElements from "./rainbow-elements.js";

const exampleDoms = document.querySelectorAll(".example");
Array.from(exampleDoms).forEach((exampleDom) => {
    exampleDom.style.display = "flex";
    Array.from(exampleDom.children).forEach((childDom) => {
        childDom.className = "box";
    });
});

const runButton = document.querySelector("#run");
runButton.addEventListener("click", () => {
    RainbowElements.paint();
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", () => {
    RainbowElements.clear();
});
