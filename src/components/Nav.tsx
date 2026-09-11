import { AiFillDollarCircle } from 'react-icons/ai';
import logo from '../assets/logo.png';
import { IoMenu } from 'react-icons/io5';

export default function Nav({ coin }: { coin: number }) {
  return (
    <div className='bg-white'>
        <nav className='flex justify-between items-center p-2 text-md text-black max-w-6xl mx-auto'>
            <img src={logo} alt="Logo" />
            <ul className='md:flex ml-auto text-[16px] text-[#6b6a6a] font-medium space-x-4 hidden [&>li]:cursor-pointer'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <div className="md:flex items-center hidden ml-6">
                <button className='border border-gray-100 px-4 py-3 rounded-xl shadow-xs flex items-center gap-1 p-2'>
                    {coin} Coin <AiFillDollarCircle className='text-amber-500 size-6' />
                </button>
            </div>
            <span className="block md:hidden"><IoMenu className="text-2xl text-black" /></span>
        </nav>
    </div>
  )
}