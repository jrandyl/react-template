FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build


FROM nginx:1.26-alpine
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]