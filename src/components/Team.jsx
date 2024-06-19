import first from '../assets/1.jpg';
import second from '../assets/2.jpg';
import third from '../assets/3.jpg';
import fourth from '../assets/4.jpg';
export default function Team() {
    return (
        <div className='max-w-[1200px] h-auto px-4 mx-auto pb-6 mt-6'>
            <h1 className='text-center text-5xl'>Meet the People Behind It</h1>
            <div className='grid md:grid-cols-4 p-4 mt-8'>
            <div className='relative'>
                <img src={first} width={150} height={150} className='rounded-full object-cover' />
            </div>
            <div className='relative'>
                <img src={first} width={150} height={150} className='rounded-full object-cover' />
            </div>
            <div className='relative'>
                <img src={first} width={150} height={150} className='rounded-full object-cover' />
            </div>
            <div className='relative'>
                <img src={first} width={150} height={150} className='rounded-full object-cover' />
            </div>

            </div>
        </div>
    );
}