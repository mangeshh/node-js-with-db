# node-js-with-db

npm list -g --depth 0

How to create model details ?
sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName] -C

sequelize-auto -o "./models" -d world -h localhost -u root -x root -e mysql -C -t city --noInitModels

sequelize-auto -o "./models" -d world -h localhost -u root -x root -e mysql -C -t states --noInitModels

