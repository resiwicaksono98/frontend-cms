const Content = () => {

	let tags = [
		{ name: '#frontend' },
		{ name: '#backend' },
		{ name: '#fullstack' },
		{ name: '#mern' },
	]
	return (
		<div>
			<div className='text-white mb-4 pb-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-xl shadow-lg '>
				{/* Cover */}
				<div >
					<img src="/media/parallax.jpg" alt="" className='rounded-t-xl rounded-b-lg object-cover h-full w-full' />
				</div>
				<div className="container ">
					{/* Profile and name */}
					<div className='flex flex-row items-center gap-2 py-8  '>
						<img
							src={'/media/parallax.jpg'}
							alt=""
							className="rounded-full w-8 h-8 bg-cover bg-white"
						/>
						<p className="text-md">Resi Wicaksono</p>
					</div>
					{/* Title article */}
					<h3 className="text-2xl font-semibold text-slate-800l pb-8">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					</h3>
					{/* Article Tag */}
					<div className="flex flex-row gap-4  flex-wrap">
						{tags.map((tag, index) => (
							<button className="text-blue-500 bg-blue-100 rounded-lg p-2" key={index}>{tag.name}</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content