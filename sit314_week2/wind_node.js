const net = require("net");

const host = "127.0.0.1";
const port = 6000;

const client = net.createConnection(port, host, () => {
    console.log("Connected to weather service");
    setInterval(() => {
        const wind = Math.floor(Math.random() * 100) + 1;
        client.write(`wind,${wind}`);
    }, 2000);
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});
