import { AiFillDollarCircle } from 'react-icons/ai';
import logo from '../assets/logo.png';
import { IoMenu } from 'react-icons/io5';

export default function Nav({ coin }: { coin: number }) {
  return (
    <div className='bg-white'>
        <nav className='flex justify-between items-center p-2 text-md text-black max-w-6xl mx-auto'>
            <img src={logo} alt="Logo" />
            <ul className='md:flex space-x-4 hidden'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <div className="md:flex items-center hidden">
                <button className='border border-gray-200 px-4 py-3 hover:bg-gray-100 rounded-xl shadow-sm flex items-center gap-1 p-2'>
                    {coin} Coin <AiFillDollarCircle className='text-amber-500 size-6' />
                </button>
            </div>
            <span className="block md:hidden"><IoMenu className="text-2xl text-black" /></span>
        </nav>
    </div>
  )
}