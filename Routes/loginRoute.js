const express = require('express');

const router = express.Router();

router.get('/user', (req,res,next) => {
    res.send(
        `<form action="/login/user" method="POST" onSubmit="document.getElementById("username").value = localStorage.getItem('username')">
            <input type="text" name="username" id="username" placeholder="username">
            <button type="submit">Login</button>
        </form>`
    );
});

router.post('/user', (req,res,next) => {
    //console.log(req.body);
    res.redirect('/sendMessage/message');
})

module.exports = router;