import React from "react";

import Header from "components/Header";
import TaskList from "components/TaskList";
import PlusButton from "components/PlusButton";

const App: React.FC = () => {
  return (
    <main className="container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen">
      <Header />
      <TaskList />
      <PlusButton />
    </main>
  );
};

export default App;
