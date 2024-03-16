import { InstaIcon, PicIcon } from "@/utils/images"
import Image from "next/image"

export default function BottomSection() {
    return (
        <div className="bg-black py-10">
            <div className="bg-[#B1ABF4] w-[80%] mx-auto text-black rounded-[22px] px-10 py-10">
                <div className=" mx-auto flex lg:flex-row flex-col justify-between ">
                    <div className="lg:w-[50%]">
                        <nav className="mb-8">
                            <ul className="flex xl:space-x-6 lg:space-x-2 space-x-4">
                                <li>
                                    <a className="hover:underline font-bold xl:text-[16px] md:text-[14px] text-[11px]" href="#">
                                        OUR SOLUTION
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline font-bold xl:text-[16px] md:text-[14px] text-[11px]" href="#">
                                        HOW IT WORKS
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline font-bold xl:text-[16px] md:text-[14px] text-[11px]" href="#">
                                        PRICING
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline font-bold xl:text-[16px] md:text-[14px] text-[11px]" href="#">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <h1 className="xl:text-[50px] lg:text-[40px] text-[30px] font-bold leading-tight mb-4 2xl:w-[50%] xl:w-[70%] lg:w-[80%] sm:w-[70%]">Came for the content, stayed for the <span className="text-white">glow up!</span></h1>
                        <p className="text-sm lg:flex hidden">© Content on Demand (by Brand Therapy). All rights reserved</p>
                    </div>
                    <div className="lg:w-[50%] flex flex-col justify-between lg:mt-0 mt-10">
                        <div className="mb-8">
                            <p className="text-md mb-2 font-[600]">Join the ABC fam (all 'bout content)</p>
                            <div className="flex">
                                <input className="px-4 py-2 rounded-l-md focus:outline-none" placeholder="name@email.com" type="email" />
                                <button className="bg-[#E34135] px-4 py-2 rounded-r-md text-white hover:bg-[#a31645]">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm mb-4 font-semibold">COME, STALK US:</p>
                            <div className="flex">
                                <a href=""><Image alt="Insta" src={InstaIcon} className="w-[60%]" /></a>
                                <a href=""><Image alt="Insta" src={PicIcon} className="w-[60%]" /></a>

                            </div>
                        </div>
                        <p className="text-sm lg:hidden flex mt-4">© Content on Demand (by Brand Therapy). All rights reserved</p>
                        <div className=" mt-8 flex  lg:gap-[40px] gap-[10px]  items-center justify-start">
                            <div>
                                <a className="sm:text-sm text-[13px] hover:underline" href="#">
                                    Terms of Use
                                </a>
                            </div>
                            <div className="flex space-x-4">
                                <a className="sm:text-sm text-[13px] hover:underline" href="#">
                                    Privacy Policy
                                </a>
                                <a className="sm:text-sm text-[13px] hover:underline" href="#">
                                    Return & Refund Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
