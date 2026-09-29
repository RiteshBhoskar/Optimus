package server

import (
	"context"
	"fmt"

	"github.com/moby/moby/client"
)

func startContainer() {
	ctx := context.Background()

	cli, err := client.New(client.FromEnv)
	if err != nil {
		fmt.Println("Error creating API client:", err)
		panic(err)
	}
	defer cli.Close()
}
