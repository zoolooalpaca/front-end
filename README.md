# Order In

## To Run

```bash
docker-compose up -d
docker-compose exec app npm install
docker-compose exec app npm run dev
```

Access to localhost at port 3000 [http://localhost:3000](http://localhost:3000)

Hooking into the container

```bash
docker-compose exec app /bin/bash
```

Using `npm` command from host

```bash
docker-compose exec app npm ...
# For example:
docker-compose exec app npm install -g npm@8.18.0
```