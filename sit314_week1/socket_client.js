
const net = require("net");

const host = "127.0.0.1";
const port = 5000;
for (let i = 0; i<=100; i++)  {
const client = net.createConnection(port, host, () => {
    console.log("Connected");
    setInterval(() => {
        const num1 = (Math.random() * 100).toFixed(2)
        const num2 = (Math.random() * 100).toFixed(2)
        client.write(`sub,${num1},${num2}`); // Random numbers

    }, 3000); // 1. Changing the int=erval to 3000ms from 2000ms = 2 seconds
}); //The interval of sending the data.

client.on("data", (data) => {
    console.log(`Received: ${data}`);
    // process.exit(0);
});

client.on("error", (error) => {
    console.log(`Error: ${error.message}`);
});

client.on("close", () => {
    console.log("Connection closed");
});
}