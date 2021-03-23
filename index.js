import rainbowPaint from "./rainbow-elements.js";

const exampleDoms = document.querySelectorAll(".example");
Array.from(exampleDoms).forEach((exampleDom) => {
    exampleDom.style.display = "flex";
    Array.from(exampleDom.children).forEach((childDom) => {
        childDom.className = "box";
    });
});

rainbowPaint();
