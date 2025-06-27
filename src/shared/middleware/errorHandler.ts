import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);

    if (err.message.includes("não encontrado")) {
        res.status(404).json({ message: err.message });
    } else {
        // Erro genérico
        res.status(500).json({ message: 'Algo deu errado!' });
    }
};