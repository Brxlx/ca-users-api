import { FastifyRequest, FastifyReply } from 'fastify';

import AppError from './AppError';

async function GlobalErrorHandler(err: Error, req: FastifyRequest, res: FastifyReply) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  return res.status(500).send({
    status: 'error',
    statusCode: 500,
    message: err.message ? err.message : 'Internal Server Error',
  });
}

export { GlobalErrorHandler };
