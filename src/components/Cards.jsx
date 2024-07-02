import RsecVid from "../assets/888rsec.mp4";
import RsecLogo from "../assets/logo1.png";
import { useState } from "react";
import first from "../assets/1.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import fourth from "../assets/4.jpg";
import Alexander from "../assets/4.png";
import fifth from "../assets/5.jpg";
import sixth from "../assets/6.jpg";
import { IoIosClose } from "react-icons/io";
export default function Cards() {
  const [more, setMore] = useState(false);

  const handleReadMore = () => {
    setMore(!more);
  };

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
              WHY <span className="text-[#fdd703] font-semibold">888</span>RSEC
              ?
            </h1>
            <br />
            <p className="text-white leading-relaxed text-justify text-xl">
              Our portfolio boasts a diverse range of projects, from solar farms
              that capture the sun’s rays to transform them into clean
              electricity, to wind turbines that harness the power of the wind,
              and hydroelectric plants that utilize water’s might. Each project
              is a testament to our unwavering commitment to innovation,
              excellence, and sustainability.{" "}
              <button
                onClick={handleReadMore}
                className={`text-sm underline text-[#5fceeb] ${
                  more ? "hidden" : "visible"
                }`}
              >
                Read More
              </button>
            </p>

            <br />
            <p
              className={`text-white leading-relaxed text-justify text-xl transition-shadow ease-in-out ${
                more ? "visible" : "hidden"
              }`}
            >
              But our ambitions go beyond energy production. At 888 Renewable
              and Sustainable Energy Corporation, we are dedicated to creating a
              world where sustainable energy is not a luxury but a given.
              Through our community outreach programs, we strive to educate and
              empower individuals and communities to make sustainable choices
              and advocate for policies that promote renewable energy use.
              <br />
              <br />
              As we look to the future, we are filled with hope and excitement
              for what lies ahead. The challenges of climate change and
              environmental degradation are daunting, but they are not
              insurmountable. With your continued support and partnership, we
              believe that 888 Renewable and Sustainable Energy Corporation can
              lead the way in creating a sustainable future for all.{" "}
              <button
                onClick={handleReadMore}
                className="text-sm underline text-[#5fceeb]"
              >
                View Less
              </button>
            </p>
          </div>
          {/* <div className="flex justify-end items-end"> 
           <img src={RsecLogo} width={300} />
          </div> */}
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
            <div className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4">
              <img
                src={second}
                className="rounded-full object-cover  h-48 w-48"
              />
              <p className="text-center font-semibold">
                <span className="underline text-md">Chairman of the Board</span>{" "}
                <br />
                <span className="md:text-lg"> Gen. Willy Bonilla</span>
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4">
              <img
                src={first}
                className="rounded-full object-cover  h-48 w-48"
              />
              <p className="text-center font-semibold">
                <span className="underline text-md">Board of Directors</span>
                <br /> <span className="md:text-lg">Mr. Edwin Robin </span>{" "}
                <br />
                <span className="text-sm">
                  President - Robin Group of Companies
                </span>
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4">
              <img
                src={third}
                className="rounded-full object-cover  h-48 w-48"
              />
              <p className="text-center font-semibold">
                <span className="underline text-md">Board of Directors</span>
                <br />{" "}
                <span className="md:text-lg">
                  Eng’r. Edwin Chavez - PEE
                </span>{" "}
                <br />
                <span className="text-sm">President - EC Powertech.</span>
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4">
              <button type="button" onClick={openModal}>
                <img
                  src={Alexander}
                  className="rounded-full object-cover  h-48 w-48"
                />
              </button>
              <p className="text-center font-semibold">
                <span className="underline text-md">Board of Directors</span>
                <br />{" "}
                <span className="md:text-lg">VADM Alexander S. Lopez</span>{" "}
                <br />{" "}
                <span className="text-sm">Former DOE Under Secretary</span>
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4">
              <img
                src={fifth}
                className="rounded-full object-cover  h-48 w-48"
              />
              <p className="text-center font-semibold">
                <span className="underline text-md">Board of Directors</span>
                <br />{" "}
                <span className="md:text-lg">
                  Eng’r. Ernesto Abunda - PEE
                </span>{" "}
                <br />
                <span className="text-sm">President - Ebatech Corp.</span>
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4">
              <img
                src={fourth}
                className="rounded-full object-cover h-48 w-48"
              />
              <p className="text-center font-semibold">
                <span className="underline text-md">Board of Directors</span>
                <br /> <span className="md:text-lg">Eng’r. Eric Prado</span>
                <br />
                <span className="text-sm">President - KEVLAR Construction</span>
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center space-y-6 w-full md:w-1/4 p-4">
              <img
                src={sixth}
                width={150}
                height={150}
                className="rounded-full object-cover  h-48 w-48"
              />
              <p className="text-center font-semibold">
                <span className="underline text-md">Board of Directors</span>
                <br /> <span className="md:text-lg">Eng’r. Robert Tagulao</span>
                <br />
                <span className="text-sm">
                  President - RDT Sales & Services Inc.
                </span>
              </p>
            </div>
          </div>
          {/* <div className='flex items-center justify-between mt-8'>
          <div>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
          </div>
           <div className=''>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
          </div>
           <div>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
 
          </div>
        </div> */}
        </div>
      </div>
      {showModal && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative max-w-3xl w-full mx-auto rounded-lg overflow-hidden bg-white p-4 h-auto">
            <button
              className="absolute z-[9] top-0 right-2 text-white"
              onClick={closeModal}
            >
              <IoIosClose size={50} />
            </button>
            <div>
              <p className="leading-relaxed">
                <b>Alexander Soria Lopez</b> is a former Undersecretary of the
                Department of Energy (DOE) where he took cognizance of the human
                and natural security and safety threats affecting the energy
                sector that helped ensure the continued and unabated supply and
                delivery of energy-related services of the country. While at
                DOE, he also served as supervising Undersecretary of the DOE
                Field Offices in Luzon, Visayas, and Mindanao, the DOE Consumer
                Welfare and Protection Office (CWPO), the DOE Internal Audit
                Division (IAD), as well as the DOE’s principal representative to
                different security-related national boards, committees,
                councils, and other DOE-peculiar task forces.
                <br />
                <br /> Prior to his appointment to DOE, he distinguished himself
                with dedicated and loyal service to the country and Filipino
                people. He served the Armed Forces of the Philippines (AFP) for
                more than 38 years and retired with the rank Vice Admiral
                (3-star) in the Philippine Navy (PN). He specialized and had
                vast experiences in the field of military operations,
                intelligence, education and training, humanitarian assistance
                and disaster relief (HADR) operations, operational logistics,
                diplomacy, and management. He graduated from the Philippine
                Military Academy (PMA) in 1982. He had been designated and
                assumed different administrative and operational positions of
                major responsibilities in the AFP, most significant of which,
                among others: Commander, Western Command, (WESCOM) AFP; Deputy
                Chief of Staff for Education and Training (J8), AFP; Commander,
                Fleet-Marine Ready Force (FMRF), PN; Philippine Defense and
                Armed Forces Attaché (PhilDAFA) to the Republic of Singapore;
                and commanded five (5) commissioned Philippine Navy (PN)
                vessels. <br />
                <br /> He has an MA degree in Business Economics from the
                University of Asia and the Pacific (UA&P); and was also a
                recipient of several military trainings and specialty courses
                from both local and foreign military schools and institutions.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
