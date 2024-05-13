import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainLayoutProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header></Header>
      <div style={{ display: "flex", width: "96vw", gap: "4vw" }}>
        <Sidebar></Sidebar>
        <main>{children}</main>
      </div>
    </div>
  );
};
