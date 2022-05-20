import type { NextPage } from "next";
import { MainCard } from "../components/MainCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <MainCard />
    </div>
  );
};

export default Home;
