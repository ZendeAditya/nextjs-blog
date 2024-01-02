import Image from "next/image";
import Hero from "./(components)/HeroSection/Hero";
import TrendingBlog from "./(components)/TrendingPage/TrendingBlog";

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingBlog />
    </>
  );
}
