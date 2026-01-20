const express = require("express");
const app = express();

app.use(express.json());

const data = {
  users: [
    { id: 1, name: "Amit", email: "amit@gmail.com" },
    { id: 2, name: "Neha", email: "neha@gmail.com" },
    { id: 3, name: "Rahul", email: "rahul@gmail.com" },
    { id: 4, name: "Priya", email: "priya@gmail.com" },
    { id: 5, name: "Karan", email: "karan@gmail.com" },
    { id: 6, name: "Sneha", email: "sneha@gmail.com" },
    { id: 7, name: "Rohit", email: "rohit@gmail.com" },
    { id: 8, name: "Anjali", email: "anjali@gmail.com" },
    { id: 9, name: "Vikas", email: "vikas@gmail.com" },
    { id: 10, name: "Pooja", email: "pooja@gmail.com" }
  ]
};

app.get('/api', (req, res) => {
  res.json({ message: "Hello World", status: 200, data });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
