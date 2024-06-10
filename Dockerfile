FROM node:18 as base
ARG env
WORKDIR /webapps

FROM base AS builder
COPY package.json /webapps
RUN yarn install && npm i sharp
ADD . .
RUN yarn build

FROM base AS runner
COPY --from=builder /webapps .
