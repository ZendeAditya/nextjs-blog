import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <>
      <section className="">
        <div className="w-72 h-96 rounded-md shadow-lg border-2 m-3 ">
          <Image
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfDB8MHx8fDA%3D"
            className="w-72 h-52 object-cover rounded-md"
            alt="blogImage"
            width="50"
            height="50"
          />
          <p className="line-clamp-4 p-2 m-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            libero perferendis natus sequi illo, id porro rem nostrum assumenda
            fugit inventore quasi
          </p>
          <Link href="#" className="ps-2">
            <button className="py-2 px-8 rounded-md bg-green-200">
              Read more
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
