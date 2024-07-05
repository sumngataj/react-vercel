import { Navbar, Footer } from "../components/index";
import services from "../assets/services.jpg";

export default function Services() {
  return (
    <>
      <Navbar />
      <div
        className="bg-[#7dae07] w-full h-[35rem] relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1660330589257-813305a4a383?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        }}
      >
        <h1 className="text-8xl text-center underline font-semibold p-4 text-white z-9">
          Our Services
        </h1>
        <div className="absolute inset-0 bg-black opacity-50 z-8"></div>
      </div>
      <h1 className="flex mx-12 mt-8 italic font-semibold space-x-2">
        <p className=" underline">Home</p>
        <p>&gt;</p>
        <p className=" underline">Services</p>
      </h1>
      <div className="max-w-[1300px] mx-auto border border-gray-300 shadow-xl flex flex-col justify-center mt-8">
        <img src={services} className="w-full h-auto object-cover p-8 md:p-0" />
      </div>
      <div className="max-w-[1300px] flex items-center mx-auto font-semibold space-x-2 italic mt-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-2">
        <div className="max-w-xl  mt-8 border border-gray-300 shadow-lg hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1666345068051-f5424bee7304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="max-w-xl  mt-12 text-lg leading-relaxed p-8 md:p-0">
          k<h1 className="text-3xl font-semibold mb-4 underline">Design</h1>
          Our design process begins with a comprehensive site assessment. We
          evaluate factors such as roof orientation, shading, and structural
          integrity to ensure your property is suitable for solar installation.
          This thorough assessment allows us to address any potential challenges
          upfront and develop a design that meets your unique requirements.
          <br />
          <div className="max-w-xl  mt-8 border border-gray-300 shadow-lg block md:hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1666345068051-f5424bee7304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-96 object-cover"
            />
          </div>
          <br />
          We use advanced software to create a custom design tailored to your
          specific energy needs and property characteristics. Our team analyzes
          your energy consumption patterns and property layout to determine the
          optimal placement and configuration of your solar panels. This
          detailed approach ensures that you get the most out of your solar
          investment
        </div>
        <div className="max-w-xl  mt-12  text-lg leading-relaxed  p-8 md:p-0">
          <h1 className="text-3xl font-semibold mb-4 underline">Planning</h1>
          Our planning services ensure that every solar energy system we install
          is perfectly tailored to your specific needs and property
          characteristics. We use advanced software to model your energy
          consumption and optimize the layout of your solar panels. This
          detailed planning process helps maximize energy production and ensures
          that your system integrates seamlessly with your property.
          <div className="max-w-xl  mt-12 border border-gray-300 shadow-lg block md:hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        <div className="max-w-xl  mt-12 border border-gray-300 shadow-lg hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="max-w-xl  mt-12 border border-gray-300 shadow-lg hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1671808063421-697d6de53c2e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="max-w-xl  mt-12  text-lg leading-relaxed p-8 md:p-0">
          <h1 className="text-3xl font-semibold mb-4 underline">
            Installation
          </h1>
          We specialize in installing solar panel systems of all sizes. Our team
          conducts a thorough assessment of your property to determine the
          optimal placement and configuration of solar panels. This ensures
          maximum energy production and efficiency. Our solutions are scalable
          and can be tailored to meet the energy demands of small to large
          industrial facilities.
          <div className="max-w-xl  mt-12 border border-gray-300 shadow-lg block md:hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1671808063421-697d6de53c2e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl  mt-12 text-lg leading-relaxed p-8 md:p-0">
          <h1 className="text-3xl font-semibold mb-4 underline">Maintenance</h1>
          Regular maintenance is essential to ensure that your solar energy
          system operates at peak efficiency. We provide comprehensive
          maintenance services, including routine inspections, cleaning, and
          performance checks. If any issues arise, our repair team is on hand to
          diagnose and fix problems quickly, minimizing downtime and ensuring
          your system continues to perform optimally.
          <div className="max-w-xl  mt-12 border border-gray-300 shadow-lg block md:hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        <div className="max-w-xl  mt-12 border border-gray-300 shadow-lg hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
