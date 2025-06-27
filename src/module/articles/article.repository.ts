import { prisma } from '../../prisma/client';
import { Article } from '../../generated/prisma';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';

export class ArticleRepository {
    async findAll(): Promise<Article[]> {
        return prisma.article.findMany();
    }

    async findById(id: number): Promise<Article | null> {
        return prisma.article.findUnique({ where: { id } });
    }

    async create(data: CreateArticleDto): Promise<Article> {
        return prisma.article.create({ data });
    }

    async update(id: number, data: UpdateArticleDto): Promise<Article> {
        return prisma.article.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Article> {
        return prisma.article.delete({ where: { id } });
    }
}