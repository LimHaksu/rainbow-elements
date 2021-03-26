class RainbowElements {
    config: { attributes: boolean; childList: boolean; subtree: boolean };
    observer;
    constructor() {
        this.config = { attributes: true, childList: true, subtree: true };
        this.observer = new MutationObserver(this.paint);
    }
    paint() {
        const maxHue = 270;
        const targetDoms = document.querySelectorAll<HTMLElement>(".rainbow-elements");
        targetDoms.forEach((targetDom) => {
            const type = targetDom.dataset.reType;
            const saturation = targetDom.dataset.reSaturation || "1";
            const lightness = targetDom.dataset.reLightness || "0.5";
            const alpha = targetDom.dataset.reAlpha || "1";
            const numOfElements = targetDom.children.length;
            for (let index = 0; index < targetDom.children.length; ++index) {
                const childDom = targetDom.children[index] as HTMLElement;
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
            }
        });
    }
    clear() {
        const targetDoms = document.querySelectorAll<HTMLElement>(".rainbow-elements");
        targetDoms.forEach((targetDom) => {
            const type = targetDom.dataset.reType;
            for (let i = 0; i < targetDom.children.length; ++i) {
                const childDom = targetDom.children[i] as HTMLElement;
                switch (type) {
                    case "background":
                        childDom.style.backgroundColor = "";
                        break;
                    case "svg":
                        childDom.style.fill = "";
                        break;
                    default:
                        childDom.style.color = "";
                        break;
                }
            }
        });
    }
    run() {
        this.paint();
        this.observer.observe(document.body, this.config);
    }
    stop() {
        this.clear();
        this.observer.disconnect();
    }
}

const re = new RainbowElements();
export { re };
