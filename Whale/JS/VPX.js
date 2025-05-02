const links_POL = {
    "wBTC/USDC_POL": "https://app.uniswap.org/positions/v3/polygon/2509465",
    "wETH/USDT_POL": "https://app.uniswap.org/positions/v3/polygon/2508320",
    "wMATIC/USDT_POL": "https://app.uniswap.org/positions/v3/polygon/2508316",
    "LINK/USDC_POL": "https://app.uniswap.org/positions/v3/polygon/2509716",
    "VOXEL/USDC_POL": "https://app.uniswap.org/positions/v4/polygon/17318",
    "WWD/USDC_POL": "https://app.uniswap.org/positions/v3/polygon/2516251",

    "AAVE/wETH_POL": "https://app.uniswap.org/positions/v3/polygon/2514475",

    "VOXEL/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2504163",
    "UNI/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2514434",
    "ELON/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2513772",
    "CRV/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2513762",
    "BONK/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2508326",
    "SHIB/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2513749",
    "wSOL/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2508354",
    "AIPEPE/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2516238",
    "APEPE/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2504741"

};

const links_UNI = {
    "USD₮0/WBTC_UNI": "https://app.uniswap.org/positions/v4/unichain/69738"
};

const links_CELO = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_FUSE = {
    "wETH/USDT_FUSE": "https://voltage.finance/pool/0x06b6949fca3706c25a312c1104b7e4fa11ce0bb6",
    "wFUSE/USDT_FUSE": "https://voltage.finance/pool/0x5e174874c5bc45ba96bd859a6eda4d34ee9f4424",
    "USDT/USDC.e_FUSE": "https://voltage.finance/pool/0x677409b2393e2ca19b454fb904f5e634e21d3d89",
    "wFUSE/VOLT_FUSE": "https://voltage.finance/pool/0x57827c76d7749961ef41e7918dd9f8cfdfc7d28d"
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
