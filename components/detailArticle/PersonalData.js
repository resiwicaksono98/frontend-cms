import Link from 'next/link'
import React from 'react'

const PersonalData = () => {
	let tags = [
		{ name: '#frontend' },
		{ name: '#backend' },
		{ name: '#fullstack' },
		{ name: '#mern' },
	]
	return (
		<div>
			{/* Profile */}
			<div className="bg-white p-6 mb-4 rounded-lg">
				{/* Profile Picture And Name */}
				<div className='flex items-center gap-4 pb-4'>
					<img src="/media/parallax.jpg" alt="" className='w-14 h-14 rounded-full' />
					<div className='text-lg  font-medium'>Resi Wicaksono</div>
				</div>
				{/* Button Follow */}
				<button className='bg-blue-600 hover:bg-blue-800 py-2 px-3 w-full rounded-lg text-white tracking-wide mb-4'>Follow</button>
				{/* Type Work*/}
				<div className='text-base text-slate-500 mb-4'>Fullstack Web Developer.</div>
				{/* Location */}
				<div className="flex flex-col gap-1 text-slate-500 text-sm tracking-wider mb-4">
					<div className="font-semibold ">LOCATION</div>
					<div>Indonesia</div>
				</div>
				{/* Current Work */}
				<div className="flex flex-col gap-1 text-slate-500 text-sm tracking-wider mb-4">
					<div className="font-semibold ">WORK</div>
					<div>Fullstack Web Developer At Gojek</div>
				</div>
				{/* Current Work */}
				<div className="flex flex-col gap-1 text-slate-500 text-sm tracking-wider mb-4">
					<div className="font-semibold ">JOINED</div>
					<div>8 April 2020</div>
				</div>
			</div>
			{/* More from */}
			<div className='bg-white  rounded-lg divide-y '>
				{/* Link to profile */}
				<div className='flex flex-wrap gap-1 text-lg font-semibold p-4'>
					<div>More from</div>
					<Link href={'/'}>
						<div className='text-blue-600 cursor-pointer hover:underline'>Resi Wicaksono</div>
					</Link>
				</div>
				{/* fetch 3 article profile */}
				<div className="flex flex-wrap gap-2 text-base p-4 hover:bg-blue-50 hover:text-blue-500 cursor-pointer hover:rounded-lg">
					<div>How to become fullstack web developer</div>
					{tags.map((tag, index) => (
						<div className="text-slate-500 flex flex-wrap text-sm  rounded-lg " key={index}>{tag.name}</div>
					))}
				</div>
				<div className="flex flex-wrap gap-2 text-base p-4 hover:bg-blue-50 hover:text-blue-500 cursor-pointer hover:rounded-lg">
					<div>How to become fullstack web developer</div>
					{tags.map((tag, index) => (
						<div className="text-slate-500 flex flex-wrap text-sm  rounded-lg " key={index}>{tag.name}</div>
					))}
				</div>
				<div className="flex flex-wrap gap-2 text-base p-4 hover:bg-blue-50 hover:text-blue-500 cursor-pointer hover:rounded-lg">
					<div>How to become fullstack web developer</div>
					{tags.map((tag, index) => (
						<div className="text-slate-500 flex flex-wrap text-sm  rounded-lg " key={index}>{tag.name}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PersonalData