FROM node:10-alpine
RUN npm install -g serve
RUN npm install && \
    npm run test && \
    npm run build

EXPOSE 7723
CMD ["serve", "-s build"]