import { DocumentDefinition } from 'mongoose'

import User, { UserDocument } from '../model/user.model'

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    const user = await User.create(input)
    return serializeCreateUser(user)
  } catch (error) {
    throw new Error(error as string)
  }
}

export function serializeCreateUser(user: UserDocument) {
  const { password, ...userWithoutPassword } = user.toJSON()
  return userWithoutPassword
}

function findUser() {}
