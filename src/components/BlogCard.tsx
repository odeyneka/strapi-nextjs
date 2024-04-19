import { getImage } from "@/api/getImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  const imageUrl = getImage(blog);

  return (
    <div className="h-full rounded-lg shadow-md p-4 overflow-hidden border bg-white border-gray-300 cursor-pointer">
      <Link className="h-full flex flex-col" href={`/blog/${blog.id}`}>
        <div className="relative w-full h-1 pb-[100%]">
          <Image
            priority
            layout="fill"
            src={imageUrl}
            alt={""}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="p-2 my-auto">
          <h2 className="text-lg line-clamp-3 font-semibold mb-2 overflow-ellipsis" dangerouslySetInnerHTML={{__html: blog.attributes.Title}}></h2>
          <p className="text-gray-600 line-clamp-4" dangerouslySetInnerHTML={{__html: blog.attributes.Description}}></p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
