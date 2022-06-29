import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import withRedux from "next-redux-wrapper";
import store from "./../redux/store";
import {Provider} from "react-redux"

type ReduxStore = { store: any }

function MyApp({ Component, pageProps, store }: AppProps & ReduxStore) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider enableSystem={true} attribute="class">
          {/* <Provider store={store}> */}
            <Component {...pageProps} />
          {/* </Provider> */}
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default withRedux(store, {debug: false})(MyApp)
