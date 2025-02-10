"use client";
import React, { useEffect, useRef } from 'react';
import { usePathname } from "next/navigation";
import Script from "next/script";

export const Tweet: React.FC<{ id: string }> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);

  const pathname = usePathname(); 
  // useEffect(() => {
  //   // @ts-expect-error
  //   window.twttr?.widgets.load(ref.current);
  // }, [id]);
  useEffect(() => {
    if (typeof window.twttr === "object") {
      window.twttr.widgets.load(); 
    } 
  }, [pathname]); 

  return (
    <>
    <div
      dangerouslySetInnerHTML={{ __html: generateEmbedHtml(id) }}
      ref={ref}
    />
    <Script
      src="https://platform.twitter.com/widgets.js"
      strategy="lazyOnload"
    />
    </>
  );
};

const generateEmbedHtml = (id: string): string => {
  if (!/^\d+$/.test(id)) {
    throw new Error(`Invalid tweet ID: ${id}`);
  }

  return `<blockquote class="twitter-tweet lazy-tweet" data-media-max-width="580"><a href="https://twitter.com/FortonSphere/status/${id}"></a></blockquote>`;
};

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void; 
      }; 
    }; 
  } 
} 