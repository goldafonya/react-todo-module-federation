import * as React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import "./style.scss";

import TodoCard from "./TodoCard";
import { useToDoList } from "./hooks/useToDoList";
import { ToDo } from "./ToDo";

const useStyles = makeStyles(() => ({
  container: {
    "flex-grow": 1,
    display: "flex",
    "flex-direction": "column"
  },
}));

const App = () => {
  const classes = useStyles();
  const {
    todoList,
    addToDo
  } = useToDoList([new ToDo()]);

  return (
    <Container maxWidth="sm" className={classes.container}>

      <TodoCard
        todo={todoList[0]}
        addToDo={addToDo}
      />
    </Container>
  )
};

export default App;
