import React, { useState } from "react";

import Menu from "./components/Menu";
import Layout from "./components/Layout";

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggle");
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Menu menuIsOpen={menuIsOpen} />
      <Layout openMenu={toggleMenu} />
    </div>
  );
};

export default App;
