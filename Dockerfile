FROM node:22-bookworm

ENV NODE_ENV=development

RUN apt-get update && apt-get upgrade -y

USER node

RUN mkdir -p ~/.npm-global && npm config set prefix '~/.npm-global' && \
    echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc

RUN npm install -g pnpm --verbose

EXPOSE 3000

CMD ["sleep", "infinity"]
# ENTRYPOINT ['./start-container.sh']
