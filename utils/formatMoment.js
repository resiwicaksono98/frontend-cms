import moment from 'moment'

export const setUtcTime = ({data}) => {
	return moment(data).utc().format("DD MMMM YYYY HH:mm")
}