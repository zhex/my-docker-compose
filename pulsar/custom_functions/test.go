package main

import (
	"context"

	"github.com/apache/pulsar/pulsar-function-go/pf"
)

func HandleResponse(ctx context.Context, in []byte) ([]byte, error) {
	res := append(in, 110)
	return res, nil
}

func main() {
	pf.Start(HandleResponse)
}
