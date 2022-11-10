import '../globals.css'
import { Inter } from '@next/font/google'

const font = Inter();

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html { font-family: ${font.style.fontFamily}; }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
