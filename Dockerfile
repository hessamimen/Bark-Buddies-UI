FROM public.ecr.aws/docker/library/node:18.14.0-slim

RUN apt-get update &&  \ 
    apt-get install -y xsel

RUN mkdir -p /app
WORKDIR /app

COPY . /app


RUN npm install
RUN npm run build


# COPY src/entrypoint.sh /app
# WORKDIR /app/src

EXPOSE 3000
# ENTRYPOINT ["/app/src/entrypoint.sh"]
#CMD ["npx", "serve", "build"]
COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
