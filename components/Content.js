import Link from "next/link"
import { setUtcTime } from "../utils/formatMoment"

const Content = ({ articles }) => {
	return (
		<div>
			{articles.map((article, index) => (
				<Link href={'/'} key={index} >
					<div className='text-white mb-4 pb-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-xl shadow-lg  cursor-pointer'>
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
								<div>
									<div className="text-md">{article.user?.firstname} {article.user?.lastname}</div>
									<div className="text-xs text-gray-100">{setUtcTime({data: article.createdAt})}</div>
								</div>
							</div>
							{/* Title article */}
							<h3 className="text-2xl font-semibold text-slate-800l pb-8">
								{article.title}
							</h3>
							{/* Article Tag */}
							<div className="flex flex-row gap-4  flex-wrap">
								{article.tags.map((tag, index) => (
									<button className="text-blue-500 bg-blue-100 rounded-lg p-2" key={index}>{tag.name}</button>
								))}
							</div>
						</div>
					</div>
				</Link>
			))}

		</div>
	)
}

export default Content