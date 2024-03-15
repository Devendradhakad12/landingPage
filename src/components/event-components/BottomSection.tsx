
export default function BottomSection() {
    return (
        <div className="bg-black py-10">
            <div className="bg-[#B1ABF4] w-[80%] mx-auto text-black rounded-[22px] px-10 py-10">
                <div className=" mx-auto flex md:flex-row flex-col justify-between ">
                    <div>
                        <nav className="mb-8">
                            <ul className="flex space-x-6">
                                <li>
                                    <a className="hover:underline font-bold" href="#">
                                        OUR SOLUTION
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline font-bold" href="#">
                                        HOW IT WORKS
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline font-bold" href="#">
                                        PRICING
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline font-bold" href="#">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <h1 className="text-5xl font-bold leading-tight mb-4 w-[80%]">Came for the content, stayed for the <span className="text-white">glow up!</span></h1>
                        <p className="text-sm">© Content on Demand (by Brand Therapy). All rights reserved</p>
                    </div>
                    <div>
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
                            <p className="text-sm mb-2 font-semibold">COME, STALK US:</p>
                            <div className="flex space-x-2">
                                <InstagramIcon className="h-6 w-6 fill-current" />
                                <SmartphoneIcon className="h-6 w-6 fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto mt-8 flex justify-end gap-[40px]  items-end">
                    <div>
                        <a className="text-sm hover:underline" href="#">
                            Terms of Use
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <a className="text-sm hover:underline" href="#">
                            Privacy Policy
                        </a>
                        <a className="text-sm hover:underline" href="#">
                            Return & Refund Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function SmartphoneIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    )
}
