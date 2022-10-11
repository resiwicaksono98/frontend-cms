import React from 'react'
import Editor from '../../components/editorJs/editor'

const create = (props) => {
	const onSaveHandler = async (blogData) => {

		const toSaveData = {
			blogData,
		};

		console.log(toSaveData.blogData?.blocks);
		//make your ajax call to send the data to your server and save it in a database
	};
	return (
		<div className='container py-4'>
			<div className='text-gray-500 pb-4'>Create New Post</div>
			<div className='p-4 bg-white rounded-lg '>
				<Editor
					onSave={(editorData, title, description) =>
						onSaveHandler(editorData, title, description)
					}
				/>
			</div>
		</div>
	)
}

export default create