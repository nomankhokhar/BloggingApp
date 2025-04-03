import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/common/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Create a New Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        {/* Cover Image + Title */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-md mb-2">Click here to upload Image</h2>
            <Upload type="image" setProgress={setProgress} setData={setCover}>
              <button className="w-full p-2 shadow-md rounded-md text-sm text-gray-500 bg-white">
                Add a cover image
              </button>
            </Upload>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-md mb-2">Add title</p>
            <input
              className="outline-none p-2 w-full border rounded-md shadow-md h-10"
              type="text"
              placeholder="Add title"
              name="title"
            />
          </div>
        </div>

        {/* Category & Description */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-md mb-2">Categories</h2>

            <select
              name="category"
              id="category"
              className="p-2 w-full rounded-md bg-white shadow-md"
            >
              <option value="general">General</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="databases">Databases</option>
              <option value="seo">Search Engines</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-md mb-2">Description</h2>
            <textarea
              className="p-4 w-full rounded-md bg-white shadow-md"
              name="desc"
              placeholder="A Short Description"
            />
          </div>
        </div>

        {/* Editor Section */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <button className="p-2 text-3xl">🌆</button>
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              <button className="p-2 text-3xl">▶️</button>
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="w-full rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <button
            disabled={mutation.isPending || (0 < progress && progress < 100)}
            className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Loading..." : "Send"}
          </button>
        </div>
        {"Progress: " + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
