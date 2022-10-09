import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()
	return (
		<div>
			{router.pathname === '/auth/register' | router.pathname === '/auth/login' ?
				<Layout criteria={false}>
					<div className=''>
						<Component {...pageProps} />
					</div>
				</Layout>
				: <Layout criteria={true}>
					<Component {...pageProps} />

				</Layout>
			}
		</div>
	)
}

export default MyApp
