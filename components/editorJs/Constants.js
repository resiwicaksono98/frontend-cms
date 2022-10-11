import Header from '@editorjs/header'
import Checklist from '@editorjs/checklist'
import List from '@editorjs/list'
import SimpleImage from '@editorjs/simple-image'

const Constants = {
	header: {
		class: Header,
		levels: [2, 3, 4],
		defaultLevel: 3,
	},
	checklist: {
		class: Checklist,
		inlineToolbar: true
	},
	list: {
		class: List,
		inlineToolbar: true,
		config: {
			defaultStyle: 'unordered'
		}
	},
	image: SimpleImage
}

export default Constants

