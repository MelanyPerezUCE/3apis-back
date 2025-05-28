FROM node:22-bullseye
WORKDIR /
COPY . .
RUN npm install
EXPOSE 80
CMD ["npm", "start" ]