FROM nginx:1.17.6-alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/conf.d/nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf