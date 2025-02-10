"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active)
  }
  return (
    <header className={`l-header ${active ? "is-open" : ""}`}>
      <div className="l-header_flex">
        <div className="l-header_logo">
          <Link href="/">
            <Image src="https://caspf.info/assets/img/common/logo_caspf.svg" alt="caspf_logo" width={100} height={44} />
          </Link>
        </div>
        <div className="l-header_mbtn" onClick={classToggle}>
          <span className="l-header_mbtn--border"></span>
          <span className="l-header_mbtn--border"></span>
        </div>
      </div>
      <section className="l-header_menu">
        <ul className="l-gNav_list">
          <li className="l-gNav_list--item">
            <Link href="/soundroom" className="l-gNav_list--link">
              <Image src="/assets/img/common/menu_sound.svg" alt="soundroom" width={140} height={23} />
            </Link>
          </li>
          <li className="l-gNav_list--item">
            <Link href="/info" className="l-gNav_list--link">
              <Image src="/assets/img/common/menu_info.svg" alt="info" width={104} height={23} />
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
};