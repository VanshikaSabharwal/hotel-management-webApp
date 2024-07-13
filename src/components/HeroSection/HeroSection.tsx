import ClientComponent from "./ClientComponent";
import { heading1, imgSection } from "./ServerComponent";

const HeroSection = () => {
  return <ClientComponent heading1={heading1} imgSection={imgSection} />;
};

export default HeroSection;
