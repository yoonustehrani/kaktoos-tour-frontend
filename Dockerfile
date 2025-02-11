FROM node:22-bookworm

ENV NODE_ENV=development

USER node

RUN mkdir -p ~/.npm-global && npm config set prefix '~/.npm-global' && \
    echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc

RUN /bin/bash -c 'source ~/.bashrc &&  npm install -g pnpm'

EXPOSE 3000

CMD ["sleep", "infinity"]
# ENTRYPOINT ['./start-container.sh']
