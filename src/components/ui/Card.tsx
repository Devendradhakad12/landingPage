
import { CardOne } from "@/utils/images";
import Image, { StaticImageData } from "next/image";
import { PiSealCheckFill } from "react-icons/pi";


export default function Card({ heading, description, list, img, price, btnText }: { heading: string, description: string, list: string[], img: string | StaticImageData, price: String, btnText: string }) {
    return (
        <div className="w-[412px] bg-white border border-gray-200 rounded-[22px] shadow relative mt-14">
            <Image src={img} alt="CardImg" className="absolute top-[-50px] w-[25%] left-[50%] translate-x-[-50%]" />
            <div className="w-full max-w-sm p-4  text-black  sm:p-8 ">
                <h5 className="mb-4 text-[26px] mt-14 font-[700] text-center">{heading}</h5>
                <p className="w-[90%] text-center mt-2 mx-auto">{description}</p>
                <div className="flex  justify-center text-gray-900 items-center mt-6">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                    {
                        list.length && list.map((li, index) => (
                            <li className="flex items-center" key={index}>
                                <PiSealCheckFill className="text-blue-700" />
                                <span className="font-normal leading-tight text-black/90 ms-3">{li}</span>
                            </li>
                        ))
                    }
                    {/*    <li className="flex items-center">
                        <PiSealCheckFill />
                        <span className="text-base font-normal line-through decoration-gray-500 leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
                    </li> */}
                </ul>
                <button type="button" className="text-black bg-[#A3DE9B] hover:bg-[#A3DE9B]/80 focus:ring-4 focus:outline-none focus:ring-blue-200   font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">{btnText}</button>
            </div>
        </div>
    )
} 