import { Express, Request, Response } from 'express'

import validateRequest from './middleware/validateRequeset'
import { createUserHandler } from './controller/user.controller'
import { createUserSchema } from './schema/user.schema'

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  // Register user
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler)

  // Login
  // app.post(
  //   '/api/users',
  //   validateRequest(createUserSessionSchema),
  //   createUesrSessionHandler
  // )

  // Get the uesr's sessioins

  // Logout
}
