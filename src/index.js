import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectdb from "./db/index.js";

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port:${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("mongo db connection failed", err);
  });

connectdb();
