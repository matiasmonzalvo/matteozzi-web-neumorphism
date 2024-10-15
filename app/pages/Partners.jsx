import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section
      id="services"
      className="bg-white text-black lg:p-4 relative h-screen flex items-center justify-center"
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
            <div className="w-full h-[10vw] flex flex-row gap-3">
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                <Image
                  className="invert"
                  src="/clientes/aerolineas.png"
                  width={900}
                  height={900}
                  alt="Aerolineas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                <Image
                  className="invert"
                  src="/clientes/coto.png"
                  width={900}
                  height={900}
                  alt="Coto"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                <Image
                  className="invert"
                  src="/clientes/cnea.png"
                  width={900}
                  height={900}
                  alt="CNEA"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                <Image
                  className="invert"
                  src="/clientes/lan.png"
                  width={900}
                  height={900}
                  alt="Lan"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="w-full h-[10vw] flex flex-row gap-3">
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/altec.png"
                  width={900}
                  height={900}
                  alt="Altec"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/abccargas.png"
                  width={900}
                  height={900}
                  alt="Abc Cargas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/cruzdelsur.png"
                  width={900}
                  height={900}
                  alt="Cruz del sur"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/aerolineas.png"
                  width={900}
                  height={900}
                  alt="Aerolineas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="w-full h-[10vw] flex flex-row gap-3">
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/aerolineas.png"
                  width={90}
                  height={90}
                  alt="Aerolineas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/aerolineas.png"
                  width={90}
                  height={90}
                  alt="Aerolineas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/aerolineas.png"
                  width={90}
                  height={90}
                  alt="Aerolineas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="w-1/4 h-full bg-white border-[1px] border-neutral-300 rounded-xl flex items-center justify-center">
                {" "}
                <Image
                  className="invert"
                  src="/clientes/aerolineas.png"
                  width={90}
                  height={90}
                  alt="Aerolineas"
                  style={{
                    width: "80%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
