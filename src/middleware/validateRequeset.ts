import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'yup'

import log from '../logger'

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log('validate', req.body)
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return next()
    } catch (e) {
      const error = e as Error
      log.error(error)
      return res.sendStatus(400).send(error.message)
    }
  }

export default validate
