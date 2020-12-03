import { Container } from '@inviqa/viper-di';
import { existsSync } from 'fs';
import { Gateway } from './Gateway';

(async () => {
  const config = process.env.GATEWAY_CONFIG || '';

  const file = existsSync('config/services.local.yml')
    ? 'config/services.local.yml'
    : `config/services${config ? `.${config}` : ''}.yml`;
  const container = await new Container()
    .load(file)
    .from('[default]', module => import(module))
    .from('./src', module => import(`./${module}`))
    .finalise();

  container.resolve(Gateway).start();
})();
