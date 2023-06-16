import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret:
  //     "sk_test_51NH09ZLQDx3I44NE7VkeI6sBYxnbtbHPCd0is4LgXAZnIiIJtfAs7pUQFNmtgxx3Ihqxkq8pCq0GGEwuaZyAri0z00aTzE7Yix",
  // };
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
