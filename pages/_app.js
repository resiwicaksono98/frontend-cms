import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()
	return (
		<div>
			{router.pathname === '/auth/register' | router.pathname === '/auth/login' ?
				<Layout criteria={false}>
					<div className='font-poppins bg-slate-200 min-h-screen '>
						<Component {...pageProps} />
					</div>
				</Layout>
				: <Layout criteria={true}>
					<div className='font-poppins bg-slate-200 min-h-screen'>
						<Component {...pageProps} />
					</div>

				</Layout>
			}
		</div>
	)
}

export default MyApp
