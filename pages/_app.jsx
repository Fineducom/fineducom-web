import '@styles/globals.css'
import Layout from '@components/Layout'
import 'boxicons/css/boxicons.min.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
