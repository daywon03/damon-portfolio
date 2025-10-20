import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-1.5 pl-2 pr-3 text-white/80 hover:text-white text-sm md:text-base rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
