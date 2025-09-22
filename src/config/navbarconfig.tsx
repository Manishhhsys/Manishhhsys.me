
export interface NavItem {
  label: string;
  href: string;
  clasName?:string
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
      label:'Manishhh',
      href:"hero",
      clasName:"font-nothing"
    },
    {
      label: 'Projects',
      href: 'projects',
    },
    {
      label: 'About Me',
      href: 'about-me',
    },
    {
      label: 'Contact Me',
      href: '/contact',
    },
  ] as NavItem[],
};