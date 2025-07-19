const net = require("net");

const host = "127.0.0.1";
const port = 6000;

const area = "Northern Country";

const client = net.createConnection(port, host, () => {
    console.log("Connected! to weather service");
    setInterval(() => {
        client.write(`request,${area}`);
        client.write(`request,${area}`);
    }, 2000);
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});
