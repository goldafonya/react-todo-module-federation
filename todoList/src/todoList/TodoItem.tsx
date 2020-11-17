import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToDo } from "../models/ToDo";

interface IToDoItemProps {
    item: ToDo;
    updateHandler: (id: string, value: string) => void;
    deleteHandler: (id: string) => void;
    index: number;
}

export const ToDoItem: React.FC<IToDoItemProps> = React.memo(({
    item,
    updateHandler,
    deleteHandler,
    index
}) => {

    return (
        <ListItem>
            <div style={{ marginRight: "4px" }}>{index + 1}</div>
            <TextField
                id={item.id}
                value={item.text}
                onChange={(e) => updateHandler(item.id, e.target.value)}
                disabled={true}
            />
            <IconButton
                aria-label="delete"
                color="secondary"
                size="small"
                onClick={() => deleteHandler(item.id)}
            >
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
});