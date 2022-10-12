import React from "react";
import Search from "../components/Search";
import Tabs from "../components/Tabs";
import "../styles/layout.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="search-component">
        <Search />
      </div>
      <div className="tabs-component">
        <Tabs />
      </div>
      <main className="main-app">{children}</main>
    </div>
  );
}
