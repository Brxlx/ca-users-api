import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';

class HealthRoutes {
  constructor(private fastify: FastifyInstance) {}

  public loadRoutes(): void {
    try {
      // Registra cada rota no plugin
      this.fastify.register(
        (instance: FastifyInstance, opts: FastifyPluginOptions, next) => {
          // Rotas dentro do mesmo grupo
          instance.get('/ping', async (req: FastifyRequest, res: FastifyReply) => {
            return res.send({ resp: 'Pong' });
          });
          next();
        },
        { prefix: 'check' }
      );
    } catch (err) {
      this.fastify.log.error(err);
    }
  }
}

export { HealthRoutes };
