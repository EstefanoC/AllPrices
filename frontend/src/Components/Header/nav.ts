type NavHeader = {
  id: number;
  label: string;
  url: `/${string}`;
};

const Nav: NavHeader[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "About Us",
    url: "/about",
  },
  {
    id: 3,
    label: "Contact Us",
    url: "/contact",
  },
];

export default Nav;
