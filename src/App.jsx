import React from "react";
import Header from "./components/header";
import MainBody from "./components/mainBody";

function App() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="h-[calc(100vh-150px)]">
        <MainBody />
      </div>
    </main>
  );
}

export default App;
