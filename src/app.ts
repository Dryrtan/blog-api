import express from 'express';
import 'dotenv/config'; // Carrega variáveis do .env
import articleRoutes from './module/articles/article.routes';
import { errorHandler } from './shared/middleware/errorHandler';

const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Rota principal da API
app.get('/', (req, res) => {
    res.send('API do Blog está no ar!');
});

// Rotas de artigos
app.use('/articles', articleRoutes);

// Middleware de Erro (deve ser o último)
app.use(errorHandler);

export default app;