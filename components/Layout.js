import Navbar from "./Navbar"

const Layout = ({ children, criteria }) => {
	return (
		<>
			{criteria ?
				<div>
					<Navbar />
					<main>{children}</main>
				</div> :
				<div>
					<main>{children}</main>
				</div>
			}
		</>
	)
}

export default Layout