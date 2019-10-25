import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";

export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};
