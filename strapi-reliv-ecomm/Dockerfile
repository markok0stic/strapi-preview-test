FROM node:18-alpine
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install --production=true
WORKDIR /opt/app
COPY ./ .
EXPOSE 1337
CMD ["npm","run","develop"]
