import { rest } from 'msw';

export const handlers = [
    // GET 요청에 대한 핸들러 예시
    rest.get('https://api.example.com/user', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ id: 1, name: 'John Doe' })
        );
    }),

    // POST 요청에 대한 핸들러 예시
    rest.post('https://api.example.com/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ message: 'Login successful' })
        );
    })
];