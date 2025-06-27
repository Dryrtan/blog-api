import { ArticleRepository } from './article.repository';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';

export class ArticleService {
    // A dependência é "injetada" aqui
    constructor(private articleRepository: ArticleRepository) {}

    getAll() {
        return this.articleRepository.findAll();
    }

    async getById(id: number) {
        const article = await this.articleRepository.findById(id);
        if (!article) {
            throw new Error("Artigo não encontrado"); // Lançamos um erro que será capturado
        }
        return article;
    }

    create(data: CreateArticleDto) {
        return this.articleRepository.create(data);
    }

    update(id: number, data: UpdateArticleDto) {
        // Aqui poderíamos adicionar lógicas, como verificar se o autor tem permissão
        return this.articleRepository.update(id, data);
    }

    delete(id: number) {
        return this.articleRepository.delete(id);
    }
}