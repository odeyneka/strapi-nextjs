"use client";
import { fetchData } from "@/api/fetchData";
import { submitData } from "@/api/submitData";
import { uploadData } from "@/api/uploadData";
import BlogCard from "@/components/BlogCard";
import BlogForm from "@/components/BlogForm";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await fetchData('blogs?populate=*');
      setBlogs(blogs);
    }

    getBlogs();
  }, [showForm]);

  const saveBlog = async (title: string, desc: string, img?: File) => {
    const data = {
      Title: title,
      Description: desc,
      Image: null
    };

    if (img) {
      const formData = new FormData();
      formData.set('files', img);
      const image = await uploadData(formData);
      data.Image = image[0].id;
    }

    const newBlog = await submitData('blogs', data);

    if (newBlog.data.id) {
      setShowForm(false);
    }
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 l gap-5">
        {blogs?.map((blog: any) => (
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
        {showForm && (
          <BlogForm saveBlog={saveBlog} />
        )}
      </div>

      <button onClick={() => setShowForm(true)} className="hidden mt-5 px-5 py-2 text-white text-sm bg-indigo-500 font-semibold mx-auto rounded-md">
        Add New
      </button>
    </div>
  );
};

export default Blogs;
