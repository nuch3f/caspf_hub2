"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const TopMv = () => {
  // Bg Video
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <section className="p-top_mv">
      <div className="p-top_mv--hero">
        <video
          ref={videoRef}
          src="/assets/video/top_mv.mp4"
          poster="/assets/img/top/top_mv_sp.jpg"
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
      <div className="p-top_mv--title"><Image src="https://caspf.info/assets/img/common/logo_caspf.svg" alt="logo_caspf" width={946} height="250" /></div>
    </section>
  );
};