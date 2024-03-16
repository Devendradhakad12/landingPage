


import Image from "next/image"
import Button from "../ui/Button"
import { BusinessOwenerImage, SocialMediaMangager } from "@/utils/images"

export default function SecondSection() {
    return (
        <section className="bg-[#E34135] min-h-screen flex md:items-center md:pt-0 pt-[40px] justify-center p-1">
            <div className="max-w-7xl  w-full flex lg:flex-row flex-col   gap-8">
                <div className="flex flex-col justify-center text-white space-y-6 lg:w-[55%] w-[100%] px-[20px]">
                    <h1 className="xl:text-[64px] lg:text-[50px] md:text-[40px] text-[36px] font-bold leading-tight">
                        Who are the minds
                        <br />
                        behind Cosmic Kids Club?
                    </h1>
                    <p className="lg:text-[24px] md:text-[20px] text-[17px] font-[100] lg:w-full w-[80%] ">
                        At Cosmic Kids Club, our mission is to ignite curiosity
                        and foster scientific literacy among children.
                        Our dedicated team comprises passionate astronomers
                        and space enthusiasts who are committed to making learning
                        an engaging and inspiring adventure for young minds.

                    </p>

                    <div>CTA- Yearly Membership -  <button className="bg-[#A3DE9B] hover:scale-105 transition-all duration-300  px-5 xl:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] py-2 text-black rounded-full"><span className=" line-through">₹2499/-</span> ₹999/-</button></div>
                </div>
                <div className="space-y-4 pl-[60px] relative sm:h-[500px] h-[430px] lg:w-[45%] w-[100%]">
                    <Image src={BusinessOwenerImage} alt="" className=" absolute top-0 lg:w-[50%] sm:w-[30%] w-[40%] lg:left-0 left-[25%] " />
                    <Image src={SocialMediaMangager} alt="" className=" absolute lg:top-[40%] sm:top-[33%] top-[150px] lg:w-[50%] sm:w-[30%] w-[40%] lg:right-[60px] right-[20%]" />
                </div>
            </div>
        </section>
    )
}

