const ReType = ["color", "backgroundColor", "fill", "stroke"] as const;
type ReType = typeof ReType[number];

const isReType = (type: string): type is ReType => {
    return ReType.indexOf(type as any) !== -1;
};

const errorMessage = (type: string) => {
    return `re-type error : "${type}" is not in re-type (${ReType.map((t) => `"${t}"`).join(" | ")})`;
};

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
            const type = targetDom.dataset.reType || "color";
            const saturation = targetDom.dataset.reSaturation || "1";
            const lightness = targetDom.dataset.reLightness || "0.5";
            const alpha = targetDom.dataset.reAlpha || "1";
            const numOfElements = targetDom.children.length;
            for (let index = 0; index < targetDom.children.length; ++index) {
                const childDom = targetDom.children[index] as HTMLElement;
                const hsla = `hsla(${index === 0 ? 0 : (maxHue / (numOfElements - 1)) * index}, ${
                    parseFloat(saturation) * 100 + "%"
                }, ${parseFloat(lightness) * 100 + "%"}, ${alpha})`;
                if (isReType(type)) {
                    childDom.style[type] = hsla;
                } else {
                    throw new Error(errorMessage(type));
                }
            }
        });
    }
    clear() {
        const targetDoms = document.querySelectorAll<HTMLElement>(".rainbow-elements");
        targetDoms.forEach((targetDom) => {
            const type = targetDom.dataset.reType || "color";
            for (let i = 0; i < targetDom.children.length; ++i) {
                const childDom = targetDom.children[i] as HTMLElement;
                if (isReType(type)) {
                    childDom.style[type] = "";
                } else {
                    throw new Error(errorMessage(type));
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
