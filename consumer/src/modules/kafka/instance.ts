import * as kafka from 'kafka-node';
import { ProducerStream } from "kafka-node";
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

export { kafka, client };

