"use client";
import "@/assets/sass/style.scss";
import { Fragment } from "react";
import { Sidemenu } from "@/app/parts/common/sidemenu";
import { Header } from "@/app/parts/common/header";
import { Footer } from "@/app/parts/common/footer";
import { FooterSns } from "@/app/parts/common/footerSns";
import Script from 'next/script';
import { Tweet } from "@/app/parts/soundroom/twitter";
import Breadcrumb from "@/app/parts/common/breadcrumb";
import { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";

type Post = {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date_gmt: string
  //link: string
  slug: string
}

const apiUrl = process.env.NEXT_PUBLIC_WP_API_DOMAIN + "/soundroom?per_page=100&page=1";

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(apiUrl)
  const data = await res.json()
  return data
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data))
  }, [])

  return posts
}


const Soundroom = () => {
  const posts = usePosts()

  return (
    <Fragment>
    <Header />
    <main className="l-main">
      <section className="l-main_container">
        <section className="l-main_mv --soundroom">
          <div className="l-main_mv--title">
            <Image src="/assets/img/common/txt_soundroom.svg" alt="soundroom" width="503" height={46} />
          </div>
        </section>
        <nav className="c-breadcrumb">
          <ul className="c-breadcrumb_list" itemScope itemType="https://schema.org/BreadcrumbList">
            <Breadcrumb link="/" title="caspf_demo" pos="1" isLast={false} />
            <Breadcrumb link="" title="SOUND ROOM" pos="2" isLast={true} />
          </ul>
        </nav>
        <section className="p-snd_container">
          <h2 className="l-main_cTitle">
            <Image src="/assets/img/common/title_soundroom.svg" alt="soundroom" width={259} height="23" />
          </h2>
          <ul className="p-snd_list">
            {posts.map((post: Post) => (
              <li className="p-snd_list--item" key={post.id}>
                <figure className="c-card">
                  <Tweet id={post.slug} />
                  <figcaption className="c-card_desc">
                    <p className="c-card_title">{post.title.rendered}</p>
                    <time className="c-card_date">{post.date_gmt.slice(0,10)}</time>
                    <div className="c-card_excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <FooterSns />
        </section>
        <Footer />
      </section>
      <Sidemenu />
      <Script
        src="/assets/js/defer.js"
        strategy="lazyOnload"
        // onLoad={() => {
        //   const tw_EmbedTW = document.getElementsByClassName('twitter-tweet');		// TWeet
        //   if (tw_EmbedTW.length !== 0) {
        //     Defer.js('https://platform.twitter.com/widgets.js', 'twitter-js', 700, null, true);
        //   }
        // }}
      />
    </main>
    </Fragment>
  )
}

export default Soundroom
