FROM node:16

WORKDIR /app

EXPOSE 3000

CMD [ "sh", "entrypoint-front.sh" ]