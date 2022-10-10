import Content from '../components/Content'
import RightContent from '../components/RightContent'
import Sidebar from '../components/Sidebar'

export default function Home() {
	return (
		<div className='py-3 p-8 flex flex-row gap-4 flex-wrap  font-poppins bg-slate-200'>
			<div className='hidden md:block basis-1/8  rounded-xl'>
				<Sidebar />
			</div>
			<div className='flex-1'>
				<Content />
			</div>
			<div className=' basis-1/4 hidden md:block rounded-xl  '>
				<RightContent />
			</div>

		</div>
	)
}

