const amqp = require("amqplib");

// Create connection

exports.connect = async () => {
  try {
    const url = `amqps://giepjupd:${process.env.password}@shark.rmq.cloudamqp.com/giepjupd`;
    const connection = await amqp.connect(url);
    const channel = await connection.createChannel();

    const queueName = "job1";
    await channel.assertQueue(queueName);

    channel.consume(queueName, (message) => {
      const result = JSON.parse(message.content.toString());
      console.log(
        `The message ${result.number} has been received from ${queueName}`
      );
      channel.ack(message);
    });

    console.log("Waiting for messages...");
  } catch (error) {}
};
