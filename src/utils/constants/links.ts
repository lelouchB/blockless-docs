import { conceptsRoutes } from './concepts';
import { docsRoutes } from './documentstion';
import { referenceRoutes } from './reference';
import sitesIcon from 'assets/icons/docIndex/sites.svg';
import triggersIcon from 'assets/icons/docIndex/triggers.svg';
import dataIcon from 'assets/icons/docIndex/data.svg';
import zkIcon from 'assets/icons/docIndex/zk.svg';
import discordIcon from 'assets/icons/community/discord.svg';
import githubIcon from 'assets/icons/community/github.svg';
import telegramIcon from 'assets/icons/community/telegram.svg';

export const twitterLink = 'https://twitter.com/theblockless';

export const communityLinks = [
  {
    id: 'join',
    label: 'Join to our community',
    path: '/',
    icon: '',
    isExternal: false,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    path: twitterLink,
    icon: '',
    isExternal: true,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    path: 'https://t.me/blocklessofficial',
    icon: telegramIcon,
    isExternal: true,
  },
  {
    id: 'discord',
    label: 'Discord',
    path: 'https://discord.com/invite/9eeRHxSCTZ',
    icon: discordIcon,
    isExternal: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    path: 'https://github.com/txlabs',
    icon: githubIcon,
    isExternal: true,
  },
];

export const footerLinks = {
  resources: [
    {
      id: 'use-cases',
      label: 'Use Cases',
      path: 'https://blockless.network/use-cases',
      isExternal: true,
    },
    {
      id: 'customers',
      label: 'Customers',
      path: 'https://blockless.network/customers',
      isExternal: true,
    },
  ],
  community: communityLinks.slice(1),
  company: [
    {
      id: 'blog',
      label: 'Blog',
      path: 'https://blockless.network/blog',
      isExternal: true
    },
    {
      id: 'careers',
      label: 'Careers',
      path: 'https://txlabs.freshteam.com/jobs',
      isExternal: true,
    },
  ],
};

export const loginLink = 'https://console.bls.dev/';

//menus
export const navbarMenu = [
  {
    id: 'help',
    label: 'Help',
    path: '/',
    isExternal: false,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    path: docsRoutes.overview,
    isExternal: false,
  },
  {
    id: 'concepts',
    label: 'Concepts',
    path: conceptsRoutes.overview,
    isExternal: false,
  },
  {
    id: 'reference',
    label: 'Reference',
    path: referenceRoutes.overview,
    isExternal: false,
  },
];

export const documentationIndexList = [
  {
    id: 'sites',
    title: 'Sites',
    desc: 'Build your own decentralized website',
    icon: sitesIcon,
    link: '',
  },
  {
    id: 'triggers',
    title: 'Triggers',
    desc: 'Build your own decentralized website',
    icon: triggersIcon,
    link: '',
  },
  {
    id: 'data',
    title: 'Data',
    desc: 'Build your own decentralized website',
    icon: dataIcon,
    link: '',
  },
  {
    id: 'zk',
    title: 'ZK',
    desc: 'Build your own decentralized website',
    icon: zkIcon,
    link: '',
  },
]

export const documentationItems = [
  {
    id: 'faq',
    title: 'FAQ',
    link: docsRoutes.faqGeneral,
  },
  {
    id: 'functions',
    title: 'Functions',
    link: docsRoutes.functionGeneral,
  },
  {
    id: 'account',
    title: 'Account',
    link: docsRoutes.accountOverview,
  },
  {
    id: 'cli',
    title: 'CLI',
    link: docsRoutes.cliOverview,
  },
  {
    id: 'concepts',
    title: 'Concepts',
    link: conceptsRoutes.overview,
  },
  {
    id: 'reference',
    title: 'Reference',
    link: referenceRoutes.overview,
  },
];
