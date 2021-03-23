import { setMaxListeners } from 'process';
import { Container } from '@inviqa/viper-di';
import { Gateway } from './Gateway';

setMaxListeners(100);

(async () => {
  const DI_CONFIG = process.env.DI_CONFIG || 'services.yml';

  const container = await new Container()
    .load(`config/${DI_CONFIG}`)
    .from('[default]', module => import(module))
    .from('./src', module => import(`./${module}`))
    .finalise();

  container.resolve(Gateway).start();
})();
