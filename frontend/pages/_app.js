import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
}

export async function getStaticProps({ Component, ctx }) {
  let pageProps = {};
  if (Component.getStaticProps) {
    pageProps = await Component.getStaticProps(ctx);
  }
  pageProps.query = ctx.query;
  return { props: { pageProps }, revalidate: 20 };
}

export async function getStaticPaths() {
  return {
    path: [],
    fallback: true,
  };
}

export default withData(MyApp);
