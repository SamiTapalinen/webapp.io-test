FROM node:18-buster
RUN apk add --no-cache python2 g++ make WORKDIR
/app ENV PATH /app/node_modules/.bin:$PATH COPY package.json ./ COPY package-lock.json
./ RUN npm install COPY . . CMD ["npm", "start"]
EXPOSE 3000