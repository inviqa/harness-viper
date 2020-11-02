import { Container } from '@inviqa/viper-di';
import { Gateway } from './Gateway';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import classmap from '../config/classmap';

(async () => {
  const container = await new Container(false, classmap).load('config/services.yml').finalise();

  container.resolve(Gateway).start();
})();
