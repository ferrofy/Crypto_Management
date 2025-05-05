const links_POL = {
    "wBTC/USDC.e_POL": "https://app.uniswap.org/positions/v3/polygon/2509465",
    "wETH/USDT_POL": "https://app.uniswap.org/positions/v3/polygon/2508320",
    "wMATIC/USDT_POL": "https://app.uniswap.org/positions/v3/polygon/2508316",
    "LINK/USDC.e_POL": "https://app.uniswap.org/positions/v3/polygon/2509716",
    "VOXEL/USDC_POL": "https://app.uniswap.org/positions/v4/polygon/17318",
    //"WWD/USDC.e_POL": "https://app.uniswap.org/positions/v3/polygon/2516251",

    "AAVE/wETH_POL": "https://app.uniswap.org/positions/v3/polygon/2514475",

    "VOXEL/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2504163",
    "UNI/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2514434",
    "ELON/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2513772",
    "CRV/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2513762",
    "BONK/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2508326",
    "SHIB/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2513749",
    "wSOL/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2508354",
    "AIPEPE/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2516238",
    "FTW/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2518059",
    "APEPE/wMATIC_POL": "https://app.uniswap.org/positions/v3/polygon/2504741"

};

const links_FUSE = {
    "wETH/USDT_FUSE": "https://voltage.finance/pool/0x06b6949fca3706c25a312c1104b7e4fa11ce0bb6",
    "wFUSE/USDT_FUSE": "https://voltage.finance/pool/0x5e174874c5bc45ba96bd859a6eda4d34ee9f4424",
    "USDT/USDC.e_FUSE": "https://voltage.finance/pool/0x677409b2393e2ca19b454fb904f5e634e21d3d89",
    "VOLT/wFUSE_FUSE": "https://voltage.finance/pool/0x57827c76d7749961ef41e7918dd9f8cfdfc7d28d"
};

const links_ZkSync = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_UNI = {
    "USD₮0/WBTC_UNI": "https://app.uniswap.org/positions/v4/unichain/69738"
};

const links_CELO = {
    "UBE/CELO_CELO": "https://app.ubeswap.org/#/pools/5393"
};

const links_Arbitrum = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_Base = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_AVAX = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_BERA = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_BLAST = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_CRONOS = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_GNOSIS = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_INK = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_Linea = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_OP = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_POL_Zk_EVM = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const links_SCROLL = {
    "Comming Soon": "https://ferrofy.github.io/Crypto_Management/Whale/VPX"
};

const linkMapping = { ...links_POL, ...links_UNI, ...links_CELO, ...links_FUSE, ...links_Arbitrum, ...links_AVAX, ...links_Base, ...links_BERA, ...links_BLAST, ...links_CRONOS, ...links_GNOSIS, ...links_INK, ...links_Linea, ...links_OP, ...links_POL_Zk_EVM, ...links_SCROLL };

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(aTag => {
        const key = aTag.getAttribute("href");
        if (linkMapping[key]) {
            aTag.href = linkMapping[key];
        }
    });
});
