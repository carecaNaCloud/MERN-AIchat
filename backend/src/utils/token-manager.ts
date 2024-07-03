import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const createToken = (id: string, email: string, exiresIn) {
  const payload = {id, email};
  const toket = jwt.sign
}
