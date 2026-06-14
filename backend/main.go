package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file.")
	}

	codeEndpoint := os.Getenv("FRONTEND_URL")

	fmt.Println(codeEndpoint)
}
