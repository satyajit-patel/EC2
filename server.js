// Elastic Compute Cloud 

const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/ping", (req, res) => {
    res.json({message: "pong"});
});
app.use("/", (req, res) => {
    res.send("You are up");
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

// step 1
    // => chmod 400 <.pem file>  [one time]
    // 400 i.e only Read access, No Write access, No Executing access (700 means RWE(Read, Write, Execute))
    // ls -lh (to see the permission) 

/*
    step 2
        ssh denotes that we are going to use secure shell protocol
        read about flag -i in SSH (-i means we will login through our secret .pem file, not directly)
        => ssh -i <.pem file> <ubuntu@publicIPv4address of the machine> [every time we need to do this to login]
    
    
    and we will successfully rented a new brand virtual ubuntu machine
    => whoami (to see the user)
    => ls (to see directry structure)
    => ls -a (to see hidden files)
    => pwd (current structure)
    => sudo apt-get update (Just to stay updated)

    => sudo apt install nodejs
    => node -v
    => sudo apt install npm -y

    git clone - node server.js etc

    then so to security group -> inbound request and add a rule to enable port 3001 
    (type-custom TCP, source- anywhere IPv4/IPv6 address, HTTP - port 80 by default(type custom))

    NOW
    you can call
    <publicIPv4>:3001/ping

    login -> ssh -i <.pem file>
    logout -> Ctrl + d (and server will stop)

    HOW TO MAKE SERVER RUN FOREEVER
        Background process (Daemon process)

            for Nodejs (we can install pm2 package glogably in ubuntu machine)
            => sudo npm install pm2 -g

            => pm2 start "node server.js" --name demo-server(custom name)
            and now our terminal will be free
*/
