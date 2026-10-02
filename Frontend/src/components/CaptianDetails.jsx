import React , {useContext} from 'react'
import {CaptainDataContext} from '../context/CaptainContext';


export default function CaptianDetails(props) {

    const {captain} = useContext(CaptainDataContext);

    return (
        <div className=''>
            <div className=' rounded-2xl  h-20 p-1   h-100vh mt-2 pt-3  bg-amber-100 flex' >
                <div className=' bg-white rounded-4xl  h-15 w-15'>
                    <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png " alt=" " />
                </div>
                <span className='mt-4  ml-1 text-xl flex'>{captain.fullName.firstName} {captain.fullName.lastName}</span>
                <div className='flex flex-col'>
                    <span className='mt-2 ml-10'>&#8377; 302.00 </span>
                    <span className='text-gray-400 ml-12'>Earned</span>
                </div>
            </div>
            <div className=' h-41 pt-4 pl-2 rounded-xl'>
                <div className='bg-gray-100 h-30 h-[100%]vh w-70 mb-4 px-2| gap-4 rounded-xl flex justify-between'>
                    <div className='pt-3 pl-1 ml-2'>
                        <span> <i className="ml-2 font-lg text-4xl  ri-timer-2-line"></i></span>
                        <h3 className='ml-3'>10.5</h3>
                        <p className='font-semibold'>Hrs Online</p>
                    </div>
                    <div className='pt-3 pl-1 '>
                        <span> <i className="ml-2 font-lg text-4xl  ri-timer-2-line"></i></span>
                        <h3 className='ml-3'>10.5</h3>
                        <p className='font-semibold'>Hrs Today</p>
                    </div>
                    <div className='pt-3 pl-1 mr-5 px-1'>
                        <span> <i className="ml-2 font-lg text-4xl  ri-star-fill"></i></span>
                        <h3 className='ml-4'>4.8</h3>
                        <p className='font-semibold'>Rating</p>
                    </div>
                </div>
            </div>

        </div>
    )
}


