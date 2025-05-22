import type { SiteConfig, MenuLinks, SocialLinks } from '@/types'

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Ethan2k04',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'Ethan\'s Site',
  // Meta property used to generate your sitemap and canonical URLs in your final build
  site: 'https://ethan-site-five.vercel.app/',
  // Meta property used as the default description meta property
  description: 'Always exploring',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'zh-CN, en-US',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_US',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-US',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  // Customize
  pageSize: 8,
  // registration: {
  //   url: 'https://icp.gov.moe/?keyword=APTX4869',
  //   text: '萌ICP备APTX4869号'
  // },
  walineServerUrl: 'https://www.ethan2k04.icu/',
  applyFriendTip: {
    name: 'Ethan\'s Site',
    slogan: '吾将上下而求索',
    url: 'https://www.ethan2k04.icu/',
    avatar: 'https://www.ethan2k04.icu/_image?href=%2F_astro%2Favatar.DEuqP5JF.png&f=webp'
  }
}

// will be used in Footer.astro
export const socialLinks: SocialLinks = [
  // {
  //   name: 'mail',
  //   url: 'mailto:test@example.com'
  // },
  {
    name: 'github',
    url: 'hhttps://github.com/Ethan2k04/Ethan2k04'
  }
]

export const menuLinks: MenuLinks = [
  {
    link: '/blog',
    label: 'Blog'
  },
  {
    link: '/projects',
    label: 'Projects'
  },
  {
    link: '/links',
    label: 'Links'
  },
  {
    link: '/about',
    label: 'About'
  }
]
