FROM golang:1.25.11-alpine3.24

COPY . .

RUN  go build -o app

EXPOSE 8080

CMD [ "./app" ]