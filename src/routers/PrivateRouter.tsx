import React from "react";
import { Route } from "react-router-dom";

export const PrivateRouter: React.FC<IPrivateRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
}) => {
  const Header = Component.Header ?? <></>;
  const Footer = Component.Footer ?? <></>;

  return (
    <>
      <Route
        exact={exact}
        path={path}
        render={(props: any) => {
          return (
            <Layout header={Header} footer={Footer}>
              <Component {...props} />
            </Layout>
          );
        }}
      />
    </>
  );
};
