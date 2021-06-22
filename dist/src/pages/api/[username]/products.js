"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler = (req, res) => {
    try {
        const { method, query } = req;
        switch (method) {
            case 'GET':
                res.status(200).json([
                    { id: 1, name: 'Produto 1', method, query: query.username },
                    { id: 2, name: 'Produto 2', method, query: query.username },
                    { id: 3, name: 'Produto 3', method, query: query.username }
                ]);
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};
exports.default = handler;
