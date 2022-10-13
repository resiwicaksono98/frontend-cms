import Content from '../components/Content'
import RightContent from '../components/RightContent'
import Sidebar from '../components/Sidebar'
import { setRequest } from '../utils/axiosInstance'

export default function Home({articles}) {
	return (
		<div className='py-3 p-8 flex flex-row gap-4 flex-wrap  font-poppins '>
			<div className='hidden md:block basis-1/8  rounded-xl'>
				<Sidebar />
			</div>
			<div className='flex-1'>
				<Content articles={articles} />
			</div>
			<div className=' basis-1/4 hidden md:block rounded-xl  '>
				<RightContent />
			</div>

		</div>
	)
}

export const getStaticProps = async () => {
	const { data } = await setRequest.get('/articles')

	return {
		props: {
			articles: data.data
		}
	}
}

