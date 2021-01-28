import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Job } from '../entity';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const status = req.query.status || 'new';
  const jobs =  await getRepository(Job).find({ where: { status }, relations: ['category', 'suburb'] });
  return res.send(jobs);
});

router.post('/:id/accept', async (req: Request, res: Response) => {
  try {
    const repository = getRepository(Job);
    const job = await repository.findOneOrFail(req.params.id);
    job.status = 'accepted';
    repository.save(job);
    return res.send(job);
  } catch (e) {
    res.status(404).json('Lead not found!');
  }
});

router.post('/:id/decline', async (req: Request, res: Response) => {
  
  try {
    const repository = getRepository(Job);
    const job = await repository.findOneOrFail(req.params.id);
    job.status = 'declined';
    repository.save(job);
    return res.send(job);
  } catch (e) {
    res.status(404).json('Lead not found!');
  }
});

export default router;