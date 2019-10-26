import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";
import HeaderDashboard from '../../../components/HeaderDashboard'
import Footer from '../../../components/Footer'
export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      <HeaderDashboard/>
      <Content>{children}</Content>
      <Footer/>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};
