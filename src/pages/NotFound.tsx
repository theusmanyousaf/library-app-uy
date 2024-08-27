import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className='md:text-5xl text-3xl flex flex-col h-80 gap-6 md:gap-10 items-center justify-center'>
            <div className="font-bold">404 Page Not Found</div>
            <Link to="/"><div className="bg-blue-600 font-semibold hover:bg-blue-700 py-2 md:py-3 px-4 md:px-6 text-white rounded-md text-base md:text-xl">BACK TO HOME </div></Link>
        </div>
    )
}
