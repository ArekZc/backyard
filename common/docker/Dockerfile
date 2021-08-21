FROM node:16-alpine as base

FROM base as rush

WORKDIR /workspace

COPY . .

RUN find apps \! -name "package.json" -mindepth 2 -maxdepth 3 -print | xargs rm -rf
RUN find libs \! -name "package.json" -mindepth 2 -maxdepth 3 -print | xargs rm -rf
RUN find tools \! -name "package.json" -mindepth 2 -maxdepth 3 -print | xargs rm -rf

COPY rush.json .

COPY common common

FROM base as ui

WORKDIR /workspace

COPY --from=rush /workspace /workspace

RUN node common/scripts/install-run-rush.js install

COPY . .

RUN node common/scripts/install-run-rush.js install

WORKDIR /workspace/apps/ui

RUN npm run build

FROM base

WORKDIR /workspace

COPY --from=rush /workspace /workspace

RUN node common/scripts/install-run-rush.js install

COPY . .

RUN node common/scripts/install-run-rush.js install

WORKDIR /workspace/apps/api

COPY --from=ui /workspace/apps/ui/dist/ui /workspace/apps/api/public

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
