import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='sticky top-0 container max-w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-2 text-white  text-lg antialiased font-medium tracking-wide font-sans '>
			<div className='md:flex justify-between items-center'>
				<div className='md:grid grid-cols-4 gap-6'>
					{/* Logo */}
					<div className='bg-white p-2 rounded-xl flex justify-center items-center'>
						<img src={'/media/logo.png'} alt="" className='h-7 ' />
					</div>
					{/* Search */}
					<div className="text-black flex col-span-3 flex-row basis-1/3 my-4 md:my-0" id="search">
						<input
							type="text"
							placeholder='Search'
							className="w-full px-2 bg-slate-100 outline-none  rounded-l-lg"
						/>
						<button className="px-2 py-2 bg-blue-500 rounded-r-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 text-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Auth */}
				<div className='grid grid-cols-3 gap-4'>
					<Link href={'/login'} >
						<button className=' rounded-xl  antialiased hover:bg-white hover:text-black'>Log in</button>
					</Link>
					<Link href={'/login'}>
						<button className=' rounded-xl px-2 py-1 border col-span-2 border-white antialiased hover:bg-white hover:text-black'>Create Account</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar