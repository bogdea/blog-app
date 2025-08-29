import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-10 text-center font-medium">
      <Link to={"/"}>blog</Link> &copy; all rights reserved
    </footer>
  );
};

export default Footer;
