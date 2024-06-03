import Button from '../../../components/Button'

const Lawn = () => {
  return (
    <div className="w-full mt-5">
    <div className="max-w-[2000px] px-[80px] max-lg:px-[30px] max-md:px-[10px] w-full mx-auto flex flex-col ">
      <div className="mx-auto  w-[60%] max-lg:w-[100%] max-md:w-[100%]">
        <div className="flex flex-wrap gap-3 font-semibold text-4xl justify-center ">
          <span>Your perfect lawn is</span>
          <span className="text-primary">awaiting for you</span>
        </div>
        <p className="text-center mt-8 text-xl">
          With RC Stone Inc., you'll find tailored solutions for all your
          outdoor needs, whether it's ensuring your commercial property
          remains accessible during winter, creating the pool of your dreams,
          or enhancing the appeal of your outdoor space through landscaping
          and hardscaping. We have the expertise and dedication to exceed your
          expectations.
        </p>
        <p className="text-center my-5 text-xl">
          We invite you to explore our portfolio, read our client
          testimonials, and get inspired by our past projects. At RC Stone
          Inc., we believe that every landscape has a story to tell, and we're
          here to help you write yours. Let's embark on a journey to transform
          your outdoor space into a masterpiece that reflects your unique
          style and personality.
        </p>
      </div>
      <Button child="CONTACT US" className="mx-auto my-5" />
    </div>
  </div>
  )
}

export default Lawn
