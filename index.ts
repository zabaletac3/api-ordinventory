import { server } from './server/server';
import { AppDataSource } from './data-source';

function main() {

    AppDataSource.initialize().then(async () => {
        console.log("DB Inicializada.");
        server.listen(server.get('port'));
        console.log(`Server Listening on Port ${server.get('port')}`);
    }).catch(error => console.log(error, 'Error en DB:'));
}

main();
