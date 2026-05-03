import React from "react";
import Container from "../ui/Container";
import Button from "../common/Button";
import Image from "../common/Image";
import buttonImg from "../../assets/images/button.png";
import bannerImg from "../../assets/images/banner.png"

const Banner = () => {
  return (
    <section className="bg-primary-bg pt-25">
      <Container>
        <div className="flex">
          <div className="w-131.5">
            <h1 className="font-lato text-primary-black text-[60px] leading-[71.5px] font-light">
              Empower Your Team{" "}
              <span className="font-bold">With CoreWave's</span>
            </h1>
            <p className="font-lato text-primary-gray mt-9.25 text-[20px] leading-7.5 font-normal">
              Boost Productivity and Wellness in Your Organization with
              CoreWave's Advanced Tools and Techniques
            </p>
            <div className="mt-12.75 flex items-center">
              <Button>Explore More</Button>
              <button className="border-primary-green font-lato text-primary-black ml-5 flex items-center rounded-[5px] border-2 px-6.25 py-3.5 text-[16px] font-semibold">
                <Image src={buttonImg} className="mr-3" />
                Watch Video
              </button>
            </div>
          </div>
          <div>
            <Image className="ml-35.25" src={bannerImg}/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
