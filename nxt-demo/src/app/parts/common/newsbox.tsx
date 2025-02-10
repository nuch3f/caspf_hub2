"use client";
import Link from "next/link";
import { useEffect, useState } from 'react'

type Post = {
  id: number
  title: {
    rendered: string
  }
  date_gmt: string
  //link: string
  slug: string
}

const apiUrl = process.env.NEXT_PUBLIC_WP_API_DOMAIN + "/latestnews";
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

const NewsBox = () => {
  const posts = usePosts()

  return (
    <ul className="c-newsList">
        {posts.map((post: Post) => (
        <li className="c-newsList_item" key={post.id}>
          <Link href={`/info/detail?pid=${post.slug}`} className="c-newsList_item--link">
            <div className="c-newsList_item--container">
              <p className="c-newsList_item--info">
                <time className="c-newsList_item--date">{post.date_gmt.slice(0,10)}</time>
              </p>
              <p className="c-newsList_item--title">{post.title.rendered}</p>
            </div>
          </Link>
        </li>
        ))}
    </ul>
  )
}

export default NewsBox