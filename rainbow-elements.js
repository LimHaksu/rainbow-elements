const maxHue = 280;
window.addEventListener("DOMContentLoaded", (e) => {
    const targetDoms = document.querySelectorAll(".rainbow-elements");
    targetDoms.forEach((targetDom) => {
        const type = targetDom.dataset.type;
        const saturation = targetDom.dataset.saturation || "100%";
        const lightness = targetDom.dataset.lightness || "50%";
        const alpha = targetDom.dataset.alpha || "1";
        const numOfElements = targetDom.children.length;
        Array.from(targetDom.children).forEach((childDom, index) => {
            const hsla = `hsla(${
                index === 0 ? 0 : (maxHue / (numOfElements - 1)) * index
            }, ${saturation}, ${lightness}, ${alpha})`;
            switch (type) {
                case "background":
                    childDom.style.backgroundColor = hsla;
                    break;
                default:
                    childDom.style.color = hsla;
                    break;
            }
        });
    });
});
