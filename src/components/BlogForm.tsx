import Image from "next/image";
import { ChangeEvent, useState } from "react";

type Props = {
  saveBlog: (title: string, desc: string, img?: File) => Promise<void>
}

const BlogForm = ({ saveBlog }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (files?.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(file);
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md p-4 overflow-hidden border bg-white border-gray-300 cursor-pointer">
      <div className="relative w-full h-1 pb-[100%]">
        {image && (
          <Image
            priority
            layout="fill"
            alt={""}
            src={image}
            className="rounded-lg object-cover"
          />
        )}
        {!image && (
          <label className="cursor-pointer flex items-center justify-center absolute inset-0 bg-gray-300 hover:bg-gray-400 transition-all rounded">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
            <input className="hidden" type="file" accept="image/*" onChange={handleFileChange} />
          </label>
        )}
      </div>
      <div className="pt-2">
        <label className="text-gray-500 font-medium">Title</label>
        <h2 contentEditable={true} className="text-md py-1 px-2 min-h-[32px] max-h-[60px] overflow-auto font-semibold mb-2 border border-gray-400 rounded-md outline-none"
          onInput={(e) => setTitle(e.currentTarget.innerHTML)}>
        </h2>
        <label className="text-gray-500 font-medium">Description</label>
        <p contentEditable={true} className="text-gray-600 border py-1 px-2 line-clamp-4 h-[60px] overflow-auto border-gray-400 rounded-md outline-none"
          onInput={(e) => setDescription(e.currentTarget.innerHTML)}></p>
      </div>

      <button onClick={() => saveBlog(title, description, file)} className="ml-auto mt-2 px-7 py-2 text-white text-sm bg-indigo-500 font-semibold rounded-md">
        Save
      </button>
    </div>
  );
};

export default BlogForm;
