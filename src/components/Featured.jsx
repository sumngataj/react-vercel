import { FaArrowRight } from "react-icons/fa6";
export default function Featured() {
    return(
        <div className='max-w-[1240px] mx-auto flex flex-col items-start justify-between'>
            <div className='flex items-end justify-between w-full'>
                <h1 className='text-3xl font-semibold'>Featured Projects ~</h1>
                <button className='flex items-center justify-around text-sm'>More Projects  <FaArrowRight className='ml-2' size={10}/></button>
            </div>
            <div className='flex items-center justify-between space-x-6 w-full mt-10'>
                <div className='flex-1 w-full'>
                    <img className='object-cover w-full h-96' src="https://images.unsplash.com/photo-1503495731986-41d521ecbb32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className='flex-none w-72'>
                    <img className='object-cover w-full h-96' src="https://images.unsplash.com/photo-1503495731986-41d521ecbb32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className='flex flex-col space-y-8'>
                    <img className='object-cover w-full h-44' src="https://images.unsplash.com/photo-1503495731986-41d521ecbb32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <img className='object-cover w-full h-44' src="https://images.unsplash.com/photo-1503495731986-41d521ecbb32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </div>
        </div>
    );
}