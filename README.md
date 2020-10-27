# Installation



### git clone https://github.com/AgusPk/challenge-api.git

generar el container
### docker-compose build

levantar el servicio
## docker-compose up

con el container corriendo:

### docker-compose exec api bash

dentro del container ejecutar migraciones y seeder

### npx sequelize-cli db:migrate

### npx sequelize-cli db:seed:all


## FRONT repo

### https://github.com/AgusPk/challenge-front