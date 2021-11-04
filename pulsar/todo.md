[x] how to sync data to s3
[x] how to set env for broker in the helm chart (only config map can be used)
[x] how to use pulsar function
[ ] how to sync data to the postgres
[x] how to support amqp https://github.com/streamnative/aop
[x] how to security the queue
[ ] how to do data analysis store on s3
[x] how to install pulsar-admin cli
[ ] find a way to add custom plugins into helm chart
[x] how to add extra connector configuration file in to the helm chart (via admin-cli)
[ ] beat test

```shell

```

```shell
# insert admin user in the pulsar manager
CSRF_TOKEN=$(curl http://pulsar-manager.mx-dev.internal/pulsar-manager/csrf-token)
curl \
    -H "X-XSRF-TOKEN: $CSRF_TOKEN" \
    -H "Cookie: XSRF-TOKEN=$CSRF_TOKEN;" \
    -H 'Content-Type: application/json' \
    -X PUT http://pulsar-manager.mx-dev.internal/pulsar-manager/users/superuser \
    -d '{"name": "pulsar", "password": "pulsar", "description": "test", "email": "username@test.org"}'
```

```shell
# deploy a function
docker run -it \
    -v /Users/zhex/code/dc/pulsar/conf:/pulsar/conf \
    -v /Users/zhex/code/dc/pulsar/custom_functions:/pulsar/fn apachepulsar/pulsar-all \
    bin/pulsar-admin functions create \
    --tenant public \
    --namespace default \
    --go ./fn/test-fn \
    --inputs persistent://public/default/my-topic \
    --output persistent://public/default/my-topic-2 \
    --name test-fn
```

## References

https://github.com/streamnative/pulsar-beat-output/blob/master/README.md