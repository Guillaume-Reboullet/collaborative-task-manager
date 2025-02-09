import type { AppProps } from 'next/app'
import LogRocket from 'logrocket'

export default function App({ Component, pageProps }: AppProps) {
  LogRocket.init('xgslpy/kanban')

  return <Component {...pageProps} />
}
