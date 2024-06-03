import frame1 from "../../../assets/Frame 13.png";
import frame2 from "../../../assets/Frame 13 (1).png";
import frame3 from "../../../assets/Frame 13 (2).png";
import frame4 from "../../../assets/Frame 13 (3).png";
import frame6 from "../../../assets/Frame 13 (5).png";
import Button from "../../../components/Button";
const Explore = () => {
  return (
    <div className="flex flex-col max-w-[2000px] px-[80px] max-lg:px-[30px] max-md:px-[10px] w-full mx-auto">
      <Exp1 />
      <Exp2 />
      <Exp3 />
      <Exp4 />
      <Exp5 />
      <Exp6 />
      {/*
       */}
    </div>
  );
};

const Exp1 = () => (
  <div className=" flex max-lg:flex-col gap-6  py-8">
    <div className="basis-[35%] bg-white rounded-primary px-[40px] max-lg:px-[20px] max-md:px-[10px] py-[50px] flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-2xl font-semibold">Landscaping & Hardscaping</h1>
        <p>
          Our landscaping and hardscaping services encompass a range of options
          to enhance the beauty and functionality of your outdoor space,
          including:
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Turf Installation</h1>
        <p>
          Achieve the green lawn you've always desired with our expert turf
          installation
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">SOD Installation</h1>
        <p>
          When you need quick and reliable results, our sod installation service
          is the perfect choice. We'll provide you with an instant, healthy lawn
          that's ready to enjoy
        </p>
      </div>
      <Button child={"LEARN MORE"} />
    </div>
    <div className="basis-[65%] ">
      <img src={frame1} className="w-full h-full object-fit" alt="" loading="lazy" />
    </div>
  </div>
);

const Exp2 = () => (
  <div className=" flex flex-row-reverse max-lg:flex-col gap-6  py-8">
    <div className="basis-[35%] bg-white rounded-primary px-[40px] max-lg:px-[20px] max-md:px-[10px] py-[50px] flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-2xl font-semibold">Landscaping & Hardscaping</h1>
        <p>
          Our efficient snow removal services are exclusively tailored to meet
          the needs of commercial properties. We ensure that your business
          remains accessible and safe during even the harshest winter weather
          conditions.
        </p>
        <p className="mt-8 italic">
          Please note that we do not provide snow removal for residential
          properties.
        </p>
      </div>

      <Button child={"LEARN MORE"} />
    </div>
    <div className="basis-[65%] ">
      <img src={frame2} className="w-full h-full object-fit" alt="" loading="lazy" />
    </div>
  </div>
);

const Exp3 = () => (
  <div className=" flex max-lg:flex-col gap-6  py-8">
    <div className="basis-[35%] bg-white rounded-primary px-[40px] max-lg:px-[20px] max-md:px-[10px] py-[50px] flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Pools</h1>
        <p>
          Elevate your outdoor living experience with our comprehensive pool
          services, including:
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Full Installation</h1>
        <p>
          We specialize in creating and installing stunning pools that perfectly
          complement your landscape and personal style.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Renovations</h1>
        <p>
          If you have an existing pool that needs a fresh, modern look or
          functionality upgrade, our pool renovation service can revamp an
          outdated style.
        </p>
      </div>
      <Button child={"LEARN MORE"} />
    </div>
    <div className="basis-[65%] ">
      <img src={frame3} className="w-full h-full object-fit" alt="" loading="lazy" />
    </div>
  </div>
);

const Exp4 = () => (
  <div className=" flex flex-row-reverse max-lg:flex-col gap-6  py-8">
    <div className="basis-[35%] bg-white rounded-primary px-[40px] max-lg:px-[20px] max-md:px-[10px] py-[50px] flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Property Maintenance</h1>
        <p>
          We understand that maintaining your outdoor space is essential for its
          long-term beauty. Our property maintenance services cover everything
          from regular upkeep to seasonal care, ensuring your landscape always
          looks its best.
        </p>
      </div>

      <Button child={"LEARN MORE"} />
    </div>
    <div className="basis-[65%] ">
      <img src={frame4} className="w-full h-full object-fit" alt="" loading="lazy" />
    </div>
  </div>
);

const Exp5 = () => (
  <div className=" flex max-lg:flex-col gap-6  py-8">
    <div className="basis-[35%] bg-white rounded-primary px-[40px] max-lg:px-[20px] max-md:px-[10px] py-[50px] flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Interlocking</h1>
        <p>
          Enhance the aesthetics and durability of your outdoor surfaces with
          our interlocking solutions. Our expert craftsmanship will leave you
          with stunning and resilient hardscapes.
        </p>
      </div>

      <Button child={"LEARN MORE"} />
    </div>
    <div className="basis-[65%] ">
      <img src={frame3} className="w-full h-full object-fit" alt="" loading="lazy" />
    </div>
  </div>
);

const Exp6 = () => (
  <div className=" flex flex-row-reverse max-lg:flex-col gap-6  py-8">
    <div className="basis-[35%] bg-white rounded-primary px-[40px] max-lg:px-[20px] max-md:px-[10px] py-[50px] flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">General Contracting</h1>
        <p>
          From planning to execution, we manage every aspect of your project
          with precision to help ensure a seamless experience
        </p>
      </div>

      <Button child={"LEARN MORE"} />
    </div>
    <div className="basis-[65%] ">
      <img src={frame6} className="w-full h-full object-fit" alt="" loading="lazy" />
    </div>
  </div>
);

export default Explore;
