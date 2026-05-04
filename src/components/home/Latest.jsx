import React from "react";
import Container from "../ui/Container";
import { latitems } from "../../api/latest";
import { useState } from "react";
import Image from "../common/Image";
import imgOne from "../../assets/images/lat1.png";
import imgTwo from "../../assets/images/lat2.png";
import imgThree from "../../assets/images/lat3.png";
import Button from "../common/Button";

const Latest = () => {
  const [active, setActive] = useState(3);
  return (
    <section className="mt-22.75">
      <Container>
        <div className="flex flex-col items-center">
          <div>
            <h1 className="font-lato text-primary-black text-center text-[45px] leading-13.5 font-semibold">
              Our Latest Project
            </h1>
          </div>
          <ul className="after:bg-stok font-lato text-2nd-gray relative mt-8.25 flex justify-center gap-18.25 text-[16px] font-medium after:absolute after:-bottom-5.25 after:left-1/2 after:h-1 after:w-223 after:-translate-x-1/2 after:content-['']">
            {latitems?.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`cursor-pointer transition-colors ${
                  active === item.id
                    ? "after:bg-primary-green relative z-50 text-green-500 after:absolute after:-bottom-5.25 after:left-1/2 after:h-1 after:w-38.5 after:-translate-x-1/2 after:content-['']"
                    : "text-2nd-gray"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="mt-13.25 flex">
            <div className="flex flex-col items-center">
              <Image src={imgOne} />
              <div className="w-86 text-center">
                <h2 className="font-lato text-primary-black text-[22px] leading-7.5 font-semibold">
                  Portfolio Landing Page
                </h2>
                <p className="font-lato text-2nd-gray mt-1.75 text-[16px] leading-5.5 font-normal">
                  Web development is the art of creating engaging and visually
                  appealing websites{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image src={imgTwo} />
              <div className="w-86 text-center">
                <h2 className="font-lato text-primary-black text-[22px] leading-7.5 font-semibold">
                  Plant Landing Page
                </h2>
                <p className="font-lato text-2nd-gray mt-1.75 text-[16px] leading-5.5 font-normal">
                  Web development is the art of creating engaging and visually
                  appealing websites{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image src={imgThree} />
              <div className="w-86 text-center">
                <h2 className="font-lato text-primary-black text-[22px] leading-7.5 font-semibold">
                  Real Estate Landing Page
                </h2>
                <p className="font-lato text-2nd-gray mt-1.75 text-[16px] leading-5.5 font-normal">
                  Web development is the art of creating engaging and visually
                  appealing websites
                </p>
              </div>
            </div>
          </div>
          <Button className="mt-8">View All Projects</Button>
        </div>
      </Container>
    </section>
  );
};

export default Latest;
