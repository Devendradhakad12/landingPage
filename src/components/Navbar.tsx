import Button from "./ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";



export default function Navbar() {
    return (
        <nav className="bg-[#B1ABF4] flex items-center w-[100vw]  lg:px-[100px] px-[30px] py-2 h-[86px]">
            <div className="md:flex hidden  items-center justify-between w-[100%]">
                <div className="text-black text-xl font-bold">COD</div>
                <ul className="flex items-center space-x-14">
                    <li>
                        <a className="text-black hover:text-gray-700  text-[14.4px] font-[700]" href="#">
                            OUR SOLUTION
                        </a>
                    </li>
                    <li>
                        <a className="text-black hover:text-gray-700  text-[14.4px] font-[700]" href="#">
                            HOW IT WORKS
                        </a>
                    </li>
                    <li>
                        <a className="text-black hover:text-gray-700 text-[14.4px] font-[700]" href="#">
                            PRICING
                        </a>
                    </li>
                    <li>
                        <a className="text-black hover:text-gray-700 text-[14.4px] font-[700]" href="#">
                            FAQS
                        </a>
                    </li>
                </ul>
                <Button text=" BUY A BUNDLE" classNames="bg-[#A3DE9B] text-black hover:bg-[#aaf1a0] font-[600] px-4 py-2" />
            </div>
            <div className="md:hidden flex text-[40px]">
                <button><GiHamburgerMenu /></button>
            </div>
        </nav>
    )
}

