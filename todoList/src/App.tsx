import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { navigate, Router } from "@reach/router";
import * as React from "react";
import { ROUTES } from "./constants/ROUTES";
import { useToDoList } from "./hooks/useToDoList";
import "./style.scss";
import { TodoCardConnector } from "./todoCard/TodoCardConnector";
import { TodoList } from "./todoList/TodoList";

const useStyles = makeStyles(() => ({
  container: {
    "flex-grow": 1,
    display: "flex",
    "flex-direction": "column"
  },
}));

const App = () => {
  const [value, setValue] = React.useState("");
  const {
    todoList,
    addToDo,
    deleteToDo,
    updateToDoById
  } = useToDoList();

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Container maxWidth="sm" className={classes.container}>
        <Router>
          <TodoList
            path={ROUTES["ROOT"]}
            todoList={todoList}
            updateToDoById={updateToDoById}
            deleteToDo={deleteToDo}
            />
          <TodoCardConnector
            path={ROUTES["TODO-CARD"]}
            addToDo={addToDo}
            todoList={todoList}
          />
          <TodoList
            path={ROUTES["ANY"]}
            todoList={todoList}
            updateToDoById={updateToDoById}
            deleteToDo={deleteToDo}
          />
        </Router>
      </Container>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          onClick={() => navigate(ROUTES.ROOT)}
          label="List"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate(ROUTES["TODO-CARD"])}
          label="Card"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Container>
  )
};

export default App;
