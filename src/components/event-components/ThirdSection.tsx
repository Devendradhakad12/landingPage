import Image from "next/image";
import Button from "../ui/Button";
import { NotePage } from "@/utils/images";
import CardTwo from "./CardTwo";



export default function ThirdSection() {
    return (
        <section className="flex  justify-center min-h-screen bg-[#B1ABF4] p-4">
            <div className="flex md:flex-row flex-col pt-[30px] items-center gap-8">
                <h1 className="lg:text-[63px] md:text-[50px] sm:text-[40px] text-[30px] font-[800] mb-4 xl:w-[75%] lg:leading-[72px] sm:leading-[50px] leading-[40px] sm:hidden flex w-[50%]">I'm intrigued. How does this work?</h1>
                <div className="h-[100%] md:w-[50%] w-[100%] flex justify-center">
                        <CardTwo />
                </div>
                <div className="flex flex-col sm:items-start items-center justify-center w-[50%]">
                    <h1 className="lg:text-[63px] md:text-[50px] sm:text-[40px] text-[30px] font-[800] mb-4 xl:w-[75%] lg:leading-[72px] sm:leading-[50px] leading-[40px] sm:flex hidden">I'm intrigued. How does this work?</h1>
                    <Button classNames="px-4 py-3 bg-[#E34135] text-white" text="Check out bundles" />
                </div>
            </div>
        </section>
    )
} 