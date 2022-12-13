import React, { useState } from "react";

const initialState = [];

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <AppContext.Provider value={{tasks, setTasks}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
