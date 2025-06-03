import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex justify-center pt-20">{children}</div>;
};

export default Layout;
