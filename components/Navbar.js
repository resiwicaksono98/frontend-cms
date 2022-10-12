import React from 'react'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import { Popover, Transition } from '@headlessui/react'
import { LogOut, reset } from '../redux/features/authSlice'
import { useRouter } from 'next/router'

const Navbar = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const { user, isSuccess, isLoading } = useSelector((state) => state.auth)

	const logout = () => {
		dispatch(LogOut())
		dispatch(reset())
		router.reload()
	}

	return (
		<div>
			{<div className='fixed z-10 top-0 container max-w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-2 text-white  text-lg antialiased font-medium tracking-wide font-sans '>
				<div className='md:flex justify-between items-center'>
					<div className='md:grid grid-cols-4 gap-6'>
						{/* Logo */}
						<Link href={'/'}>
							<div className='bg-white p-2 rounded-xl flex justify-center items-center'>
								<img src={'/media/logo.png'} alt="" className='h-7 ' />
							</div>
						</Link>
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
					{user ?
						<Popover>
							{({ open }) => (
								<>
									<Popover.Button className={'outline-none'}>
										<div className='flex gap-2 bg-white py-1 px-2 justify-center items-center text-black rounded-xl shadow-lg hover:bg-indigo-500  hover:text-white cursor-pointer hover:underline'>
											<p className="text-md">Wakwak</p>
											<img src={'/media/parallax.jpg'} alt=""
												className="rounded-full w-8 h-8 bg-cover bg-white"
											/>
										</div>
									</Popover.Button>
									<Transition enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1">

										<Popover.Panel className='absolute right-0 bg-white flex flex-col gap-3 py-2 px-2 my-1 rounded-lg cursor-pointer shadow-2xl hover:bg-white text-base  text-slate-500 divide-y tracking-wider'>
											<div className='px-2 hover:underline hover:bg-blue-200 hover:text-blue-500 py-2 rounded-md'>
												<div className='font-semibold'>Resi Wicaksono</div>
												<div className='text-xs'>resiwicaksono@gmail.com</div>
											</div>
											<div className='flex flex-col '>
												<Link href={'/profile'}>
													<div className="hover:underline px-2 rounded-md hover:bg-blue-200 hover:text-blue-500 py-1 my-1 ">Profile</div>
												</Link>
												<Link href={'/profile'}>
													<div className="hover:underline px-2 rounded-md hover:bg-blue-200 hover:text-blue-500 py-1">Dashboard</div>
												</Link>
											</div>
											<button onClick={logout} className='hover:underline hover:bg-blue-200 hover:text-blue-500 px-2 py-2 rounded-md '>
												Sign Out
											</button>

										</Popover.Panel>

									</Transition>

								</>
							)}
						</Popover>

						: <div className='flex gap-2 py-1 px-2 justify-center items-center text-white   cursor-pointer'>
							<Link href={'/login'} >
								<button className=' rounded-xl py-2 px-3 antialiased hover:bg-white hover:text-black'>Log in</button>
							</Link>
							<Link href={'/register'}>
								<button className=' rounded-xl px-2 py-1 border col-span-2 border-white antialiased hover:bg-white hover:text-black'>Create Account</button>
							</Link>

						</div>}

				</div>
			</div>}
		</div>
	)
}

export default Navbar