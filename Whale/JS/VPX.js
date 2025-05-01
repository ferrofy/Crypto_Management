const pol_liq = [
    //Const Pair
    { id: 2509465, label: "wBTC / USDC" },
    { id: 2508320, label: "wETH / USDT" },
    { id: 2508316, label: "wMATIC / USDT" },
    { id: 2509716, label: "LINK / USDC" },
    { id: 17318, label: "VOXEL / USDC" },

    //ETH Pair
    { id: 2514475, label: "AAVE / wETH" },

    //wMATIC Pair
    { id: 2504163, label: "VOXEL / wMATIC" },
    { id: 2514434, label: "UNI / wMATIC" },
    { id: 2513772, label: "ELON / wMATIC" },
    { id: 2513762, label: "CRV / wMATIC" },
    { id: 2508326, label: "BONK / wMATIC" },
    { id: 2513749, label: "SHIB / wMATIC" },
    { id: 2508354, label: "wSOL / wMATIC" }
];

const uni_liq = [
    // Const Pair
    { id: 69738, label: "USD₮0 / WBTC" }
];

const polygonContainer = document.querySelector("#polygon-container");
const unichainContainer = document.querySelector("#unichain-container");

function createIframe(url, label, container) {
    const iframeBox = document.createElement("div");
    iframeBox.className = "iframe-box";

    const textElement = document.createElement("span");
    textElement.className = "box-text";
    textElement.textContent = label;

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "80%";
    iframe.height = "600px";

    iframeBox.appendChild(textElement);
    iframeBox.appendChild(iframe);
    container.appendChild(iframeBox);
}

pol_liq.forEach(item => {
    createIframe(`https://app.uniswap.org/positions/v3/polygon/${item.id}`, item.label, polygonContainer);
});

uni_liq.forEach(item => {
    createIframe(`https://app.uniswap.org/positions/v4/unichain/${item.id}`, item.label, unichainContainer);
});
