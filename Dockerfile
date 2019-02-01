FROM node:10-alpine as react-build

WORKDIR /app
COPY . ./
RUN yarn
RUN yarn test
RUN yarn build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]