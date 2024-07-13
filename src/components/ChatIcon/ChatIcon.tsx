import { IoChatbubbleEllipses } from "react-icons/io5";
import Link from "next/link";

const ChatIcon = () => {
  return (
    <div className="flex items-center w-full justify-between md:w-1/3 mt-4 mx-2">
      <Link href="chatbot">
        <IoChatbubbleEllipses />
      </Link>
    </div>
  );
};

export default ChatIcon;
