import { kafka, client } from './instance';
import {  ITrip} from "../../types";
import { enhanceTrip, sendTrip } from "../../services/trip/trip.service";

const streamConsumer = new kafka.Consumer(client, [{ topic: process.env.TRIPS_TOPIC, partition: 0 }], { autoCommit: false });

const onMessage = async (msg: kafka.Message) => {
  const { value } = msg;
  try {
    const trip = JSON.parse(value as string) as ITrip;
    const enhancedTrip = await enhanceTrip(trip);
    sendTrip(enhancedTrip, 'POST', process.env.ENHANCED_TRIP_WEBHOOK_URL);

    streamConsumer.commit((err, data) => console.log(data));
    console.log('TRIP sent');
  } catch (error) {
    console.error(error)
  }
};

streamConsumer.on('error', (err)=>console.log(err));
streamConsumer.on('message', onMessage);

export {streamConsumer};
