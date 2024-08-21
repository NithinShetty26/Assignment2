const express = require('express');
const app = express();

// Define routes and middleware here
// ...
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});