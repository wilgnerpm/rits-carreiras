import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DashboardLayout from '../pages/_layouts/dashboard';
import DefaultLayout from '../pages/_layouts/default';
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
const { signed } = true;

 // if (!signed && isPrivate) {
  //  return <Redirect to="/" />;
  //}

  // Se estiver logado e a rota nao for privada, redireciona para o dashboard
 // if (signed && isPrivate) {
   // return <Redirect to="/dashboard" />;
  //}
  const Layout =  isPrivate ? DashboardLayout : DefaultLayout;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>

          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

