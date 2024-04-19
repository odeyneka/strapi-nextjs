import { fetchData } from "@/api/fetchData";
import { getImage } from "@/api/getImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = async ({ params }: any) => {
  const blog = await fetchData(`blogs/${params.id}?populate=*`);
  const imageUrl = getImage(blog);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link className="font-bold" href="/">{"< Back"}</Link>
      <div className="relative w-full h-72 overflow-hidden rounded-lg mt-5">
        <Image priority layout="fill" className="object-cover" src={imageUrl} alt={""} />
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-semibold">{blog.attributes.Title}
          <span className="text-sm text-gray-400 align-middle ml-3 font-normal">
            {new Date(blog.attributes.createdAt).toLocaleDateString()}
          </span>
        </h1>
        <p className="text-gray-600 mt-2">{blog.attributes.Description}</p>
        <div className="mt-4 flex items-center text-gray-400">
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
