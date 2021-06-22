"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectToDatabase = require('../../../utils/mongodb');
const handler = async (req, res) => {
    try {
        const { method } = req;
        switch (method) {
            case 'GET':
                //Acesso ao MongoDB e obter os usuários do meu banco
                const { db } = await connectToDatabase();
                const data = await db.collection('user').find().toArray();
                res.status(200).json(data);
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
