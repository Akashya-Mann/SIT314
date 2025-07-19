const net = require("net");
const port = 6000;

let temp;
let wind;
let rain;
let fire = "NO RATING";

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        const strData = data.toString();
        console.log(`Received data ${strData}`);

        const command = strData.split(",");
        const name = command[0];
        const value = command[1];
        let result;

        console.log(name);
        console.log(value);

        switch (name) {
            case "temp":
                temp = parseFloat(value);
                result = "ok";
                break;
            case "rain":
                rain = parseFloat(value);
                result = "ok";
                break;
            case "wind":
                wind = parseFloat(value);
                result = "ok";
                break;
            case "fire":
                fire = value;
                result = "ok";
                break;
            case "request":
                const area = value;
                if (temp > 20 && rain < 50 && wind > 30) {
                    result = `Area = ${area} and Weather Warning -  Fire Level: ${fire}`;
                } else {
                    result = `Area = ${area} and Everything fine -  Fire Level: ${fire}`;
                }
                break;
        }

        socket.write(result.toString());
    });

    socket.on("end", () => {
        console.log("Client is disconnected");
    });

    socket.on("error", (error) => {
        console.log(`A Socket Error ${error.message}`);
    });
});

server.on("error", (error) => {
    console.log(`A Server Error ${error.message}`);
});

server.listen(port, () => {
    console.log(`the TCP socket server is running on port ${port}`);
});
