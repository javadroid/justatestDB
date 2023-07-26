import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout;
  if (getLayout) {
    return getLayout(
      <SessionProvider session={session}>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </SessionProvider>
    );
  } else {
    return (
      <SessionProvider session={session}>
        <Layout>
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    );
  }
}

export default (App)