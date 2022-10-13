import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/editorJs/editor'
import { setRequest } from '../../utils/axiosInstance';

const create = (props) => {
	const dispatch = useDispatch
	const router = useRouter()
	const { user, isSuccess, isError } = useSelector((state) => state.auth)

	useEffect(() => {
		if (!user || !isSuccess) {
			router.push('/')
		}
	}, [user, isSuccess])

	const onSaveHandler = async (blogData,) => {
		const toSaveData = {
			blogData
		};
		await setRequest.post('/articles', toSaveData.blogData)
			.then(res => {
				if (res.status === 200) {
					window.alert(res.data.message)
					router.push('/')
				}
			})
			.catch(err => console.log(err))
	};
	return (
		<div>
			{!isError && <div className='py-4'>
				<div className='text-gray-500 container'>/ Create Your Article</div>
				<Editor
					onSave={(editorData) =>
						onSaveHandler(editorData)
					}
				/>
			</div>}
		</div>
	)
}

export default create