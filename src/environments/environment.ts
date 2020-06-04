// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as Btc from 'bitcoinjs-lib';

export const environment = {
    production: false,
    version: 0.03,
    STRIPE_PUBLIC_KEY: 'pk_test_xVAqsYMxwh3AZfJcYu1hruyE',
    PAYPAL_CLIENT_ID: 'AdmdQayzrKMsDPxU89G_UWcLVfFlHhG-zfFm4I75F6xusJ64AIBOre6J6NxfzsM6JStHQmtviHoCp59x',
    url:"https://kanbantest.fabcoinapi.com/",
    tmpUrl:  "http://13.124.235.105:3000/",    
    baseUrl: 'https://exchangily.net',
    campaignId: 1,
    OTC_COMMISSION_RATE: 0.001,
    chains: {
        BTC: {
            network: Btc.networks.testnet,
            satoshisPerBytes: 60,
            bytesPerInput: 148
        },
        ETH: {
            chain: 'ropsten', 
            hardfork: 'byzantium',
            gasPrice: 30000000000,
            gasLimit: 100000
        },
        FAB: {
            chain: {
                name: 'test',
                networkId: 212,
                chainId: 212                
            },
            satoshisPerBytes: 50,
            bytesPerInput: 148,
            gasPrice: 50,
            gasLimit: 800000            
        },
        KANBAN: {
            chain: {
                name: 'test',
                networkId: 212,
                chainId: 212                
            },
            gasPrice: 50000000,
            gasLimit: 20000000              
        }        
    },
    endpoints: {
        // blockchaingate: 'http://localhost:3002/v2/',
        blockchaingate: 'https://test.blockchaingate.com/v2/',
        coingecko: 'https://api.coingecko.com/',
        kanban: 'https://kanbantest.fabcoinapi.com/',
        BTC: {
            exchangily: 'https://btctest.fabcoinapi.com/'
        },
        FAB: {
            exchangily: 'https://fabtest.fabcoinapi.com/'
        },
        ETH: {
            exchangily: 'https://ethtest.fabcoinapi.com/',
            // etherscan: 'https://api-ropsten.etherscan.io/'
        },
        BCH: {
            exchangily: 'https://bchtest.fabcoinapi.com/',
        }
        // pricehistory: 'http://18.223.17.4:3002/klinedata/'

    },
    CoinType: {
        BTC: 1,
        ETH: 60,
        FAB: 1150,
        BCH: 145,
        LTC: 2,
        DOG: 3
    },
    addresses: {
        smartContract: {
            FABLOCK: '0xa7d4a4e23bf7dd7a1e03eda9eb7c28a016fd54aa',
            // EXG: '0x311acf4666477a22c2f16c53b88c1734ee227fc6',
            EXG: '0x867480ba8e577402fa44f43c33875ce74bdc5df6',
            USDT: '0x1c35eCBc06ae6061d925A2fC2920779a1896282c',
            DUSD: '0x78f6bedc7c3d6500e004c6dca19c8d614cfd91ed',
            BNB: '0xE90e361892d258F28e3a2E758EEB7E571e370c6f',
            INB: '0x919c6d21670fe8cEBd1E86a82a1A74E9AA2988F8',
            REP: '0x4659c4A33432A5091c322E438e0Fb1D286A1EbdE',
            HOT: '0x6991d9fff5de74085f5c786d425403601280c8f4',
            CEL: '0xa07a1ab0a8e4d95683dce8d22d0ed665499f0a2b',
            MATIC: '0x39ccec89a2251652265ab63fdcd551b6f65e37d5',
            IOST: '0x4dd868d8d961f202e3244a25871105b5e1feaa62',
            MANA: '0x4527fa0ce6f221a7b9e54412d7a3edd9a37c350a',
            FUN: '0x98e6affb8192ffd89a62e27dc5a594cd3c1fc8db', //??
            WAX: '0xb2140669d08a02b78a9fb4a9ebe36371ae023e5f',
            ELF: '0xdd3d64919c119a7cde45763b94cf3d1b33fdaff7',
            GNO: '0x94fd1b18c927935d4f1751239172ad212281f4ac', 
            POWR: '0x6e981f5d973a3ab55ff9db9a77f4123b71d833dd',
            WINGS: '0x08705dc287150ba2da249b5a1b0c3b99c71b4100',
            MTL: '0x1c9b5afa112b42b12fb06b62e5f1e159af49dfa7',
            KNC: '0x3aad796ceb3a1063f727c6d0c698e37053292d10',
            MHC: '0xa4d06b2f52d1e736754115be11b6b7b56566564d',
            GVT: '0x3e610d9fb322063e50d185e2cc1b45f007e7180c'
        },
        /*
        exchangilyOfficial: [
            { name: 'EXG', address: '0xdcd0f23125f74ef621dfa3310625f8af0dcd971b'},
            { name: 'FAB', address: 'n1eXG5oe6wJ6h43akutyGfphqQsY1UfAUR'},
            { name: 'BTC', address: 'muQDw5hVmFgD1GrrWvUt6kjrzauC4Msaki'},
            { name: 'ETH', address: '0x02c55515e62a0b25d2447c6d70369186b8f10359'},
            { name: 'USDT', address: '0x02c55515e62a0b25d2447c6d70369186b8f10359'},
            { name: 'DUSD', address: '0xdcd0f23125f74ef621dfa3310625f8af0dcd971b'}
        ],
        */
       exchangilyOfficial: {
        EXG: '0xdcd0f23125f74ef621dfa3310625f8af0dcd971b',
        FAB: 'n1eXG5oe6wJ6h43akutyGfphqQsY1UfAUR',
        BTC: 'muQDw5hVmFgD1GrrWvUt6kjrzauC4Msaki',
        ETH: '0x02c55515e62a0b25d2447c6d70369186b8f10359',
        USDT: '0x02c55515e62a0b25d2447c6d70369186b8f10359',
        DUSD: '0xdcd0f23125f74ef621dfa3310625f8af0dcd971b'
       },
        promotionOfficial: {
            USDT: '0x4e93c47b42d09f61a31f798877329890791077b2',
            DUSD: '0xcdd40948208b0098b6a51e69d945de4692766ef3',
            BTC: 'muQDw5hVmFgD1GrrWvUt6kjrzauC4Msaki',
            ETH: '0x4e93c47b42d09f61a31f798877329890791077b2',
            FAB: 'n1eXG5oe6wJ6h43akutyGfphqQsY1UfAUR'
        },
        otcOfficial: {
            USDT: '0x4e93c47b42d09f61a31f798877329890791077b2',
            DUSD: '0xcdd40948208b0098b6a51e69d945de4692766ef3',
            BTC: 'muQDw5hVmFgD1GrrWvUt6kjrzauC4Msaki',
            ETH: '0x4e93c47b42d09f61a31f798877329890791077b2',
            FAB: 'n1eXG5oe6wJ6h43akutyGfphqQsY1UfAUR'
        }       
    },
    websockets: {
        allprices: 'wss://kanbantest.fabcoinapi.com/ws/allprices',
        trades: 'wss://kanbantest.fabcoinapi.com/ws/trades',
        orders: 'wss://kanbantest.fabcoinapi.com/ws/orders',
        kline: 'wss://kanbantest.fabcoinapi.com/ws/ticker' 
    },
    minimumWithdraw: {
        EXG: 10,
        BTC: 0.002,
        FAB: 0.005,
        ETH: 0.01,
        USDT: 10,
        DUSD: 10
    },
    PaymentMethod: {
        ETransfer: {
            AccountName: 'Exchangily',
            Email: 'info@exchangily.com'
        },
        Wechat: 'exchangily',
        Alipay: 'info@exchangily.com',
        DirectTransfer: {
            BankName: '招商银行',
            AccountName : 'Exchangily',
            Account: '88884556555433234455'
        }
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone._run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
