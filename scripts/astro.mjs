// Lanza Astro desde la ruta real del proyecto.
// En Windows, si la terminal entra a la carpeta con otra combinación de
// mayúsculas (p. ej. A:\proyectos en vez de A:\Proyectos), Astro compila
// las páginas sin enlazar sus estilos. Normalizar la ruta lo evita.
import { spawnSync } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const root = realpathSync.native(process.cwd());
const require = createRequire(join(root, 'package.json'));
const astroBin = join(dirname(require.resolve('astro/package.json')), 'bin', 'astro.mjs');

const result = spawnSync(process.execPath, [astroBin, ...process.argv.slice(2)], {
  cwd: root,
  stdio: 'inherit',
});
process.exit(result.status ?? 1);
