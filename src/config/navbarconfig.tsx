export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Projects',
      href: '/Projects',
    },
    {
      label: 'About-me',
      href: '/about-me',
    },
    {
      label: 'Contact Me',
      href: '/contact',
    },
  ] as NavItem[],
};