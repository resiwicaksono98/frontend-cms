import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, reset } from '../../redux/features/authSlice'

const login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const router = useRouter()
	const { isLoading, message, user, isError, isSuccess } = useSelector((state) => state.auth)

	useEffect(() => {
		if (user || isSuccess || !isError) {
			router.push('/')
		}
	}, [user, isSuccess])


	const Auth = async (e) => {
		e.preventDefault()
		dispatch(LoginUser({ email, password }))
	}


	return (
		<div>
			{isError && <div className="flex items-center justify-center">
				<div className="px-10  rounded-lg  flex-col">
					<div className="flex item-center justify-center">
						<img src={"/media/Logo.png"} alt="" className="w-1/2 my-10 " />
					</div>
					<h3 className="text-center text-lg font-normal phone:text-sm tablet:text-base">
						Welcome to Foxhub &#128516;
					</h3>
					<h3 className="text-center text-2xl font-semibold mb-10 phone:text-xl tablet:text-2xl">
						Please Sign in to your account
					</h3>
					{/* form */}
					<form onSubmit={Auth}>
						<div className="mb-6">
							<label htmlFor="email" className="">Your E-mail</label>
							<input type="text" className="w-full py-2 border  rounded px-3 text-slate-500" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="mb-10">
							<label htmlFor="email" className=""> Password </label>
							<input type="password" className="w-full py-2 border rounded px-3 text-slate-500" value={password}
								placeholder="*****" onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button type='submit' className="w-full bg-blue-600 py-2 text-white rounded shadow-lg" 	>
							{isLoading && 'Loading...'}Sign in &#128073;
						</button>
					</form>

					<div className="mb-6">
						<h3 className="text-center text-sm font-normal my-2">Or</h3>
						<Link href={'/register'}>
							<button className="w-full bg-white py-2 text-blue-600 border border-blue-600 rounded" >
								Register &#127881;
							</button>
						</Link>
					</div>
				</div>
			</div>}
		</div>
	)
}

export default login