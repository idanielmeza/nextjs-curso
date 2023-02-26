# Next.js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* -d significa __detached__

* MongoDB URI localmente
```
mongodb://localhost:27017/teslodb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

* Reconstruir modulos de node y corret Next en modo desarollo
```
yarn install
yarn dev
```

## Lenar la base de datos con informacion de pruebas
```
    http://localhost:3000/api/seed
```