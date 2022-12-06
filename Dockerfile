FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install && \
    chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]