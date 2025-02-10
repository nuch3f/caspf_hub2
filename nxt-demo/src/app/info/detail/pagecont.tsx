"use client";
import "@/assets/sass/style.scss";
import { Fragment } from "react";
import { Sidemenu } from "@/app/parts/common/sidemenu";
import { Header } from "@/app/parts/common/header";
import { Footer } from "@/app/parts/common/footer";
import { FooterSns } from "@/app/parts/common/footerSns";
import Breadcrumb from "@/app/parts/common/breadcrumb";
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from 'react';

type Post = {
  id: number
  title: {
    rendered: string
  }
  date_gmt: string
  content: {
    rendered: string
  }
  categories: number
}

type Props = {
  id: number
}

const apiUrl = process.env.NEXT_PUBLIC_WP_API_DOMAIN + "/news";


const Infodetail = ({ id }: Props) => {  
  //const params = useParams();
  const searchParams = useSearchParams();
  const paramId = searchParams.get('pid');
  const fetchPost = async (id: number): Promise<Post> => {
    const res = await fetch(apiUrl + "/" + paramId);
    const data = await res.json()
    return data
  }
  
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    fetchPost(id).then((data) => setPost(data))
  }, [id])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
    <Suspense>
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
            <Breadcrumb link="/info" title="INFORMATION" pos="2" isLast={false} />
            <Breadcrumb link="" title={post.title.rendered} pos="3" isLast={true} />
          </ul>
        </nav>
        <section className="p-info_container">
          <h2 className="l-main_cTitle">
            <Image src="/assets/img/top/title_top_info.svg" alt="information" width={304} height="23" />
          </h2>
          <ul className="p-info_list --detail">
            <li className="p-info_list--item">
              <figure className="c-card">
                <figcaption className="c-card_desc">
                  <p className="c-card_title">{post.title.rendered}</p>
                  <time className="c-card_date">{post.date_gmt.slice(0,10)}</time>
                  {/* <ul className="c-card_taglist">
                    <li className="c-card_taglist--item">#{cat_name}</li>
                  </ul> */}
                  <div className="c-card_text" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </figcaption>
              </figure>
            </li>
          </ul>
          <FooterSns />
        </section>
        <Footer />
      </section>
      <Sidemenu />
    </main>
    </Suspense>
    </Fragment>
  )
}
export default Infodetail

