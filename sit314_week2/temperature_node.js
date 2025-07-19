const net = require("net");

const host = "127.0.0.1";
const port = 6000;

const client = net.createConnection(port, host, () => {
    console.log("Connected to weather service");
    setInterval(() => {
        const temp = Math.floor(Math.random() * 40) + 1;
        client.write(`temp,${temp}`);
    }, 2000);
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});
