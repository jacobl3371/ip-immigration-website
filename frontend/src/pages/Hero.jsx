import Navbar from "../components/NavBar";
import DropDown from "../components/DropDown";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 bg-[url('/Hero.webp')] bg-cover h-full bg-center bg-no-repeat z-0"></div>

      <div className="relative z-20 h-full flex flex-col">
        <Navbar />
        <div className="h-full w-full flex justify-center flex-col mx-16">
          <h1 className="text-white text-4xl max-w-[400px]">
            {" "}
            {t("quote")} - Barack Obama
          </h1>

          <h2 className="text-white mb-4">{t("picklang")}</h2>
          <DropDown />
        </div>
      </div>
    </div>
  );
}
