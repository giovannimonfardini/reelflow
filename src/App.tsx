import WebServiceRedirect from './components/auth/WebServiceRedirect'
import Home from './pages/Home'
import { webServiceAppUrl, webServiceLoginUrl } from './lib/webService'

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/login') {
    return <WebServiceRedirect to={webServiceLoginUrl} />
  }

  if (pathname === '/app') {
    return <WebServiceRedirect to={webServiceAppUrl} />
  }

  return <Home />
}
