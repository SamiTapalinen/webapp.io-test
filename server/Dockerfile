FROM node:18-buster
RUN apt install python3 g++ make
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "app.js"];
EXPOSE 5001