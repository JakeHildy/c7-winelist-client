import React from "react";

import PageHeader from "../layout/pageHeader/PageHeader";

function Page({ children }) {
  return (
    <>
      <PageHeader />
      <div>{children}</div>
    </>
  );
}

export default Page;
