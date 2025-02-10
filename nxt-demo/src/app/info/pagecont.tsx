"use client";
import "@/assets/sass/style.scss";
import { Fragment } from "react";
import { Sidemenu } from "@/app/parts/common/sidemenu";
import { Header } from "@/app/parts/common/header";
import { Footer } from "@/app/parts/common/footer";
import { FooterSns } from "@/app/parts/common/footerSns";
import Breadcrumb from "@/app/parts/common/breadcrumb";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from "next/image";

type Post = {
  id: number
  title: {
    rendered: string
  }
  date_gmt: string
  link: string
  categories: number
}


const apiUrl = process.env.NEXT_PUBLIC_WP_API_DOMAIN + "/news";
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



const Infolist = () => {
  const posts = usePosts()

  return (
    <Fragment>
    <Header />
    <main className="l-main">
      <section className="l-main_container">
        <section className="l-main_mv --soundroom">
          <div className="l-main_mv--title">
            <Image src="/assets/img/common/txt_info.svg" alt="information" width="503" height={39} />
          </div>
        </section>
        <nav className="c-breadcrumb">
          <ul className="c-breadcrumb_list" itemScope itemType="https://schema.org/BreadcrumbList">
            <Breadcrumb link="/" title="caspf_demo" pos="1" isLast={false} />
            <Breadcrumb link="" title="INFORMATION" pos="2" isLast={true} />
          </ul>
        </nav>
        <section className="p-info_container">
          <h2 className="l-main_cTitle">
            <Image src="/assets/img/top/title_top_info.svg" alt="information" width={304} height="23" />
          </h2>
          <ul className="p-info_list">
            {posts.map((post) => (
              <li className="p-info_list--item" key={post.id}>
                <Link href={`/info/detail?pid=${post.id}`}>
                  <div className="c-infolist">
                    <p className="c-infolist_title">{post.title.rendered}</p>
                    <time className="c-infolist_date">{post.date_gmt.slice(0,10)}</time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <FooterSns />
        </section>
        <Footer />
      </section>
      <Sidemenu />
    </main>
    </Fragment>
  )
}

export default Infolist

