import React, { useState, useEffect } from "react";

import Background from "./components/background.component";
import Header from "./components/header.components";
import AddTask from "./components/add-task.component";
import TaskBox from "./components/task-box.component";
import Footer from "./components/footer.component";
import FilterBoxPhone from "./components/filter-box-phone.component";

const App = () => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTask] = useState([]);
  const [all, setAll] = useState(() => {
    const storedTask = JSON.parse(localStorage.getItem("All_TASK"));
    return storedTask || [];
  });
  const [countActive, setCountActive] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [themeLight, setThemeLight] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem("THEME"));
    return storedTheme === null ? true : storedTheme.theme;
  });

  const handleAll = () => {
    setTask(all);
    setFilter("all");
  };
  const handleActive = () => {
    setTask(all.filter((task) => task.completed === false));
    setFilter("active");
  };
  const handleCompleted = () => {
    setTask(all.filter((task) => task.completed === true));
    setFilter("completed");
  };

  useEffect(() => {
    localStorage.setItem("All_TASK", JSON.stringify(all));
  }, [all]);

  useEffect(() => {
    localStorage.setItem("THEME", JSON.stringify({ theme: themeLight }));
  }, [themeLight]);

  useEffect(() => {
    const activeCount = () => {
      let totalLeft = all.filter((task) => task.completed === false);
      if (totalLeft.length > 1) {
        return `${totalLeft.length} items left`;
      } else if (totalLeft.length === 1) {
        return `${totalLeft.length} item left`;
      } else {
        return "No items left";
      }
    };
    setCountActive(activeCount());
  }, [all]);
  useEffect(() => {
    if (tasks.length) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [tasks]);

  useEffect(() => {
    const body = document.body;
    themeLight
      ? (body.style.backgroundColor = "hsl(0, 0%, 98%)")
      : (body.style.backgroundColor = "hsl(235, 21%, 11%)");
  }, [themeLight]);

  return (
    <div className="App" data-theme={themeLight ? "" : "dark"}>
      <Background themeLight={themeLight} />
      <main className="main">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <AddTask
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTask={setTask}
          all={all}
          setAll={setAll}
        />
        <TaskBox
          tasks={tasks}
          setTask={setTask}
          all={all}
          setAll={setAll}
          filter={filter}
          handleAll={handleAll}
          handleActive={handleActive}
          handleCompleted={handleCompleted}
          countActive={countActive}
          isEmpty={isEmpty}
        />
        <FilterBoxPhone
          handleAll={handleAll}
          handleActive={handleActive}
          handleCompleted={handleCompleted}
          filter={filter}
        />
        <Footer />
      </main>
    </div>
  );
};

export default App;
