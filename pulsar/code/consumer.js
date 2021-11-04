const Pulsar = require('pulsar-client');

(async () => {
    const client = new Pulsar.Client({
        serviceUrl: 'pulsar://ac94ab68af8b44e06b4c85dc5368b8d4-1736238562.ap-southeast-2.elb.amazonaws.com:6650',
    });
    
    const consumer = await client.subscribe({
        topic: 'my-topic',
        subscription: 'my-subscription',
        subscriptionType: 'Shared',
        listener: (msg, msgConsumer) => {
            console.log(msg.getData().toString());
            msgConsumer.acknowledge(msg);
          },
    });

    const consumer2 = await client.subscribe({
        topic: 'my-topic',
        subscription: 'my-subscription',
        subscriptionType: 'Shared',
        listener: (msg, msgConsumer) => {
            console.log('xx', msg.getData().toString());
            msgConsumer.acknowledge(msg);
          },
    });
})();
