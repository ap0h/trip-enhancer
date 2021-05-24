import { kafka, client } from './instance';

const producer = new kafka.Producer(client);

let isReady = false;

producer.on('ready', () => {
  isReady = true;
  console.log('producer is ready for sending messages');
});

producer.on('error', (err) => { console.error('ERROR:', err); });

async function sendMessage(topic: string, message: Record<string, unknown>): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!isReady) {
      console.error('Producer is not ready yet');
      return reject();
    }
    producer.send([{
      topic,
      messages: JSON.stringify(message),
    }], (err, data) => {
      if (data) {
        return resolve(data);
      }
      return reject(err);
    });
  });
}


export { sendMessage };