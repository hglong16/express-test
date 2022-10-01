import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send(Object.value(req.context.models.users)));

router.get('/:userId', (req, res) => res.send(req.context.models.users[req.params.userId]));

router.post('/', (req, res) => {
  res.sendStatus(200);
  console.log('req.params.body', req.params.body);
});

export default router;
