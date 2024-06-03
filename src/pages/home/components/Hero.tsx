import { IoIosArrowBack } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="mt-8 max-w-[2000px] px-[80px] max-lg:px-[30px] max-md:px-[10px] w-full">
        <div className="flex justify-between  text-blurOnSecondary">
          <div role="button" className="flex gap-4">
            <IoIosArrowBack className="my-auto text-2xl cursor-pointer" />
            <div>Return</div>
          </div>
          <div role="button">Home / Services</div>
        </div>
        <div className="mt-7">
          <h1 className="text-3xl" style={{
            fontFamily : "550",
          }}>Service</h1>
          <h2 className="mt-12 text-4xl font-semibold flex flex-wrap gap-2">
            <span>Explore Our Diverse</span>
            <span className="text-primary">Outdoor Services</span>
          </h2>
          <p className="mt-5">
            At RC Stone Inc., we take pride in offering a spectrum of services
            designed to cater to all your outdoor needs. From innovative
            landscaping to meticulous snow removal, seamless pool installations,
            and expert contracting – our services redefine what's possible for
            your outdoor spaces. Dive into our offerings and let us bring your
            vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
