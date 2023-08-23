export class BookNotFindError extends Error {
    constructor() {
        super('Livro não encontrado');
        this.name = 'BookNotFindError';
    }
}