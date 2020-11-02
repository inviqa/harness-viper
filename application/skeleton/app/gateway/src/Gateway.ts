import { GatewayApp } from '@inviqa/viper-gateway';

export class Gateway {
  constructor(
    /**
     * App for internal graphql services
     */
    private servicesApp: GatewayApp,
    /**
     * App for the federated gateway
     */
    private gatewayApp: GatewayApp
  ) {}

  async start() {
    await this.servicesApp.start();
    await this.gatewayApp.start();
  }
}
