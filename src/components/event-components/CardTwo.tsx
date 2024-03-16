import { FaMousePointer } from "react-icons/fa";

export default function CardTwo() {
    return (
        <div className="bg-white p-8 text-black  -rotate-6 max-w-sm mx-auto rounded-lg">
            <h1 className="lg:text-[30px] md:text-[25px]  text-[20px] font-bold text-center mb-4">YOU JUST ORDERED A BUNDLE!</h1>
            <div className="flex justify-center mb-4">
                <FaMousePointer />
            </div>
            <ul className="list-decimal list-inside space-y-4">
                <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#6c5ce7] text-white rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">1</span>
                    </div>
                    <div>
                        <h2 className="font-bold">Fill in your details to create an account.</h2>
                    </div>
                </li>
                <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#6c5ce7] text-white rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">2</span>
                    </div>
                    <div>
                        <h2 className="font-bold">Choose the membership plan that suits you best.</h2>
                    </div>
                </li>
                <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#6c5ce7] text-white rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">3</span>
                    </div>
                    <div>
                        <h2 className="font-bold">Start exploring our universe of learning and discovery.</h2>
                    </div>
                </li>
                <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#6c5ce7] text-white rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">4</span>
                    </div>
                    <div>
                        <h2 className="font-bold">Join the Cosmic Kids Club WhatsApp channel to stay connected</h2>
                    </div>
                </li>
            </ul>
            <div className="flex justify-center mt-6">
                <FaMousePointer />
            </div>
            <div className="text-center mt-6">
                <p className="mb-2">THANK YOU! HAVE A NICE DAY :</p>
                <img
                    alt="Barcode"
                    className="mx-auto"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "200/50",
                        objectFit: "cover",
                    }}
                    width="200"
                />
            </div>
        </div>
    )
}


