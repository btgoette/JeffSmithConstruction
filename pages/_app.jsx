import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import "bootstrap/dist/css/bootstrap.min.css";
// Custom Components
import PageLayout from "components/PageLayout";

// Custom Styles
import "scss/app.scss";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SSRProvider>
  );
}
