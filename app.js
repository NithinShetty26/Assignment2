const express = require('express');
const app = express();

// Define routes and middleware here
// ...
app.get("/user/:id/:start/:end", function(req, res){ 

    const user_id = req.params['id'] 
    const start = req.params['start'] 
    const end = req.params['end'] 
    
    console.log("User ID :",user_id);
    console.log("Start :",start);
    console.log("End :",end);
    res.send(JSON.stringify({"User ID":user_id,"Start":start,"End":end}));
   }) 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});