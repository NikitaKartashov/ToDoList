import React from "react";
import { ITask } from "../Interfaces/ITask";

interface Props {
    task: ITask;
}

const TodoTask = ({task}: Props) => {
    return (
         <div className="task">
            <div className="content">

                <span>{task.title}</span>
                <span>{task.description}</span>
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default TodoTask