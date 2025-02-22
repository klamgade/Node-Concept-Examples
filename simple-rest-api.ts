//Problem: Create a simple Express.js API with a single endpoint that returns a list of users."

//Expected API Behavior:
//The API should have a GET endpoint: /users
//It should return a JSON array of users.


import express from "express";
import type { Request, Response } from 'express';
const app = express();
const PORT = 3000;

// Define User type
interface User {
    id: number;
    name: string;
    age: number;
}

// Mock user data
const users: User[] = [
    { "id": 1, "name": "Alice", "age": 25 },
    { "id": 2, "name": "Bob", "age": 30 },
    { "id": 3, "name": "Charlie", "age": 22 }
]

// Define the /users endpoint
//If minAge is provided in the query string, return only users with age ≥ minAge.

app.get("/users", (req: any, res: any) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    try {
        const minAge = req.query.minAge as string;
        // Validate query parameter
        if (minAge && isNaN(Number(minAge))) {
            console.error("❌ Invalid minAge provided");
            return res.status(400).json({ error: "Invalid minAge. Must be a number." });
        }
        const filteredUsers = minAge ? users.filter((user) => user.age >= Number(minAge)) : users;
        console.log(`✅ Returning ${filteredUsers.length} users`);
        
        return res.json(filteredUsers);
    } catch (error) {
        console.error("🔥 Unexpected server error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


