import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { ToDo } from "../models/ToDo";

const TodoCard = React.lazy(() => import("todoCard/TodoCard"));

interface ITodoCardConnector extends RouteComponentProps {
    addToDo: (value: string) => void;
    todoList: ToDo[]
}

export const TodoCardConnector: React.FC<ITodoCardConnector> = ({ addToDo, todoList }) => {

    return (
        <React.Suspense fallback="Loading">
            <TodoCard
                addToDo={addToDo}
            />
        </React.Suspense>
    );
}