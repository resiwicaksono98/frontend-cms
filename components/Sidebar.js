import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
	const { user } = useSelector((state) => state.auth)

	let mains = [
		{ name: 'Home', href: '/', icon: <div>&#127969;</div> },
		{ name: 'Article', href: '/', icon: <div>&#128240;</div> },
		{ name: 'Create Post', href: '/article/create', icon: <div>&#128221;</div> , hidden: 'hidden'},
		{ name: 'My Dashboard', href: '/', icon: <div>&#128187;</div> , hidden:'hidden'},
	]

	let explorer = [
		{ name: 'Popular Post', href: '/', icon: <div>&#128150;</div> },
		{ name: 'Newest Post', href: '/', icon: <div>&#128226;</div> },
		{ name: 'Popular Post', href: '/', icon: <div>&#128185;</div> },
	]
	return (
		<div className='p-2 bg-white rounded-xl  '>
			{/* Main */}
			<div className='grid grid-cols-1  gap-3 text-center text-sm   '>
				{mains.map((main, index) => (
					<Link href={main.href} key={index}>
						<a className={`flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md p-1 ${!user && main.hidden}`}>
							<div className='pr-2 text-xl'>{main.icon}</div>
							<div className='tracking-wide  hover:underline'>{main.name}</div>
						</a>
					</Link>
				))}
			</div>
			{/* Explore */}
			<div className='pt-3 grid grid-cols-1  gap-3 text-center text-sm'>
				<h3 className="text-2xl  font-medium rounded-lg text-center">Explore &#9889;</h3>
				{explorer.map((explore, index) => (
					<Link href={explore.href} key={index}>
						<a className='flex  items-center  hover:bg-blue-100 hover:text-blue-500 rounded-md p-1'>
							<div className='pr-2 text-xl'>{explore.icon}</div>
							<div className='tracking-wide hover:underline'>	{explore.name}</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar