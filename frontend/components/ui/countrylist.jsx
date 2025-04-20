"use client"
import countryCodeToLang from "@/utils/countryCodeToLang";
import {lang} from "@/constants/constants";


export default function DropDown({isOpen, data}) {



    return(
        <div className="absolute top-5 left-32 inline-block text-center align-content: normal">

            <div
                className={`${
                    isOpen ? 'block' : 'hidden'
                }  mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}>
                <ul className="py-1">

                    {data.length > 0 && data.map((lang, index) => (
                        <li key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{lang}</li>
                    ))}

                </ul>
            </div>
        </div>

    )
}