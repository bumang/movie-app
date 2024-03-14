import { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { drukTrail } from '@/styles/fonts/DrukTrial';

import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const fiveMinutesInMs = 5 * 60 * 1000;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: false,
      staleTime: fiveMinutesInMs,
    },
  },
});

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${drukTrail.variable} no-scrollbar h-full w-full`}>
        {getLayout(
          <>
            <Component {...pageProps} />
            <Toaster position="top-center" />
            <ReactQueryDevtools />
          </>
        )}
      </main>
    </QueryClientProvider>
  );
};

export default App;
