import { Link } from "wouter";

interface INavLinks {
  title: string;
  href: string;
}

const navs: INavLinks[] = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Pages", href: "/pages" },
  { title: "Blog", href: "/blogs" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact", href: "/contact" },
];

const BottomHeader = () => {
  return (
    <header className="mt-4 max-w-full bg-gray-800 py-4 md:mt-6">
      <nav className="container flex gap-8 text-xs font-normal leading-5 text-gray-400 md:text-sm md:font-medium">
        {navs.map((nav) => {
          return (
            <ul>
              <li>
                <Link to={nav.href}>{nav.title}</Link>
              </li>
            </ul>
          );
        })}
      </nav>
    </header>
  );
};

export default BottomHeader;
