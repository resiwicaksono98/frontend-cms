import Navbar from "./Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router"
import { getMe } from "../redux/features/authSlice"
import { useEffect } from "react"

const Layout = ({ children, criteria }) => {
	const dispatch = useDispatch()
	const { isLoading, isError } = useSelector((state) => state.auth)

	useEffect(() => {
		dispatch(getMe())
	}, [dispatch])


	return (
		<>
			{criteria ?
				<div>
					<Navbar />
					<main>{!isLoading && children}</main>
				</div> :
				<div>
					{ children}
				</div>
			}
		</>
	)
}

export default Layout