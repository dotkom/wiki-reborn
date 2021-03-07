# wiki-reborn

To run the project in develop do the following: 

Make an .env file at root with the following content: 

```
DATABASE_CLIENT=mongo
DATABASE_NAME=strapi
DATABASE_HOST=mongo
DATABASE_PORT=27017
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=password
MONGO_INITDB_ROOT_USERNAME=strapi
MONGO_INITDB_ROOT_PASSWORD=password
```

Then run `docker-compose up`.

Then go to port 1337/admin -> settings -> roles -> public and check all boxes
