import Navbar from "@/components/Navbar";
import BottomSection from "@/components/event-components/BottomSection";
import FifthSection from "@/components/event-components/FifthSection";
import FourthSection from "@/components/event-components/FourthSection";
import SecondSection from "@/components/event-components/SecondSection";
import SeventhSection from "@/components/event-components/SeventhSection";
import SixthSection from "@/components/event-components/SixthSection";
import ThirdSection from "@/components/event-components/ThirdSection";
import TopSection from "@/components/event-components/TopSection";

export default function Home() {
  return (
    <div className="bg-[#B1ABF4]">
      <Navbar />
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <BottomSection />
    </div>
  );
}
