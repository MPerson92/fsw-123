
import { v4 as uuidv4 } from "uuid";


const listOfTodos = [
    {
        "id": uuidv4(),
        "text": "wash clothes",
        "isCompleted": false
    },
    {
        "id": uuidv4(),
        "text": "shop for shoes",
        "isCompleted": false
    },
    {
        "id": uuidv4(),
        "text": "walk a mile",
        "isCompleted": false
    },
    {
        "id": uuidv4(),
        "text": "cleaning the house",
        "isCompleted": false
    }
];


export default listOfTodos;