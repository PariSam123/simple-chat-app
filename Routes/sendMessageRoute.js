const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/message', (req,res,next) => {  
    fs.readFile("username.txt", (err,data) => {
        if(err){
            console.log(err)
            data = 'No chat exists'
        }
        res.send(
            `${data}<form action="/sendMessage/message" method="POST" onSubmit="document.getElementById("username").value = localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <br><br>
                <button type="submit">Send Message</button>
            </form>`
            
        ); 
    })

});
router.post('/message',(req,res,next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`,{ flag: 'a'}, (err) => {
        err ? console.log(err) : res.redirect("/sendMessage/message")
    });
});

module.exports = router;