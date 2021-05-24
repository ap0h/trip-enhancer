import { Router, Request, Response } from 'express';
import * as ProducerService from "../modules/kafka/producer";
import * as aTrip from "../../trip.input.json";

const router = Router();

router.get('/', getTripHandler);

async function getTripHandler(req: Request, res: Response) {
    const response = await  ProducerService.sendMessage(process.env.TRIPS_TOPIC, aTrip);
    return res.json(response);
}

export default router;