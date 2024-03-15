import Button from "../ui/Button";




export default function TopSection() {

    const imgArr = [12, 3, 4, 5, 5, 6, 67, 7, 8]
    return (
        <section className="text-black p-8">
            <div>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="lg:text-[100px] sm:text-[60px] text-[45px] font-[900] lg:leading-[120px] sm:leading-[80px] leading-[50px]">
                            CONTENT
                            <br />
                            ON DEMAND
                        </h1>
                        <p className="lg:text-[48px] md:text-[30px] text-[20px] mt-4 mb-6 font-[700] lg:leading-[64px] md:leading-[40px] leading-[30px]">
                            We take your content stress away, so
                            <br />
                            you can focus on the bigger picture.
                        </p>
                        <Button classNames="bg-red-600 hover:bg-red-700 text-white font-[700] lg:text-[18px] md:text-[16px] text-[14px] tracking-widest md:px-7 px-4" text="   Check out bundles" />
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
