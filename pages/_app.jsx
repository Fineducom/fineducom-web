import '@styles/globals.css'
import Layout from '@components/Layout'
import Script from 'next/script'
export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Script
				type="module"
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
			/>
			<Script
				nomodule
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
			/>
		</Layout>
	)
}
