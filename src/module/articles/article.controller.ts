import { Request, Response, NextFunction } from 'express';
import { ArticleService } from './article.service';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';

export class ArticleController {
    constructor(private articleService: ArticleService) {}

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const articles = await this.articleService.getAll();
            res.json(articles);
        } catch (error) {
            next(error); // Passa o erro para o middleware
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const article = await this.articleService.getById(id);
            res.json(article);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data: CreateArticleDto = req.body;
            const newArticle = await this.articleService.create(data);
            res.status(201).json(newArticle);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const data: UpdateArticleDto = req.body;
            const updatedArticle = await this.articleService.update(id, data);
            res.json(updatedArticle);
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const deletedArticle = await this.articleService.delete(id);
            res.json(deletedArticle);
        } catch (error) {
            next(error);
        }
    }
}