const http = require("http");
const app = require("./app");
const { initializeSocket } = require('./socket');
const port = process.env.PORT  ||  3000;


const server = http.createServer(app);

initializeSocket();
 
server.listen(port , (req , res) => {
    console.log(`Server is listening on Port ${port}`);
});