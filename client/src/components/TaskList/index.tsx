import React from "react";

import TaskCard from "components/TaskCard";

const TaskList: React.FC = () => {
  return (
    <section className="flex flex-col overflow-x-hidden overflow-y-auto h-taskList rounded">
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
      <TaskCard title="Ini adalah sebuah Todo" />
    </section>
  );
};

export default TaskList;
