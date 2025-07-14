//socket_server.py
const net = require("net");

const port = 5000;

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        const strData = data.toString();
        console.log(`Received: ${strData}`);

        const command = strData.split(",");
        const operator = command[0];
        const operand1 = parseFloat(command[1]);
        const operand2 = parseFloat(command[2]);
        let result;

        switch (operator) {
            case "add":
                result = operand1 + operand2;
                break;
            case "sub":
                result = operand1 - operand2;
                break;         
                //Modify the server to support different calculations.
            case "multiply":
                result = operand1 * operand2; // Adding a Multiplication operations q2
                break;
            case "divide":
                result = operand1 / operand2; // Dividing two operations q2
                break;


                
        }
        console.log(`Calculation Result: `+result.toString());
        socket.write(result.toString());
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });

    socket.on("error", (error) => {
        console.log(`Socket Error: ${error.message}`);
    });
});

server.on("error", (error) => {
    console.log(`Server Error: ${error.message}`);
});

server.listen(port, () => {
    console.log(`TCP socket server is running on port: ${port}`);
});