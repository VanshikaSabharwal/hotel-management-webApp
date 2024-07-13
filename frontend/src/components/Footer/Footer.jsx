import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotels
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">CodeWithVanshika</p>
            </div>
            <div className="flex items-center ">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-000</p>
            </div>
            <div className="flex items-center py-4">
              <BiMessageDetail />
              <p className="ml-2">CodeWithVanshika</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touchh</p>
            <p className="pb-4">Our Privacy</p>
            <p className="pb-4">Our privacy commitement</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer Assistance</p>
          </div>
          <div className="flex-1 md:text-right">
            <div className="pb-4"> Dining Experience</div>
            <div className="pb-4"> Wellness</div>
            <div className="pb-4"> Sports</div>
            <div className="pb-4"> Fitness</div>
            <div>Events</div>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-light h-10 md:h-{70px} mt-16 w-full bottom-0"></div>
    </footer>
  );
};

export default Footer;
