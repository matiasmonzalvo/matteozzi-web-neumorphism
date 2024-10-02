import React from "react";

export default function Partners() {
  return (
    <section
      id="services"
      className="bg-white text-black h-auto lg:p-4 relative h-screen flex items-center justify-center"
      data-scroll-section
    >
      <div className="w-[80%] h-full flex flex-row items-center justify-center">
        <div className="w-2/5">
          <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-[0.9]">
            Nuestros Clientes
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            pariatur tenetur totam quos, molestiae aut earum quaerat accusamus
            cupiditate in.
          </p>
        </div>
        <div className="w-3/5 h-full flex flex-row items-center justify-end">
          <div className="w-[90%] h-[75%] mt-6 flex flex-col items-center justify-center gap-3">
            <div
              className="w-full h-1/3 flex flex-row gap-3"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-direction="horizontal"
            >
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
            </div>
            <div
              className="w-full h-1/3 flex flex-row gap-3"
              data-scroll
              data-scroll-speed="-0.5"
              data-scroll-direction="horizontal"
            >
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
            </div>
            <div
              className="w-full h-1/3 flex flex-row gap-3"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-direction="horizontal"
            >
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
