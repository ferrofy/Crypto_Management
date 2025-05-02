const links_POL = {
    "wBTC / USDC": "https://app.uniswap.org/positions/v3/polygon/2509465",
    "wETH / USDT": "https://app.uniswap.org/positions/v3/polygon/2508320",
    "wMATIC / USDT": "https://app.uniswap.org/positions/v3/polygon/2508316",
    "LINK / USDC": "https://app.uniswap.org/positions/v3/polygon/2509716",
    "VOXEL / USDC": "https://app.uniswap.org/positions/v3/polygon/17318",
    "WWD / USDC": "https://app.uniswap.org/positions/v3/polygon/2516251",

    "AAVE / wETH": "https://app.uniswap.org/positions/v3/polygon/2514475",

    "VOXEL / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2504163",
    "UNI / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2514434",
    "ELON / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2513772",
    "CRV / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2513762",
    "BONK / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2508326",
    "SHIB / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2513749",
    "wSOL / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2508354",
    "AIPEPE / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2516238",
    "APEPE / wMATIC": "https://app.uniswap.org/positions/v3/polygon/2504741"

};

const links_UNI = {
    "USD₮0 / WBTC": "https://app.uniswap.org/positions/v4/unichain/69738"
};

const links_CELO = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_FUSE = {
    "wETH / USDT": "https://voltage.finance/pool/0x06b6949fca3706c25a312c1104b7e4fa11ce0bb6",
    "wFUSE / USDT": "https://voltage.finance/pool/0x5e174874c5bc45ba96bd859a6eda4d34ee9f4424",
    "USDT / USDC.e": "https://voltage.finance/pool/0x677409b2393e2ca19b454fb904f5e634e21d3d89",
    "wFUSE / USDT": "https://voltage.finance/pool/0x57827c76d7749961ef41e7918dd9f8cfdfc7d28d"
};

const linkMapping = { ...links_POL, ...links_UNI, ...links_CELO, ...links_FUSE };

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(aTag => {
        const key = aTag.getAttribute("href");
        if (linkMapping[key]) {
            aTag.href = linkMapping[key];
        }
    });
});
