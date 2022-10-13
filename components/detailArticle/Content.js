import React from 'react'

const Content = () => {
	let tags = [
		{ name: '#frontend' },
		{ name: '#backend' },
		{ name: '#fullstack' },
		{ name: '#mern' },
	]
	return (
		<div className='bg-white rounded-lg'>
			{/* Cover Image */}
			<div>
				<img src="/media/parallax.jpg" alt="" className='rounded-t-lg' />
			</div>
			<div className="container pb-6">
				{/* Profile and name */}
				<div className='flex flex-row items-center gap-2 py-8  '>
					<img
						src={'/media/parallax.jpg'}
						alt=""
						className="rounded-full w-8 h-8 bg-cover bg-white"
					/>
					<div className='flex flex-col'>
						<div className="text-md">Resi Wicaksono</div>
						<div className="text-xs text-slate-400">Post on 13 Oct 2022 </div>
					</div>
				</div>
				{/* Title article */}
				<h3 className="text-2xl font-semibold text-slate-800l pb-4">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</h3>
				{/* Article Tag */}
				<div className="flex flex-row gap-4 pb-8  flex-wrap">
					{tags.map((tag, index) => (
						<button className="text-blue-500 text-sm bg-blue-100 rounded-lg p-2" key={index}>{tag.name}</button>
					))}
				</div>
				{/* Content */}
				<div>
					<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex neque animi aliquid tempore placeat ullam voluptas! Optio culpa, omnis ipsum voluptas at obcaecati voluptate numquam delectus ducimus asperiores, error laboriosam!</div>
				</div>
			</div>
		</div>
	)
}

export default Content