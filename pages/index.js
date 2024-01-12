import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "../components/Main/Main";
import Header from "../components/Layout/Header";
import Dsc from "../components/Main/Dsc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Dsc />
    </div>
  );
}
