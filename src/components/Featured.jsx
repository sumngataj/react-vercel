export default function Featured() {
    return(
        <div className='mx-auto'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.891187512688!2d123.92753924311647!3d10.313408383338704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9990adb9282ed%3A0xe45490cfbc5faa37!2sRobinland%20Inc.!5e0!3m2!1sen!2sph!4v1718761232932!5m2!1sen!2sph" className='w-full' height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
        <div className='max-w-[1340px] mx-auto flex flex-col items-start justify-between mt-8'>
        <div className='grid md:grid-cols-2'>
        <h1 className='text-5xl leading-relaxed'>Contact Us</h1>
        <h1 className='text-5xl leading-relaxed'>Information</h1>

        <div className='w-11/12 flex flex-col'>
            <div className="flex flex-col mt-2">
                <label for="email" className="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="p-2 rounded-lg border border-gray-400 focus:border-black focus:outline-none" />
            </div>
            <div className="flex flex-col mt-2">
                <label for="subject" className="hidden">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" className="p-2 rounded-lg border border-gray-400 focus:border-black focus:outline-none" />
            </div>
            <div className="flex flex-col">
                <label for="message" className="text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="6" className="p-2 rounded-lg border border-gray-400 focus:border-black focus:outline-none" placeholder="Message"></textarea>
            </div>
            <button className='w-full rounded-md bg-[#7dae07] text-white text-md p-2 mt-6'>Send Message</button>
            </div>
            <div>
                <p className='leading-relaxed text-xl'>
                    We invite you to join us on this journey. Together, we can make a  <br /> difference. 
                    Together, we can build a future that is not only sustainable  <br /> but  also  prosperous  
                    and full of promise. Let us embrace the power of renewable energy and  work hand in 
                    hand towards a brighter, greener tomorrow. 🌍💚
                </p>
                <br />
                <p className='leading-relaxed text-xl'>
                    Thank you for your unwavering support and belief in our mission. Here’s to a future powered by renewable energy, innovation, and collective action.
                </p>
            </div>
            </div>

        </div>
        </div>
    );
}