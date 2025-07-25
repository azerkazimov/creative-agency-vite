import SectionHeader from "@/components/section-header/section-header";
import Button from "@/components/ui/button/button";
import { Link } from "react-router-dom";

export default function Collaboration() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="flex flex-col gap-8 justify-center">
          <SectionHeader
            content="Interesting Collaboration With Us?"
            position="start"
            description="Help you to reach your business goal"
          />
          <Link to={"/service"}>
            <Button className="btn-white">Get Started</Button>
          </Link>
        </div>
        <div className="flex flex-col relative">
          <img src="/meeting.jpg" alt="" className="absolute z-1 w-[295px] h-[288px] rounded-md bottom-0 left-0 object-cover" />
          <img src="/command.jpg" alt="" className="absolute z-0 w-[295px] h-[288px] rounded-md top-0 right-0 object-cover" />
        </div>
      </div>
    </div>
  );
}
