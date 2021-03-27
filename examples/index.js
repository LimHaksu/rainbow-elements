const { re } = window.RainbowElements;
re.run();
const exampleDoms = document.querySelectorAll(".example");
Array.from(exampleDoms).forEach((exampleDom) => {
    exampleDom.style.display = "flex";
    Array.from(exampleDom.children).forEach((childDom) => {
        childDom.className = "box";
    });
});

const runButton = document.querySelector("#run");
runButton.addEventListener("click", () => {
    re.paint();
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", () => {
    re.clear();
});
