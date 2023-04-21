import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </Sidebar>
  )
}
