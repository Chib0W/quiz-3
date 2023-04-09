//import express
const express = require('express');

//start listening on port 3000
const app = express();
const port = 3000;

let friends = [
    {
        username: "soo",
        password: "123123",
        email: "soo@gmail.com"
    },{
        username: "aidil",
        password: "000000",
        email: "aidilazhar@gmail.com"
    },{
        username: "ayam",
        password: "123456",
        email: "ayamgoreng@gmail.com"
    }
]

//enable json body parsing
app.use(express.json());

app.post('/', (req,res) => {
    let data = req.body
    res.send(
        login(
            data.username,
            data.password
            
        )
        
    );

});

//post riute to register a new user

app.post('/register', (req, res) => {
    let data = req.body
    res.send(
        register(
            data.username,
            data.password,
            data.email

        )
        
    )
})

// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    //
})

function login(username, password){
    console.log("someone try to login with", username, password)
    let matched = friends.find(Element => 
        //console.log(Element)
        Element.username == username
    )//finding element in the array
if(matched){
    if(matched.password == password){
        return matched
    }else{
        return "email not matched"
    }
}else{
    return "user not found"
}
}

function register(
    newusername,
    newpassword,
    newemail
){
    let exist = friends.find(element => 
        //console.log(Element)
        element.username == newusername
    )//finding element in the array
if(exist){
    return "username already exist"
}else{
    dbUsers.push({
        username: newusername,
        password: newpassword,
        email: newemail
    })
    return "account created"
}
}
