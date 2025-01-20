const amqp = require("amqplib");

// Create connection

exports.connect = async () => {
  console.log("in connect");
  //channel;
  
  try {

    // this message can be replace with req.bosy parameters as well.
    const message = {
      number: 32,
      name: "Madhu Kumar KS",
    };
    const url = `amqps://giepjupd:${process.env.password}@shark.rmq.cloudamqp.com/giepjupd`;
    const connection = await amqp.connect(url);
    const channel = await connection.createChannel();

    const queueName = "job1";
    const result = await channel.assertQueue(queueName);
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(`The message ${message} has sent to ${queueName}`);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.log(`error occurred while publishing ${error}`);
  }
};
