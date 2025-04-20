"use client"
import NavBar from "@/components/ui/NavBar";
import {Button} from "@/components/ui/button";
import DropDown from "@/components/ui/countrylist";
import {useEffect, useState} from "react";


export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])

    function toggle() {
        setIsOpen(!isOpen)
    }
    async function lang(){
        const response = await fetch("/api/getAllLangs")
        const parsData = await response.json()
        setData(parsData.data)

    }
    useEffect(  () => {

        lang()


    })
    return (

        <div className="relative w-screen h-screen ">
            <div className="absolute inset-0 bg-black/50 z-10">

            </div>

            <div className="absolute inset-0 bg-[url('/Hero.webp')] bg-cover bg-center bg-no-repeat z-0">

            </div>



            <div className="relative z-20 h-full">

                <NavBar />
                <div className="h-full w-full flex justify-center flex-col mx-16">
                    <h1 className="text-white text-4xl max-w-[400px]"> "We are and always will be a nation of immigrants. We were strangers once, too." - Barack Obama
                    </h1>

                    <h2>Please pick a country</h2>


                    <Button className="w-fit" onClick={toggle}>
                        Countries
                    </Button>
                    <DropDown isOpen={isOpen} data={data}/>

                </div>



            </div>

        </div>
    )


}