import Hero from "../components/Hero";
import News from "../components/News";


const Home = () => {
  const url = "news/today";
  return (
    <div className="relative top-[90px] bg-primary">
      <Hero />
      <News urlSting={url} />
    </div>
  );
};

export default Home;
