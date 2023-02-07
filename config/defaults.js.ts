import { sveltin } from '../sveltin.json';

const sveltinVersion = sveltin.version;
const sveltekitVersion = process.env.VITE_SVELTEKIT_VERSION;
const buildTime = process.env.VITE_BUILD_TIME;
export { sveltinVersion, sveltekitVersion, buildTime };
