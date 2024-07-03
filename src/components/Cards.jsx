import { Person } from "../Person";
import RsecLogo from "../assets/logo1.png";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Cards() {
  const [description, setDescription] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className="h-auto p-20 bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1588575553315-6feef5326ec0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
      }}
    >
      <div className="w-full bg-[#7dae07] rounded-3xl py-16 px-4 h-auto">
        <div className="max-w-[1200px] mx-auto">
          <div>
            <h1 className="md:text-5xl text-white font-semibold">
              Company Profile
            </h1>
            <br />
            <p className="text-white leading-relaxed text-justify text-xl">
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
        <div className="flex flex-col max-w-[1240px] mx-auto mt-12 bg-white rounded-3xl px-12 py-8">
          <h1 className="text-3xl text-center font-semibold">
            Company Mission
          </h1>
          <div className="flex items-start justify-between border-b border-[#102437] pb-8 relative">
            <div>
              <ul className="list-disc text-xs flex-1 space-y-3 mt-6">
                <p className="text-lg text-[#7dae07] font-medium">
                  Our Mission
                </p>
                <p className="text-xl text-justify leading-relaxed mt-8">
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
            <img src={RsecLogo} width={200} />
          </div>
          <h1 className="text-3xl mt-8 text-center font-semibold">
            People behind 888RSEC
          </h1>
          <div className="flex flex-wrap md:grid-cols-4 p-4 mt-8 border-b border-[#102437] pb-8 justify-center">
            {Person.map((person) => (
              <div
                key={person.id}
                className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4"
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
          {showModal && (
            <div
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="relative max-w-3xl w-full mx-auto rounded-lg overflow-hidden bg-white h-[40rem] overflow-y-auto">
                <div className="p-2 sm:p-4 md:p-8">
                  <p className="leading-relaxed">{description.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
