import { Router } from 'express';
import { ArticleRepository } from './article.repository';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

const router = Router();

// Injeção de Dependências manual
const repository = new ArticleRepository();
const service = new ArticleService(repository);
const controller = new ArticleController(service);

// Bind dos métodos do controller às rotas
router.get('/', (req, res, next) => controller.getAll(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.post('/', (req, res, next) => controller.create(req, res, next));
router.put('/:id', (req, res, next) => controller.update(req, res, next));
router.delete('/:id', (req, res, next) => controller.delete(req, res, next));

export default router;