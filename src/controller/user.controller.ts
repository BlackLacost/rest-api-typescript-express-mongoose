import { Request, Response } from 'express'

import log from '../logger'
import { createUser } from '../service/user.service'

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body)
    return res.send(user)
  } catch (err) {
    log.error(err as Error)
    return res.status(409).send((err as Error).message)
  }
}
