import express from "express";
import cors from 'cors'
import resturants from "./api/resturants.route.js"

const app = express()

app.use(cors())
app.use(express.json()) //to make our server accepts json in the body of a request 

app.use("/api/v1/resturants", resturants)
app.use("*", (req, res) => (
    res.status(404).json({error: "not found"})
))

export default app