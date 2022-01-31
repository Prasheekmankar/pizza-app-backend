import express from "express";
import { getPizza } from "../helper.js";
// import { auth } from "../middleware/auth.js";

const router = express.Router(); ///////

router.route("/").get( async (request, response) => {
  console.log(request.query);
  const data = request.query;
  const pizzaData = await getPizza(data);
  response.send(pizzaData);
});

export const bikelistRouter = router;
