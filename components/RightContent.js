import React from 'react'

const RightContent = () => {
	return (
		<div>
			<div className='px-4 mb-8 bg-slate-50 rounded-xl'>
				<div className='py-4 '>
					<img src="/media/right.png" alt="" className='rounded-xl' />
				</div>
			</div>
			<div className='px-4 bg-slate-50 rounded-xl'>
				<div className='py-4 flex flex-col divide-y '>
					{/* Tag */}
					<a href='#' className="text-lg pb-2 font-medium tracking-wider hover:text-blue-400 ">#help</a>
					{/* Content */}
					<a href='#' className='py-4 px-4 text-slate-500 flex flex-col gap-3 hover:bg-slate-200 rounded-xl'>
						<div className='text-sm hover:text-blue-400'>Help with a mongodb api architecture</div>
						<div className='text-sm'>2 Comments</div>
					</a>
					<a href='#' className='py-4 px-4 text-slate-500 flex flex-col gap-3 hover:bg-slate-200'>
						<div className='text-sm hover:text-blue-400'>Mern Stack full stack developer</div>
						<div className='text-sm'>1 Comments</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default RightContent