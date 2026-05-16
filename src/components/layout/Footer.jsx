import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
import { Link } from "react-router";
import fb from "../../assets/images/fb.png";
import ini from "../../assets/images/in.png";
import tw from "../../assets/images/tw.png";
import be from "../../assets/images/be.png";
import Button from "../common/Button";

const Footer = () => {
  const services = [
    "Web Design",
    "Web Development",
    "SEO Marketing",
    "UI/UX Analysis",
    "Digital Marketing",
  ];
  const help = [
    "Account",
    "Support Center",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  return (
    <section className="mt-25 pb-3.5">
      <Container>
        <div>
          <div className="flex gap-48.75">
          <div>
            <Image src="images/logo.png" />
            <ul className="font-lato text-2nd-gray mt-6.5 text-[14px] leading-5.5 font-normal">
              <li>
                <a href="mailto:mukimsdesign@gmail.com">
                  mukimsdesign@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801767630044">+88 01767630044</a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-[7.41px]">
              <Link to="">
                <Image src={fb} />
              </Link>
              <Link to="">
                <Image src={ini} />
              </Link>
              <Link to="">
                <Image src={tw} />
              </Link>
              <Link to="">
                <Image src={be} />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-lato text-primary-black text-[20px] leading-7.5 font-semibold">
              Services
            </h2>
            <ul className="mt-6.25 flex flex-col gap-1">
              {services?.map((item, index) => (
                <Link to=""><li
                  className="font-lato text-2nd-gray text-[14px] leading-5.5 font-normal"
                  key={index}
                >
                  {item}
                </li></Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-lato text-primary-black text-[20px] leading-7.5 font-semibold">
              Help
            </h2>
            <ul className="mt-6.25 flex flex-col gap-1">
              {help?.map((item, index) => (
                <Link to=""><li
                  className="font-lato text-2nd-gray text-[14px] leading-5.5 font-normal"
                  key={index}
                >
                  {item}
                </li></Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-lato text-primary-black text-[20px] leading-7.5 font-semibold">
              Contact Us
            </h2>
            <input
              className="font-lato text-input-text border-input-stroke mt-7.5 w-84.25 rounded-[5px] border-2 py-3.25 pl-3.75 text-[14px] leading-5.5 font-normal outline-none focus:border-primary-gray"
              type="text"
              placeholder="Enter your mail"
            />
            <div className="mt-3.5">
              <Button>Request & Callback</Button>
            </div>
          </div>
        </div>
        <i className="inline-block w-330 h-0.5 bg-footer-stroke mt-10.5"></i>
        <p className="mt- font-lato font-medium text-[14px] leading-5.5 text-2nd-gray text-center">@2023 CoreWave. All copyrights reserved</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
