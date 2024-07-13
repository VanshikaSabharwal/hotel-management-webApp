"use client";

import { FC } from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
  heading1: React.ReactNode;
  imgSection: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, imgSection } = props;

  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {heading1}

        <button className="btn-primary">Get Started</button>
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs text-center lg:text-xl">Basic Room</p>
            <CountUpNumber duration={5000} endValue={200} />
          </div>

          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs text-center lg:text-xl">Deluxe Room</p>
            <CountUpNumber duration={5000} endValue={150} />
          </div>

          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs text-center lg:text-xl">Luxury Room</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
        </div>
      </div>

      {imgSection}
      <hr />
    </section>
  );
};
export default ClientComponent;
