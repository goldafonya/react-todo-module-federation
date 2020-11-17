import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { ToDo } from "../models/ToDo";
import { ToDoItem } from "./TodoItem";

const useStyles = makeStyles(() => ({
    paper: {
        padding: "14px",
    },
}));


interface IToDoListProps extends RouteComponentProps {
    todoList: ToDo[];
    updateToDoById: (id: string, value: string) => void;
    deleteToDo: (id: string) => void;
}

export const TodoList: React.FC<IToDoListProps> = ({
    todoList,
    updateToDoById,
    deleteToDo

}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
                ToDo List
            </Typography>
            <List>
                {todoList.map((l, index) => (
                    <ToDoItem
                        key={l.id}
                        index={index}
                        item={l}
                        updateHandler={updateToDoById}
                        deleteHandler={deleteToDo}
                    />
                ))}
            </List>
        </Paper>
    )
};