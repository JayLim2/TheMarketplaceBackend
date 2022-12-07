FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

RUN chmod +x /app/entrypoint.sh

RUN npx tsc

ENTRYPOINT ["/app/entrypoint.sh"]