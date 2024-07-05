import { Person } from "../Person";
import RsecLogo from "../assets/logo1.png";
import { useState } from "react";

export default function Cards() {
  const [description, setDescription] = useState(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="h-auto lg:p-8 bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
      }}
    >
      <div className="w-full bg-[#7dae07] lg:rounded-3xl py-16 px-4 h-auto">
        <div className="w-full mx-auto px-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-semibold">
              Company Profile
            </h1>
            <br />
            <p className="text-white leading-relaxed text-justify text-lg sm:text-xl">
              At 888 Renewable and Sustainable Energy Corporation, we are
              dedicated to creating a world where sustainable energy is not a
              luxury but a given. Through our community outreach programs, we
              strive to educate and empower individuals and communities to make
              sustainable choices and advocate for policies that promote
              renewable energy use.
              <br />
              <br />
              As we look to the future, we are filled with hope and excitement
              for what lies ahead. The challenges of climate change and
              environmental degradation are daunting, but they are not
              insurmountable. With your continued support and partnership, we
              believe that 888 Renewable and Sustainable Energy Corporation can
              lead the way in creating a sustainable future for all.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mx-auto mt-12 bg-white rounded-3xl px-12 py-8 relative">
          <div className="flex justify-between">
            <h1 className="text-3xl text-center font-semibold">
              Company Mission
            </h1>
            <img
              className="absolute right-0 top-0 lg:hidden"
              src={RsecLogo}
              width={150}
            />
          </div>
          <div className="flex items-start justify-between border-b border-[#102437] pb-8 relative">
            <div>
              <ul className="list-disc text-xs flex-1 space-y-3 mt-6">
                <p className="text-lg text-[#7dae07] font-medium">
                  Our Mission
                </p>
                <p className="text-xl lg:text-justify leading-relaxed mt-8 bg-white lg:bg-transparent rounded-full ">
                  At
                  <span className="font-bold">
                    {" "}
                    888 Renewable and Sustainable Energy Corporation
                  </span>
                  , we are not just a company; we are a beacon of hope and
                  innovation in the quest for a greener, more sustainable
                  future. Our mission is to harness the power of renewable
                  resources to create energy solutions that are not only
                  efficient and reliable but also environmentally friendly and
                  sustainable for generations to come.
                </p>
              </ul>
            </div>
            <img className="hidden lg:block" src={RsecLogo} width={200} />
          </div>
          <h1 className="text-3xl mt-8 text-center font-semibold">
            People behind 888RSEC
          </h1>
          <div className="md:grid md:grid-cols-2 lg:flex flex-wrap lg:gap-0 p-4 mt-8 border-b border-[#102437] pb-8 justify-center">
            {Person.map((person) => (
              <div
                key={person.id}
                className="relative flex flex-col items-center space-y-6 w-full lg:w-1/4 p-4"
              >
                <img
                  src={person.pic}
                  className="rounded-full object-cover  h-48 w-48"
                  onClick={() => {
                    setDescription(person);
                    setShowModal(true);
                  }}
                />

                <p className="text-center font-semibold">
                  <span className="underline text-md">{person.title}</span>{" "}
                  <br />
                  <span className="md:text-lg"> {person.name}</span>
                  <br />
                  <span className="text-sm">{person.subTitle}.</span>
                </p>
              </div>
            ))}
          </div>
          {/* <div className="lg:hidden w-full h-64 mt-10 bg-slate-500">
            <Slider className="text-black" {...settings}>
              {Person.map((person) => (
                <div key={person.id} className="w-full">
                  <div className="flex justify-around items-center w-full h-32 md:h-64 bg-red-300 p-4">
                    <img
                      src={person.pic}
                      className="object-cover w-32 h-full md:w-64"
                      onClick={() => {
                        setDescription(person);
                        setShowModal(true);
                      }}
                    />

                    <div>
                      <p className="font-semibold">
                        <span className="underline text-md">
                          {person.title}
                        </span>{" "}
                        <br />
                        <span className="md:text-lg"> {person.name}</span>
                        <br />
                        <span className="text-sm">{person.subTitle}.</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div> */}
          {showModal && (
            <div
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="relative max-w-3xl w-full mx-auto rounded-lg overflow-hidden bg-white h-[40rem] overflow-y-auto">
                <div className="p-2 sm:p-4 md:p-8">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: description.description,
                    }}
                    className="leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
