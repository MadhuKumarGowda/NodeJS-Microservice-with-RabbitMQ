Node JS - Microservices with Message broker implementation
Here message broker is rabbitmq

Below steps to be repeated for publisher

1. npm init -y
2. install rabbitmq - npm i amqplib
3. Connect to the rabbitmq server
4. Create a new Channel on that connection
5. Create the exchange
6. Publish the message to the exchange with the routing key

Below steps to be repeated for receiver

1. npm init -y
2. install rabbitmq - npm i amqplib
3. Connect to the rabbitmq server
4. Create a new Channel on that connection
5. Create the exchange
6. Create the queue
7. Bind the queue tot he exchange
8. Consume messages from the queue


Download the code, then run npm i for Publisher and Receiver
Create your own RabbitMQ instance in CloudAMQP, copy the url and replace in both publisher.js and receiver.js
then run the publisher and receiver by following commands 
  publisher:  npm run publish
  Receiver:   npm run consumer
