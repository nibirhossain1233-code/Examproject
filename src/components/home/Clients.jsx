import React from "react";
import Container from "../ui/Container";
import { useState, useEffect } from "react";
import imgOne from "../../assets/images/clients1.png";
import imgTwo from "../../assets/images/clients2.png";
import imgThree from "../../assets/images/clients3.png";
import star from "../../assets/images/star.png";
import Image from "../common/Image";

const clientsData = [
  {
    name: "Farhan Rio",
    role: "Happy Seller",
    title: "Excellent Team!",
    url: imgOne,
  },
  {
    name: "Alizabeth Nancy",
    role: "Happy Seller",
    title: "Greate Service",
    url: imgTwo,
  },
  {
    name: "Jenny Wilson",
    role: "Happy Seller",
    title: "The Best Agency!",
    url: imgThree,
  },
  {
    name: "Farhan Rio",
    role: "Happy Seller",
    title: "Excellent Team!",
    url: imgOne,
  },
  {
    name: "Alizabeth Nancy",
    role: "Happy Seller",
    title: "Greate Service",
    url: imgTwo,
  },
  {
    name: "Jenny Wilson",
    role: "Happy Seller",
    title: "The Best Agency!",
    url: imgThree,
  },
  {
    name: "Farhan Rio",
    role: "Happy Seller",
    title: "Excellent Team!",
    url: imgOne,
  },
  {
    name: "Alizabeth Nancy",
    role: "Happy Seller",
    title: "Greate Service",
    url: imgTwo,
  },
  {
    name: "Jenny Wilson",
    role: "Happy Seller",
    title: "The Best Agency!",
    url: imgThree,
  },
];

const Clients = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(clientsData.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="mt-23.5">
      <Container>
        <div className="text-center">
          <h2 className="font-lato text-primary-black mt- text-[45px] font-semibold">
            What Our Clients Saying
          </h2>

          <div className="mt-12 overflow-hidden">
            <div
              className="flex items-center transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const start = slideIndex * itemsPerSlide;
                const slideItems = clientsData.slice(
                  start,
                  start + itemsPerSlide,
                );

                return (
                  <div
                    key={slideIndex}
                    className="flex w-full shrink-0 justify-center gap-4"
                  >
                    {slideItems.map((item, index) => (
                     
                      
                      
                      <div
                        key={index}
                        className="bg-primary-white h-118.25 w-106 rounded-[15px] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] group cursor-pointer flex justify-center items-center flex-col border-2 border-border"
                      >
                        <div className="relative w-fit">
                          <Image className="" src={item.url} />

                          <svg
                            width="43"
                            height="43"
                            viewBox="0 0 43 43"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-primary-white absolute top-6 -left-3.25"
                          >
                            <circle
                              cx="21.5"
                              cy="21.5"
                              r="21.5"
                              className={index % 2 === 0?"fill-svg":"fill-primary-green" }
                              
                            />
                            <g clip-path="url(#clip0_38_232)">
                              <path
                                d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z"
                                
                              />
                              <path
                                d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z"
                                
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_38_232">
                                <rect
                                  width="21.9216"
                                  height="18.0531"
                                  
                                  transform="translate(10.1176 12.647)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>

                        <h3 className="font-lato font-semibold text-[24px] leading-7.5 text-primary-black mt-3.75">{item.title}</h3>
                        <div className="flex items-center gap-1.25 mt-1">
                            <Image src={star}/>
                            <Image src={star}/>
                            <Image src={star}/>
                            <Image src={star}/>
                            <Image src={star}/>
                        </div>

                        <p className="mt-5 font-lato font-normal text-[16px] leading-6 text-2nd-gray w-77.5">
                          The customer service team at this company was very responsive and helpful when I had questions about their products.
                        </p>

                        <h4 className="mt-3.75 font-lato font-semibold text-[18px] text-primary-black">{item.name}</h4>
                        <p className="font-lato font-normal text-[14px] leading-6 text-2nd-gray">{item.role}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="m-11.5 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-6 rounded-full ${
                  current === index ? "bg-green-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
