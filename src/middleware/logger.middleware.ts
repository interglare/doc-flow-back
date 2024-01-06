import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const newObj = Object.fromEntries(
    Object.entries(req.body).map(([k, v]) => [k.toLowerCase(), v]),
  );
  req.body = newObj;
  next();
}
