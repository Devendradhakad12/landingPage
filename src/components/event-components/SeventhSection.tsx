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
                            <span>What age group is Cosmic Kids Club designed for?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                Cosmic Kids Club is designed for young minds aged 7-14 years.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>What is the duration of the offer for membership?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                The offer is for the first year, and renewal will happen at the printed price with a renewal discount.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>Is Cosmic Kids Club accessible on mobile devices?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                Yes, Cosmic Kids Club is a web-based application that is mobile responsive, allowing you to browse through it on mobile and tablet devices.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>How will I receive notifications about events and updates?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                You will receive notifications on your registered email ID. Additionally, if you join our Cosmic Kids Club channel, you will also receive notifications.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>Are the events, comics, and videos suitable for all ages?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                The events, collections of comics, and videos on Cosmic Kids Club are grade and age-specific.
                            </p>
                        </div>
                    </details>
                    <details className="group border-b-2 border-white/30">
                        <summary className="flex justify-start gap-[20px] items-center p-4 cursor-pointer">
                            < FaArrowDown />
                            <span>How can I seek support or assistance?</span>
                        </summary>
                        <div className="px-4 pb-4">
                            <p className="text-gray-400">
                                For any support or assistance, you may write to us at info@cosmickids.club.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}
