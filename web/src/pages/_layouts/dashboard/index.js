import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";
import HeaderDashboard from '../../../components/HeaderDashboard'
export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      <HeaderDashboard/>
      <Content>{children}</Content>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};
