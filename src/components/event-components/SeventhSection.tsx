import { FaArrowDown } from "react-icons/fa";

export default function SeventhSection() {
    return (
        <section className="bg-black text-white p-8">
            <div className=" mx-auto flex md:flex-row flex-col">
                <h2 className="xl:text-[50px] md:text-[40px] text-[30px] leading-[54px] font-bold md:w-[40%] w-[90%] mx-auto  xl:px-[8%] lg:px-[5%]">Have more questions? We’ve got you!</h2>
                <div className="space-y-4 md:w-[60%] w-[100%] md:mt-0 mt-6">
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>How do you ensure brand consistency across posts?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                We have a team of experienced content creators that work closely with your brand guidelines to ensure
                                consistency across all posts.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown /> 
                            <span>What formats do you deliver the posts in?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                Posts can be delivered in various formats including JPG, PNG, and PDF, depending on your needs.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>Do you offer industry-specific content?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                Yes, our content creation services are tailored to meet the specific needs of your industry.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>What's the communication process once I purchase a bundle?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                After purchasing a bundle, you will be assigned a project manager who will be your point of contact
                                throughout the process.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>What if I'm not happy with my bundle?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                We offer revisions and adjustments to ensure you are completely satisfied with the final product.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>How fast will I get my posts?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                Delivery times vary based on the scope of the project, but we always aim to deliver as quickly as
                                possible without compromising quality.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>Can I get editable templates?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">Yes, we can provide editable templates for your posts if required.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}
