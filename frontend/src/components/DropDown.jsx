import i18next from "i18next";
import { languages } from "../locales/lang";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { useTranslation } from "react-i18next";

export default function DropDown() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const changeLang = (lang) => {
    i18next.changeLanguage(lang);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <CustomButton
        className="w-fit text-black"
        onClick={toggleMenu}
        text={t("langbutton")}
      />
      <div className="absolute top-5 left-32 inline-block text-center align-content: normal">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          }  mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}
        >
          <ul className="py-1">
            {languages.map((lang, index) => (
              <li
                key={index}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeLang(lang.code)}
              >
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
