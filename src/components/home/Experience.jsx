import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
import experienceimg from "../../assets/images/experience.png"

const Experience = () => {
  return (
    <section className="mt-25">
      <Container>
        <div className="flex items-center">
          <div className="w-137.5">
            <h2 className="font-lato text-primary-black text-[45px] leading-13.5 font-semibold">
              Experience the power of Corewave
            </h2>
            <p className="font-lato text-2nd-gray mt-7.25 text-[16px] leading-6.5 font-normal">
              Are you ready to take your business to the next level? Look no
              further than Corewave. Our innovative technology and expert team
              can help you unlock your business's full potential. By harnessing
              the power of Corewave, you can streamline your operations, improve
              efficiency
            </p>
            <button className="text-primary-green bg-2nd-green font-lato mt-11.25 rounded-[5px] px-6.25 py-[14.5px] text-[16px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="ml-36.25">
            <Image className="rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px]" src={experienceimg}/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
