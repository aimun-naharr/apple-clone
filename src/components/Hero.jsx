import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    const vidSrc = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
    setVideoSrc(vidSrc);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    const ctaItems = gsap.utils.toArray(".cta-item");
    gsap.to(ctaItems, {
      y: 0,
      opacity: 1,
      stagger: 0.6,
      ease: "expo",
      duration: 1.5,
      delay: 2.5,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black mt-20">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Iphone 15 pro
        </p>
        {/* video */}
        <div className="md:w-10/12 w-9/12 ">
          <video
            src={videoSrc}
            autoPlay
            playsInline={true}
            muted
            key={videoSrc}
            className="pointer-events-none"
          >
            <source type="video/mp4" />
          </video>
        </div>

        {/* call to action */}
        <div id="cta" className="flex flex-col gap-4 items-center   mt-20">
          <a
            href="#highligts"
            className="bg-blue px-6 py-2 rounded-full font-semibold cta-item translate-y-10 opacity-0"
          >
            Buy
          </a>
          <p className="font-normal text-2xl cta-item translate-y-10 opacity-0">
            From $999 or $41.62/mo. for 24 mo.1
          </p>
        </div>
      </div>
    </section>
  );
}
