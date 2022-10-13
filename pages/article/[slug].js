import React from 'react'
import Content from '../../components/detailArticle/Content'
import Leftside from '../../components/detailArticle/Leftside'
import PersonalData from '../../components/detailArticle/PersonalData'


const ShowArticle = () => {
	return (
		<div className='p-4'>
			<div className='flex flex-row gap-4 py-4'>
				<div className='basis-20 hidden md:block'>
					<Leftside />
				</div>
				<div className='flex-1 '>
					<Content />
				</div>
				<div className='basis-1/4  hidden lg:block rounded-lg'>
					<PersonalData />
				</div>
			</div>
		</div>
	)
}

export default ShowArticle