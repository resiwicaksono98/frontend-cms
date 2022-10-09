import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

export default function Home() {
	return (
		<div className='py-3 p-8 flex gap-4 flex-wrap w-max-full font-poppins bg-gray-100 h-screen'>
			<div className='hidden md:block basis-1/7 grow-0  rounded-xl'>
				<Sidebar />
			</div>
			<div className='bg-slate-200 flex-1 w-full flex-grow rounded-xl  shadow-lg '>
				<Content />
			</div>
			<div className='bg-slate-200 basis-1/4 hidden md:block'>right side</div>

		</div>
	)
}

