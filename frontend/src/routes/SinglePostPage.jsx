import { Link, useParams } from "react-router-dom";
import Image from "../components/common/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/common/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import Loading from "../components/validation/Loading";
import ErrorLoading from "../components/validation/ErrorLoading";
import NoData from "../components/validation/NoData";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return <Loading />;
  if (error) return <ErrorLoading />;
  if (!data) return <NoData />;

  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image
              src={data.img}
              w="600"
              className="rounded-2xl hover:shadow-2xl hover:rounded-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <iframe
            title="output"
            srcDoc={data?.content}
            style={{ width: "60vw", height: "100%" }}
          />
        </div>

        {/* menu */}
        <div className="px-4 h-max sticky top-8 shadow-xl p-3 bg-white rounded-2xl">
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
          <h1 className="mt-4 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" onClick={() => {}}>
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
