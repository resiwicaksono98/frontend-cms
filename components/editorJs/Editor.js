import dynamic from 'next/dynamic'
import { useEffect, useId, useState } from 'react'
const EditorJs = dynamic(() => import('react-editor-js'), { ssr: false })

const Editor = (props) => {
	let editorInstance;
	const [editorTools, setEditorTools] = useState();

	const onSaveHandler = async (editorInstance) => {
		try {
			const blogData = await editorInstance.save();
		
			props.onSave(blogData);
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

	useEffect(() => {
		const importConstants = async () => {
			const tools = (await import('./Constants')).default;
			setEditorTools(tools)
		}
		importConstants()
	}, [])

	return (
		<div>
			<div className='bg-slate-100'>
				{editorComponent}
			</div>
			<button
				className='py-2 px-3 my-8 rounded-xl text-white bg-blue-500'
				onClick={() => onSaveHandler(editorInstance)}
			>
				Publish
			</button>
		</div>
	)
}

export default Editor