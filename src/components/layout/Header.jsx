import React from "react";
import Image from "../common/Image";
import Container from "../ui/Container";
import { navitems } from "../../api/navbardata";
import { Link} from "react-router";
import Button from "../common/Button";

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <div className="flex items-center mt-6.5 absolute">
            <Image src="images/logo.png" alt="logo" />
            <ul className="ml-104 flex gap-11.25">
              {navitems?.map((item) => (
                  <li
                  className="font-lato text-primary-black hover:text-primary-green cursor-pointer text-[16px] font-medium duration-300"
                  key={item.id}
                >
                  <Link to={item.url}>{
                    item.name.charAt(0).toUpperCase() + item.name.slice(1)
                  }</Link>
                </li>
              ))}
            </ul>
            <Link className="ml-35.5" to="#"><Button >Register</Button></Link>
          </div>
        </Container>
      </nav>
      <Container />
    </header>
  );
};

export default Header;
