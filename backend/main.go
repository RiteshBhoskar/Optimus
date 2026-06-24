package main

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		fmt.Println("Env variables not found.")
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", rootHandler)

	serverAddress := os.Getenv("PORT")
	fmt.Printf("Server running on http://localhost%s\n", serverAddress)

	err = http.ListenAndServe(serverAddress, mux)
	if err != nil {
		fmt.Printf("Server failed to start: %v\n", err)
	}

}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	fmt.Println("Method:", r.Method)

	body, _ := io.ReadAll(r.Body)
	fmt.Println("Body:", string(body))

	fmt.Fprintln(w, "works")

}
