import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
import womenImg from "../../assets/images/women.png";

const Trial = () => {
  return (
    <section className="bg-primary-green mt-25 h-77.75">
      <Container>
        <div className="flex items-center gap-[75.74px]">
          <div>
            <h3 className="font-lato text-primary-white text-[45px] leading-13.5 font-semibold">
              Don’t worries, start your free trial today!
            </h3>
            <button className="bg-primary-black text-primary-white font-lato mt-9.5 rounded-[5px] px-6.25 py-[14.5px] text-[16px] font-semibold">
              Get Free Trial
            </button>
          </div>
          <div className="relative h-77.75 w-[349.36px]">
            <Image className="absolute -bottom-3.5" src={womenImg} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trial;
