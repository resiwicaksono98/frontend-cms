import React, { useEffect, useState } from 'react'
import { components } from 'react-select'
import Creatable from 'react-select/creatable'
import { setRequest } from '../../utils/axiosInstance';

const Menu = (props) => {
	const optionSelectedLength = props.getValue().length || 0;
	return (
		<components.Menu {...props}>
			{optionSelectedLength < 4 ? (
				props.children
			) : (
				<div style={{ margin: 15 }}>Maximum 4 Tag</div>
			)}
		</components.Menu>
	);
}


export default function SelectTags(props) {
	const [tags, setTags] = useState([])
	useEffect(() => {
		const getTag = async () => {
			const { data } = await setRequest('/tags')
			setTags(data);
		}
		getTag()
	}, [])
	const listTags = tags.map(tag => (
		{ label: tag.name, value: tag.name }
	))


	const isValidNewOption = (inputValue, selectValue) => inputValue.length > 0 && selectValue.length < 4;
	return (
		<div className="z-20">
			<Creatable
				components={{ Menu }}
				placeholder="Add up to 4 tags..."
				isMulti
				isValidNewOption={isValidNewOption}
				options={listTags}
				onChange={(e) => props.handleTag(e)}
			/>
		</div>
	);
}



