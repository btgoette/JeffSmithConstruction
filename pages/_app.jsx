import React from "react";
import App from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import "bootstrap/dist/css/bootstrap.min.css";
// Custom Components
import PageLayout from "components/PageLayout";

// Custom Styles
import "scss/app.scss";

export default class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <SSRProvider>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </SSRProvider>
      </React.Fragment>
    );
  }
}