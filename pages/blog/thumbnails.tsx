import dayjs from 'dayjs'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { fetchPages, types } from 'react-bricks/frontend'
import ErrorNoKeys from '../../components/errorNoKeys'
import Layout from '../../components/layout'
import PostThumbnail from '../../components/PostThumbnail'
import config from '../../react-bricks/config'

interface BlogListThumbnailsProps {
  error: string
  posts: types.Page[]
}

const BlogListThumbnails: React.FC<BlogListThumbnailsProps> = ({ posts, error }) => {
  return (
    <Layout>
      <Head>
        <title>Post List Thumbnails</title>
        <meta name="description" content="React Bricks blog starter" />
      </Head>

      <div className="container max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4">
          Blog
        </h1>
        <div className="py-10 flex flex-wrap">
          {posts?.map((post) => (
            <PostThumbnail
              key={post.id}
              href={post.slug}
              title={post.name}
              description={post.meta.description}
              date={dayjs(post.publishedAt).format('DD/MM/YYYY')}
              image={
                post.meta.featuredImage ||
                'https://images.reactbricks.com/original/8b1974a0-91a8-4ab4-b014-83f60192f9b5.svg'
              }
            />
          ))}
        </div>
      </div>

      {error === 'NOKEYS' && <ErrorNoKeys />}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } }
  }
  try {
    const posts = await fetchPages(process.env.API_KEY, {
      type: 'blog',
      pageSize: 1000,
      sort: '-publishedAt',
    })
    return { props: { posts } }
  } catch {
    return { props: {} }
  }
}

export default BlogListThumbnails
