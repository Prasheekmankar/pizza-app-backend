import express from "express";
import { getBike } from "../helper.js";
// import { auth } from "../middleware/auth.js";

const router = express.Router(); ///////

router.route("/").get( async (request, response) => {
  console.log(request.query);
  const data = request.query;
  const bikeData = await getBike(data);
  response.send(bikeData);
});

export const bikelistRouter = router;
