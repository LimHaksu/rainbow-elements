function RainbowElements() {
    // Options for the observer (which mutations to observe)
    this.config = { attributes: true, childList: true, subtree: true };

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(this.paint);
}

RainbowElements.prototype.paint = function () {
    const maxHue = 280;
    const targetDoms = document.querySelectorAll(".rainbow-elements");
    targetDoms.forEach((targetDom) => {
        const type = targetDom.dataset.type;
        const saturation = targetDom.dataset.saturation || "1";
        const lightness = targetDom.dataset.lightness || "0.5";
        const alpha = targetDom.dataset.alpha || "1";
        const numOfElements = targetDom.children.length;
        Array.from(targetDom.children).forEach((childDom, index) => {
            const hsla = `hsla(${index === 0 ? 0 : (maxHue / (numOfElements - 1)) * index}, ${
                parseFloat(saturation) * 100 + "%"
            }, ${parseFloat(lightness) * 100 + "%"}, ${alpha})`;
            switch (type) {
                case "background":
                    childDom.style.backgroundColor = hsla;
                    break;
                case "svg":
                    childDom.style.fill = hsla;
                    break;
                default:
                    childDom.style.color = hsla;
                    break;
            }
        });
    });
};

RainbowElements.prototype.clear = function () {
    const targetDoms = document.querySelectorAll(".rainbow-elements");
    targetDoms.forEach((targetDom) => {
        const type = targetDom.dataset.type;
        Array.from(targetDom.children).forEach((childDom) => {
            switch (type) {
                case "background":
                    childDom.style.backgroundColor = null;
                    break;
                case "svg":
                    childDom.style.fill = null;
                    break;
                default:
                    childDom.style.color = null;
                    break;
            }
        });
    });
};

RainbowElements.prototype.run = function () {
    this.paint();
    this.observer.observe(document.body, this.config);
};

RainbowElements.prototype.stop = function () {
    this.clear();
    this.observer.disconnect();
};

export default new RainbowElements();
