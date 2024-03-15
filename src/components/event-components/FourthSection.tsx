
export default function FourthSection() {
    return (
        <div className="bg-[#A3DE9B] p-10">
            <div className="max-w-screen mx-auto sm:mt-[20px]">
                <h1 className="lg:text-[50px] text-[35px] font-[800] text-center mb-10">Praises? We've Collected A Few</h1>


                <div className="w-full  flex overflow-x-auto gap-[30px]">
                    <div className="bg-black text-white rounded-[22px]  p-6 min-w-[400px]">
                        <p className="text-sm italic">"I would trust Aishwarya. She has so many compliments."</p>
                        <p className="text-xs mt-2">- SOMEONE, SOME COMPANY</p>
                    </div>
                    <div className="bg-black text-white rounded-[22px] p-6 min-w-[400px]">
                        <p className="text-sm italic">
                            "Aishwarya and her team have been nothing short of fantastic to work with. They contribute original ideas
                            and are highly organized, responsive, and on time. In addition, they're open, learning, and adjusting as
                            the market provides feedback on their work."
                        </p>
                        <p className="text-xs mt-2">- JESSE, BUSINESS OWNER</p>
                    </div>
                    <div className="bg-black text-white rounded-[22px] p-6 min-w-[400px]">
                        <p className="text-sm italic">
                            "Aishwarya [and team] are great to deal with and the company eye for detail and the micro personally.
                            Highly recommend."
                        </p>
                        <p className="text-xs mt-2">- CAROLINE, SOCIAL MEDIA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

