import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const ChipComponent = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      duration: 2,
      scale: 2,
      ease: "power1.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={100} height={100} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip. <br />A monstor win for gaming.
          </h2>
          <p className="hiw-subtitle">
            {" "}
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* //container for the video Player and embedded the video in it. */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* title of the mobile model */}
          <p className="text-gray font-semibold text-center mt-6 mb-12">
            Honkai: Star Rail
          </p>
          <div className="hiw-text-container g_fadeIn">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text fadeIn">
                A17 Pro is an entirely new class of iphone chip that delivers
                our{" "}
                <span className="text-white ">
                  best Graphic performance by far
                </span>
              </p>

            <p className="hiw-text g_text">
              Mobile{" "}
              <span className="text-white ">
                Games will look and feel so immersive{" "}
              </span>
              with incredibly detailed environments and characters.
            </p>
            </div>

            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-Class</p>
              <p className="hiw-text"> with Pro Cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChipComponent;
