export default function () {
    const maxHue = 280;
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function () {
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

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document.body, config);
}
