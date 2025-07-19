const net = require("net");

const host = "127.0.0.1";
const port = 6000;
const levels = ["NO RATING", "MODERATE", "HIGH", "EXTREME", "CATASTROPHIC"];

const client = net.createConnection(port, host, () => {
    console.log("Connected to weather service");
    setInterval(() => {
        const fireIndex = Math.floor(Math.random() * levels.length);
        const fireLevel = levels[fireIndex];
        client.write(`fire,${fireLevel}`);
    }, 3000);
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});
