import Button from "../ui/Button";




export default function TopSection() {

    const imgArr = [12, 3, 4, 5, 5, 6, 67, 7, 8]
    return (
        <section className="text-black p-8">
            <div>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="lg:text-[100px] sm:text-[60px] text-[45px] font-[900] lg:leading-[120px] sm:leading-[80px] leading-[50px]">
                                Cosmic
                                <br />
                                Kids Club
                            </h1>
                            {/*                    <div className=" border-2 w-[35%] md:h-[200px] h-[100px] border-black">

                            </div> */}
                        </div>
                        <p className="lg:text-[48px] md:text-[30px] text-[20px] mt-4 mb-6 font-[700] lg:leading-[64px] md:leading-[40px] leading-[30px]">
                            Where every child explores space and nurtures curiosity,
                            fostering their scientific temperament from an early age

                        </p>

                        <div>Yearly Membership – <button className="hover:scale-105 transition-all duration-300 bg-[#E34135] px-5 xl:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] py-2 text-white rounded-full"><span className=" line-through">₹2499/-</span> ₹999/-</button></div>
                    </div>
                </div>
            </div>


            {/* ------------------------- */}
            <div

                className="md:h-[220px] h-[200px] w-[95%]  flex overflow-x-auto gap-[30px]  m-auto mt-14 mb-3">

                {
                    imgArr.length && imgArr.map((element, index) => (
                        <div key={index} className={"w-[250.63px] h-full border-[6px] border-white rounded-[20px] gap-[17px] flex flex-col  items-center"}>
                            <div className=" capitalize font-[600] text-[15px] leading-[22.5px] text-[#263238] text-center w-[192.53px] h-full">
                                <img src={"https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="} alt={""} className="w-full   h-full object-cover rounded-[20px]" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
