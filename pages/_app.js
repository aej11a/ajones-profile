import '../styles/main.css'
import { AnimateSharedLayout } from "framer-motion"

export default function MyApp({ Component, pageProps }) {
    return (
        <AnimateSharedLayout>
            <Component {...pageProps} />
        </AnimateSharedLayout>
    )
}