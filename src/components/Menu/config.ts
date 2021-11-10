import { MenuEntry } from 'uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  // {
  //   label: 'Layered Farming',
  //   icon: 'LayerIcon',
  //   items: [
  //     {
  //       label: 'Layer 1 - PolyWise',
  //       href: 'https://polywise.finance/',
  //     },
  //     {
  //       label: 'Layer 2 - PolyLime',
  //       href: 'https://polylime.finance/',
  //     },
  //   ],
  // },
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://quickswap.exchange/#/swap?outputCurrency=0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E",
      },
      {
        label: "Liquidity",
        href:"https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E"
      },
     
    ],
  },
  {
    label: t('Farms'),
    icon: 'MountIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'FlowerIcon',
    href: '/pools',
  },
  {
    label: t('Auto Lime'),
    icon: 'IfoIcon',
    href: '/poolslime',
  },
  // {
  //   label: t('Dividends'),
  //   icon: 'BondsIcon',
  //   href: '/dividends',
  // },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickChart',
        href: 'https://quickchart.app/token/0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E',
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E-polygon',
      },
      {
        label: 'PolyChart',
        href: 'https://app.polychart.io/explorer/polygon/0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E',
      },
      {
        label: 'Poocoin',
        href: 'https://polygon.poocoin.app/tokens/0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'Dappradar',
        href: 'https://polylime.finance',
      },
      {
        label: 'FarmScan',
        href: 'https://polylime.finance',
      },
      
      {
        label: 'Ape O Clock',
        href: 'https://polylime.finance',
      },
     
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/polylime',
      },
      {
        label: t('Docs'),
        href: 'https://docs.polylime.finance',
      },
   
     
    ],
  },
  // {
  //   label:'Audited by Quillaudits',
  //   icon:'AuditIcon',
  //   href:'https://github.com/polylime/audits'
  // }

]

export default config
