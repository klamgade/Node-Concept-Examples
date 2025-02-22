//Problem: Create a simple Express.js API with a single endpoint that returns a list of users."

//Expected API Behavior:
//The API should have a GET endpoint: /users
//It should return a JSON array of users.


import express from "express";
import type { Request, Response } from "express";


const app = express();
const PORT = 3000;

// Define User type
interface User {
    id: number;
    name: string;
    email: string;
}

// Mock user data
const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

// Define the /users endpoint
app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


