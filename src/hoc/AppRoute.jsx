import React from "react";
import { Route } from "react-router-dom";
//useMediaQuery does not work as mentioned in docs as a SSR issue
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import withWidth from "@material-ui/core/withWidth";

const AppRoute = ({
  component: Component,
  layout: Layout,
  mobileLayout: MobileLayout,
  width,
  ...rest
}) => {
  Layout = width === "xs" ? MobileLayout : Layout;
  // Layout = width === "xs" ? Layout : MobileLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export default withWidth()(AppRoute);
