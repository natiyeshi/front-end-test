import { IoIosArrowBack } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../../assets/Frame 13 (4).png";
import image2 from "../../../assets/Frame 13 (1).png";
import image3 from "../../../assets/Frame 13 (2).png";
import image4 from "../../../assets/Frame 13 (5).png";
import image5 from "../../../assets/Frame 13 (6).png";

const Slides = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1200, min: 664 },
      items: 2,
      paritialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: {  },
    } = rest;
    return (
      <div className="absolute left-0 top-[50%]  pointer-events-none carousel-button-group my-4  max-lg:px-5 max-md:px-1 px-14 gap-4 flex  w-full">
        <button
          className={`bg-[#F9F9F9] shadow-xl grid pointer-events-auto place-items-center rounded-full w-[2.5em] h-[2.5em] `}
          onClick={() => previous()}
        >
          {<IoIosArrowBack className="text-onSecondary text-2xl " />}
        </button>
        <button
          className="bg-[#F9F9F9]  ml-auto pointer-events-auto grid place-items-center rounded-full w-[2.5em] h-[2.5em]"
          onClick={() => next()}
        >
          {<IoIosArrowBack className="text-onSecondary text-2xl rotate-180" />}
        </button>
      </div>
    );
  };

  return (
    <section className="w-full mt-12 mb-24 flex  ">
      <div className="max-w-[2000px]  mx-auto px-[80px] max-lg:px-[30px] max-md:px-[10px] w-full relative   ">
        <Carousel
          infinite={false}
          autoPlay={false}
          containerClass="carousel-container"
          itemClass="carousel-image-item"
          // autoPlaySpeed={400}

          partialVisible={true}
          responsive={responsive}
          className=" max-lg:max-w-[100vw]    mt-12"
          slidesToSlide={1}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          <div className="pe-5">
            <img
              src={image1}
              alt="Image"
              className="h-[380px]  object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="pe-5">
            <img
              src={image2}
              alt="Image"
              className="h-[380px]  object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="pe-5">
            <img
              src={image3}
              alt="Image"
              className="h-[380px]  object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="pe-5">
            <img
              src={image4}
              alt="Image"
              className="h-[380px]  object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="pe-5">
            <img
              src={image5}
              alt="Image"
              className="h-[380px]  object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Slides;
