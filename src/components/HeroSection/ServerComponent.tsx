import Image from "next/image";

export const heading1 = (
  <>
    <h1 className="font-heading mb-6">Step Into Comfort and Beauty</h1>
    <p className="mb-12 max-w-lg text-[#4a4a4a] dark:text-[#fffffffea]">
      Experience an hotel Immersed inRich History and Timeless Elegance.
    </p>
  </>
);

export const imgSection = (
  <div className="md:grid hidden gap-8 grid-cols-1">
    <div className="rounded-2xl overflow-hidden h-48">
      <Image
        src="/images/hero-1.jpg"
        alt=""
        width={300}
        height={300}
        className="img scale-animation"
      />
    </div>
    <div className="grid grid-cols-2 gap-8 h-48">
      <div className="rounded-2xl overflow-hidden ">
        <Image
          src="/images/hero-2.jpg"
          alt=""
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
      <div className="rounded-2xl overflow-hidden ">
        <Image
          src="/images/hero-3.jpg"
          alt=""
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
    </div>
  </div>
);
