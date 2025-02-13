FROM node:22-bookworm

ENV NODE_ENV=development

RUN apt-get update && apt-get upgrade -y

USER node

RUN mkdir -p ~/.npm-global && npm config set prefix '~/.npm-global' && \
    echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc

RUN npm install -g pnpm --verbose

RUN git config --global core.editor "code --wait"

USER root

RUN apt-get install -y tzdata && \
    ln -fs /usr/share/zoneinfo/Asia/Tehran /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

USER node

EXPOSE 3000

CMD ["sleep", "infinity"]
# ENTRYPOINT ['./start-container.sh']
