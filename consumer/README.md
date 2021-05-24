In order to test you need kafka server running:

You can download kafka from https://www.apache.org/dyn/closer.cgi?path=/kafka/2.8.0/kafka_2.13-2.8.0.tgz

STEP1: GET KAFKA
`tar -xzf kafka_2.13-2.8.0.tgz && cd kafka_2.13-2.8.0`

STEP2: START THE KAFKA ENVIRONMENT
`bin/zookeeper-server-start.sh config/zookeeper.properties`
`bin/kafka-server-start.sh config/server.properties`

STEP 3: CREATE A TOPIC FOR TRIPS
`bin/kafka-topics.sh --create --topic trips --bootstrap-server localhost:9092`


trip.input.json has 2000 data points.
