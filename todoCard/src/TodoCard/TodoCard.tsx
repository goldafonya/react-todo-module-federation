import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { ToDo } from "../ToDo";

const useStyles = makeStyles(() => ({
    paper: {
        padding: "14px",
    },
}));

interface IButtonProps {
    todo: ToDo;
    addToDo: (text: string) => void;
}

const TodoCard: React.FC<IButtonProps> = ({ addToDo }) => {
    const [text, setText] = React.useState("");
    const [error, setError] = React.useState("");
    const createTodo = React.useCallback((value: string) => {
        if (typeof value === "string" && value.length > 1) {
            addToDo(value);
            setText("");
            setError("")
        } else {
            setError("Введите значение")
        }
    }, []);

    // return (
    //     <Paper>
    //         <Typography variant="h3" gutterBottom>
    //             ToDo Card(MF)
    //         </Typography>
    //         <TextField
    //             id={todo?.id}
    //             value={todo?.text}
    //             onChange={(e) => setText(e.target.value)}
    //         />
    //     </Paper>
    // );


    return (
        <div>
            <h1>ToDo Card(MF)</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p color="crimson">{error}</p>
            <button onClick={() => createTodo(text)}>создать</button>
        </div>
    )
};

export default TodoCard;
