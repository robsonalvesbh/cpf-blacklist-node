FROM node:carbon

RUN npm install --global npm@3.7.5

RUN mkdir /cpf_blacklist_node
ENV HOME=/cpf_blacklist_node

COPY package.json $HOME

WORKDIR $HOME
RUN npm cache clean && npm install --silent --progress=false

COPY . $HOME

RUN npm run gulp

CMD ["npm", "start"]
