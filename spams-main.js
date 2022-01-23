const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/spams-index.html");
});

io.on("connection", (socket) => {
  console.log("a client connected");

  //Yan Hui's Sockets
  socket.on("BBBW1_Motion", (motionData) => {
    console.log("motionData:", motionData);
    io.emit("BBBW1_Motion", motionData);
  });
  socket.on("BBBW1_Buzzer", () => {
    console.log("BBBW1_Buzzer sent");
    io.emit("BBBW1_Buzzer");
  });

  socket.on("BBBW1_Servo", (servoData) => {
    console.log("servoData:", servoData);
    io.emit("BBBW1_Servo", servoData);
  });

  //Daniel's Sockets

  socket.on("BBBW3_Precipitation", (preData) => {
    console.log("preData:", preData);
    io.emit("BBBW3_Precipitation", preData);
  });
  socket.on("BBBW3_Lux", (luxData) => {
    console.log("luxData:", luxData);
    io.emit("BBBW3_Lux", luxData);
  });
  socket.on("BBBW3_Wind", (windData) => {
    console.log("windData:", windData);
    io.emit("BBBW3_Wind", windData);
  });

  //Aiman's Sockets

  socket.on("BBBW4_Moist", (moistData) => {
    console.log("moistData:", moistData);
    io.emit("BBBW4_Moist", moistData);
  });
  socket.on("BBBW4_Temp", (tempData) => {
    console.log("tempData:", tempData);
    io.emit("BBBW4_Temp", tempData);
  });
  socket.on("BBBW4_Salinity", (saliData) => {
    console.log("saliData:", saliData);
    io.emit("BBBW4_Salinity", saliData);
  });

  socket.on("disconnect", () => {
    console.log("a client disconnected");
  });
});

http.listen(port, () => {
  console.log(`SPAMS server running at http://localhost:${port}/`);
});
