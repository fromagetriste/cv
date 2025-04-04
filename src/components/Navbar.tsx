import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav-container" id="NavIdForScroll">
      <div className="left-group">
        <img
          className="logo-dev"
          src={`${import.meta.env.BASE_URL}/icons/web-icon.svg`} // added /public
          alt="dev-icon"
        />
        <ul className="navigation-sections">
          <Link to="NavIdForScroll" smooth={true} duration={500} id="nav-home">
            Home
          </Link>
          <Link to="StackIdForScroll" smooth={true} duration={500} offset={-50}>
            Stack
          </Link>
          <Link to="AboutIdForScroll" smooth={true} duration={500} offset={-50}>
            About
          </Link>
          <Link
            to="ProjectsIdForScroll"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Projects
          </Link>
          <Link to="ContactIdForScroll" smooth={true} duration={500}>
            Contact
          </Link>
        </ul>
      </div>

      <div className="right-group">
        <div className="vertical-bar"></div>
        <LinkedInButton />
        <GitHubButton />
      </div>
    </nav>
  );
};

export default Navbar;
