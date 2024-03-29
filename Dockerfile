FROM node:alpine

RUN npm install -g http-server

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --production
# Bundle app source
COPY . .

RUN npm run build
EXPOSE 3036
CMD ["http-server", "dist", "--port", "3036", "--ssl", "--cert", "/etc/letsencrypt/live/apps.elem.ru/cert.pem", "--key", "/etc/letsencrypt/live/apps.elem.ru/privkey.pem"]