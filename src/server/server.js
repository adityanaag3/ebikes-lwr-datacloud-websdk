import { createServer } from 'lwr';
import { getProducts } from './api.js';

const lwrServer = createServer({ serverType: 'express' });
const expressApp = lwrServer.getInternalServer();

expressApp.get('/api/getProducts', getProducts);

lwrServer
    .listen(({ port, serverMode }) => {
        console.log(`App listening on port ${port} in ${serverMode} mode\n`);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });