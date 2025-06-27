import { z } from 'zod';

export const createArticleSchema = z.object({
    title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
    content: z.string().min(10, "O conteúdo deve ter no mínimo 10 caracteres"),
    author: z.string().min(2),
    tags: z.array(z.string()).optional(),
});

export const updateArticleSchema = createArticleSchema.partial(); // Todos os campos são opcionais

export type CreateArticleDto = z.infer<typeof createArticleSchema>;
export type UpdateArticleDto = z.infer<typeof updateArticleSchema>;