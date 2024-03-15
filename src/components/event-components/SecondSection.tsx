


import Image from "next/image"
import Button from "../ui/Button"
import { BusinessOwenerImage, SocialMediaMangager } from "@/utils/images"

export default function SecondSection() {
    return (
        <section className="bg-[#E34135] min-h-screen flex md:items-center md:pt-0 pt-[40px] justify-center p-1">
            <div className="max-w-7xl  w-full flex lg:flex-row flex-col   gap-8">
                <div className="flex flex-col justify-center text-white space-y-6 lg:w-[55%] w-[100%] px-[20px]">
                    <h1 className="xl:text-[64px] lg:text-[50px] md:text-[40px] text-[36px] font-bold leading-tight">
                        5, 4, 3, 2, 1
                        <br />
                        That's how quickly
                        <br />
                        we turn around
                        <br />
                        your IG feed!
                    </h1>
                    <p className="lg:text-[24px] md:text-[20px] text-[17px] font-[100] lg:w-full w-[80%] ">
                        Take control of your content universe. You decide when, what, and how often to post. Whether you're a
                        business owner keeping up your company page or a social media manager buried under client feeds, we've got
                        you.
                    </p>
                    <Button classNames="w-[30%] bg-[#A3DE9B] text-black hover:bg-[#e2e8f0]" text="Check out bundles" />
                </div>
                <div className="space-y-4 pl-[60px] relative sm:h-[500px] h-[430px] lg:w-[45%] w-[100%]">
                    <Image src={BusinessOwenerImage} alt="" className=" absolute top-0 lg:w-[50%] sm:w-[30%] w-[40%] lg:left-0 left-[25%] " />
                    <Image src={SocialMediaMangager} alt="" className=" absolute lg:top-[40%] sm:top-[33%] top-[150px] lg:w-[50%] sm:w-[30%] w-[40%] lg:right-[60px] right-[20%]" />
                </div>
            </div>
        </section>
    )
}

