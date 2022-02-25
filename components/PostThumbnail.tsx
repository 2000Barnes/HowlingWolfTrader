import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import dayjs from 'dayjs'
// import useHover from './blog/hooks/useHover'
import { FiArrowRight } from 'react-icons/fi'

interface PostThumbnailProps {
  href: string
  title: string
  description: string
  date: string
  image: any
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ href, title, description, date, image }) => {
  return (
    <Link href={`blog/posts/${href}`}>
      <a className="w-1/2 mb-8 p-8 group">
        <div className="relative">
          <img src={image} className="block w-full h-60 object-cover object-center transition-transform rounded" />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity rounded"></div>
        </div>

        <div className="my-4 text-xs uppercase text-gray-500">{date}</div>

        <h3 className="mb-3 text-2xl font-extrabold text-gray-900 group-hover:text-cyan-500 transition-colors">
          {title}
        </h3>

        <p className="text-gray-700 mb-4">{description}</p>
      </a>
    </Link>
  )
}

export default PostThumbnail
