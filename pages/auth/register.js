import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const register = () => {
	const router = useRouter()
	const { isLoading, message, user, isSuccess, isError } = useSelector((state) => state.auth)

	useEffect(() => {
		if (user || isSuccess) {
			router.push('/')
		}
	}, [user, isSuccess])

	return (
		<div>
			{isError && <div className="flex items-center justify-center">
				<div className=" px-10 flex-col">
					<div className="flex item-center justify-center">
						<img src={'/media/Logo.png'} alt="" className="w-1/2 my-10 " />
					</div>
					<h3 className="text-center text-lg font-normal phone:text-sm tablet:text-base">Welcome to Foxhub &#128516;</h3>
					<h3 className="text-center text-2xl font-semibold mb-10 phone:text-xl tablet:text-2xl">
						Register your account
					</h3>
					{/* <form> */}
					<div className="mb-6">
						<label className="">
							E-mail
						</label>
						<input
							type="text"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
							name="email"
						// onChange={(e) => setData({ ...data, email: e.target.value })}
						/>
					</div>

					<div className="mb-6">
						<label className="">
							Username
						</label>
						<input
							type="text"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
							name="username"
						// onChange={(e) =>
						// 	setData({ ...data, username: e.target.value })
						// }
						/>
					</div>

					<div className="mb-6">
						<label className="">
							Password
						</label>
						<input
							type="password"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
							name="password"
						// onChange={(e) =>
						// 	setData({ ...data, password: e.target.value })
						// }
						/>
					</div>

					<div className="mb-10">
						<div className="flex w-full phone:flex-col tablet:flex-row gap-10">
							<div>
								<label className="">
									First Name
								</label>
								<input
									type="text"
									className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
									name="firstname"
								// onChange={(e) =>
								// 	setData({ ...data, firstname: e.target.value })
								// }
								/>
							</div>
							<div>
								<label className="">
									Last Name
								</label>
								<label className="text-xs text-red-500"> (Optional)</label>
								<input
									type="text"
									className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
									name="lastname"
								// onChange={(e) =>
								// 	setData({ ...data, lastname: e.target.value })
								// }
								/>
							</div>
						</div>
					</div>
					<div className="mb-6 ">
						<button
							// onClick={RegisterHandle}
							className="w-full bg-blue-600 py-2 text-white rounded shadow-lg"
						>
							Register &#128073;
						</button>
						<h3 className="text-center text-sm font-normal my-2">Or</h3>
						<Link href={'/login'}>
							<button
								className="w-full bg-white py-2 text-blue-600 border border-blue-600 rounded"

							>
								Sign in &#127881;
							</button>
						</Link>
					</div>
					{/* </form> */}
				</div>
			</div>}
		</div>
	)
}

export default register