import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routerFiles = await fs.readdir(join(__dirname, './Api/Router'));

const routers = await Promise.all(
    routerFiles
        .filter((file) => file.endsWith('.js'))
        .map(async (file) => {
            // const module = await import(join('./Api/Router', file));
            const module = await import(`./Api/Router/${file}`);
            return module.default;
        })
);

export default routers;
