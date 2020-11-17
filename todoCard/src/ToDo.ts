import { nanoid } from "nanoid";

export class ToDo {
    id: string;
    text: string;
    constructor() {

        this.id == nanoid();
        this.text = "";
    }
}