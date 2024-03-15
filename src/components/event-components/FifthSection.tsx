

import Link from "next/link"
import Card from "../ui/Card"
import { CardOne, CardTwo } from "@/utils/images"

export default function FifthSection() {
    return (
        <div className="bg-red-500 p-8">
            <h1 className="lg:text-[50px] md:text-[40px] text-[33px] font-[800] text-white text-center mb-8 lg:w-[50%] mt-10 mx-auto">Get Started! Select your Content Bundle</h1>
            <div className="flex justify-center items-center md:flex-row flex-col gap-8">
                <Card heading="The Mini Bundle" description="Dip your toes in– Get an instant content top-up with 3 tailor-made posts." list={["3-day turnaround time", "1 round of revisions", "Add on option: Editable  Canva/ Figma files"]} img={CardOne} price={"120"} btnText="GRAB A MINI BUNDLE" />
                <Card heading="The Signature Bundle" description="Content is one less thing to worry about with our 12-post Signature Bundle" list={["5-day turnaround time", "2 rounds of revisions", "Add on option: Editable Canva/ Figma files"]} img={CardTwo} price={"400"} btnText="GRAB A Signature BUNDLE" />
            </div>

            <p className="text-white text-center my-14 md:text-[24px] sm:text-[20px] text-[18px] font-[100]">*For Indian brands and individuals, check out INR pricing 🔗<a href="" className=" underline">HERE</a></p>

        </div>
    )
}
