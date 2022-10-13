import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { setRequest } from '../../utils/axiosInstance';
import SelectTags from './SelectTags';
const EditorJs = dynamic(() => import('react-editor-js'), { ssr: false })

let editorInstance;
const Editor = (props) => {

	const [title, setTitle] = useState('')
	const [tags, setTags] = useState([])
	const [editorTools, setEditorTools] = useState();

	const onSaveHandler = async (editorInstance) => {
		try {
			const blogData = await editorInstance.save();
			if (!title || title === '')
				throw new Error('Title cannot be empty. Please enter title');
			if (!tags || tags === [])
				throw new Error('Tags cannot be empty. Please enter tags');
			const customData = { ...blogData, title, tags }
			props.onSave(customData);
		} catch (err) {
			console.log(err);
		}
	};

	let editorComponent;
	if (!editorTools) editorComponent = 'Loading...';
	else {
		editorComponent = (
			<EditorJs instanceRef={(instance) => (editorInstance = instance)}
				tools={editorTools}
				placeholder={`Let's write an awesome blog!`}

			/>
		)
	}

	const handleTag = (tags) => {
		let newTag = []
		tags.map(tag => {
			if (tag.value.charAt(0) !== '#') {
				newTag.push(`#${tag.value}`)
			} else {
				newTag.push(tag.value)
			}
		})
		setTags(newTag)
	}

	useEffect(() => {
		const importConstants = async () => {
			const tools = (await import('./Constants')).default;
			setEditorTools(tools)
		}
		importConstants()
	}, [])

	return (
		<div className='container'>
			{/* Tags */}
			<div className='my-6 flex flex-col gap-2'>
				<label htmlFor="tags" className='text-xl font-medium tracking-wider '>Tags</label>
				<SelectTags handleTag={handleTag} />
			</div>
			{/* TItle */}
			<div className='my-6 flex flex-col gap-2'>
				<label htmlFor="title" className='text-xl font-medium tracking-wider '>Title Your Article</label>
				<input className='rounded p-2 border border-blue-500' placeholder='Your article title' value={title} onChange={(event) => setTitle(event.target.value)} />
			</div>
			{/* Content */}
			<label htmlFor="title" className='text-xl font-medium tracking-wider '>Your Content</label>
			<div className='bg-white rounded-xl border border-blue-500 mb-6'>
				{editorComponent}
			</div>
			{/* Button post */}
			<button className='bg-blue-500 text-lg flex flex-col py-2 px-3 rounded-xl hover:bg-blue-600 text-white' onClick={() => onSaveHandler(editorInstance)} >
				Publish
			</button>
		</div>
	)
}


export default Editor


export const getStaticProps = async () => {
	const { data } = await setRequest.get('/tags')

	return {
		props: {
			tags: data
		}
	}
}