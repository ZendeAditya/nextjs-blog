import Image from "next/image";
import Hero from "./(components)/HeroSection/Hero";
import TrendingBlog from "./(components)/TrendingPage/TrendingBlog";
import Blog from "./(components)/BlogCards/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingBlog />
      <h2 className="font-semibold text-3xl text-center p-6 ">Trending Blog</h2>
      <div className="m-2 p-2 flex items-center justify-between gap-2 flex-wrap">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </>
  );
}
