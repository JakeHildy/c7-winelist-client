import React from "react";
import { Heading } from "@commerce7/admin-ui";

import { PageHeaderStyles } from "./styles";
import Logo from "./components/Logo";

function PageHeader() {
  return (
    <PageHeaderStyles>
      <Logo />
      <Heading level={1}>C7 Wine List</Heading>
    </PageHeaderStyles>
  );
}

export default PageHeader;
