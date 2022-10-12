import Router, { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import axios from 'axios'
import NextNProgress from 'nextjs-progressbar';
import NProgress from 'nprogress';

axios.defaults.withCredentials = true;



const MyApp = ({ Component, pageProps }) => {
	const router = useRouter()

	return (
		<Provider store={store}>
			<NextNProgress color='#ffff' />
			{router.pathname === '/auth/register' | router.pathname === '/auth/login' ?
				<Layout criteria={false}>
					<div className='font-poppins bg-slate-200 max-h-full'>
						<Component {...pageProps} />
					</div>
				</Layout>
				: <Layout criteria={true}>
					<div className='font-poppins bg-slate-200 h-full'>
						<Component {...pageProps} />
					</div>

				</Layout>
			}
		</Provider>
	)
}

export default MyApp
