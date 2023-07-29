import https from "https";

const start = Date.now();

https
  .request("https://www.google.com", (res) => {
    res.on("data", () => {
      // console.log("start:", Date.now() - start);
    });
    res.on("end", () => {
      console.log("end:", Date.now() - start);
    });
  })
  .end();
