export default function Cards() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-items-around border-b border-gray-400 pb-12">
        <div class="flex flex-col space-y-5">
          <img className='object-cover w-96 h-60 rounded-3xl' src="https://images.unsplash.com/photo-1503495731986-41d521ecbb32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className='object-cover w-96 h-60  rounded-3xl' src="https://plus.unsplash.com/premium_photo-1680085770892-1a38291b22bf?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
        <div className='flex flex-col items-start justify-between'>
          <ul className='list-disc text-xs flex-1 space-y-6'>
            <li className='text-md text-[#117866]'>SOLAR POWER ENERGY</li>
            <h1 className='text-5xl'>100% Renewable Energy</h1>
            <p className='leading-relaxed'>The design and installation of PV systems on a large scale enable us to move away from other polluting and unsustainable energy sources.   
              Since the solar industry is growing, that means that the need for skilled workers is also growing! Remote Energy (RE) is a 501 (c)(3) 
              for-impact organization that trains women and men worldwide to harness the power of the sun and develop the technical PV design and installation 
              skills required to bring clean power and positive change to their communities. 
            </p>
            <button className='bg-[#117866] text-white w-full p-4 rounded-lg'>Subsribe to our newsletter to get latest updates</button>
            <p className='font-semibold text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis. Sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
          </ul>
        </div>
        </div>
        </div>
      </div>

  );
}
