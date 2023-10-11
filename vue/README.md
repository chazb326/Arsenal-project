# Docker commands:
cd into /vue-arsenal
`docker build -t vue-arsenal .`
`docker run -it -p 8080:80 --rm --name vue-arsenal-1 vue-arsenal`

run json-server with the following command:
`npx json-server --watch data/players.json --port PORT_NUMBER`