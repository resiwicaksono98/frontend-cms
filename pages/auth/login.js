import Link from 'next/link'
import React from 'react'


const login = () => {
	return (
		<div className="flex mt-10 min-h-full items-center justify-center h-screen">
			<div className="px-10 py-10  rounded-lg  flex-col">
				<div className="flex item-center justify-center">
					<img src={"/media/Logo.png"} alt="" className="w-1/2 my-10 " />
				</div>
				<h3 className="text-center text-lg font-normal phone:text-sm tablet:text-base">
					Welcome to Foxhub &#128516;
				</h3>
				<h3 className="text-center text-2xl font-semibold mb-10 phone:text-xl tablet:text-2xl">
					Please Sign in to your account
				</h3>
				{/* {error === '400' && ( */}
					<h3 className="text-center phone:text-xl tablet:text-2xl mb-10 text-red-500">
						There is an error, please try again &#128591;
					</h3>
				{/* )} */}

				{/* {error === 'auth' && ( */}
					<h3 className="text-center phone:text-xl tablet:text-2xl mb-10 text-red-500">
						We cant find your account, please try again &#128591;
					</h3>
				{/* )} */}
				{/* <form className=""> */}
				<div className="mb-6">
					<label htmlFor="email" className="">
						Your E-mail
					</label>
					<input
						type="text"
						className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
						// onChange={(e) => setData({ ...data, email: e.target.value })}
					/>
				</div>
				<div className="mb-10">
					<label htmlFor="email" className="">
						Password
					</label>
					<input
						type="password"
						className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
						// onChange={(e) => setData({ ...data, password: e.target.value })}
					/>
				</div>
				<div className="mb-6 ">
					<button
						className="w-full bg-blue-600 py-2 text-white rounded shadow-lg"
						// onClick={LoginHandle}
					>
						Sign in &#128073;
					</button>
					<h3 className="text-center text-sm font-normal my-2">Or</h3>
					<Link href={'/register'}>
						<button className="w-full bg-white py-2 text-blue-600 border border-blue-600 rounded">
							Register &#127881;
						</button>
					</Link>
				</div>

				{/* </form> */}
			</div>
		</div>
	)
}

export default login