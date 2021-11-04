const Pulsar = require("pulsar-client");

(async () => {
  // Create a client
  const client = new Pulsar.Client({
    serviceUrl:
      "pulsar://ac94ab68af8b44e06b4c85dc5368b8d4-1736238562.ap-southeast-2.elb.amazonaws.com:6650",
  });

  // Create a producer
  const producer = await client.createProducer({
    topic: "persistent://public/mx-trigger/event",
    sendTimeoutMs: 30000,
  });

  // Send messages
  for (let i = 0; i < 1; i += 1) {
    const msg = JSON.stringify({
      appId: "test",
      referenceId: "k2",
      eventType: "node.start",
      payload: {
        name: "hello",
        type: "kkk",
      },
    });
    producer.send({
      data: Buffer.from(msg),
    });
    
    console.log(`Sent message: ${msg}`);
    // await sleep(50);
  }

  await producer.flush();
  await producer.close();
  await client.close();
})();

function sleep(x) {
  return new Promise((resolve) => {
    setTimeout(resolve, x);
  });
}
