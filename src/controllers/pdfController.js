import AlunoModel from '../models/AlunoModel.js';
import { gerarPdfAluno, gerarPdfTodos } from '../utils/fotoHelper.js';

export const relatorioTodos = async (req, res) => {
    try {
        const registros = await AlunoModel.buscarTodos();

        if (!registros || registros.length === 0) {
            return res.status(200).json({ message: 'Nenhum registro encontrado.' });
        }

        const pdf = await res.json(registros);
    } catch (error) {
        console.error('Erro ao buscar:', error);
        res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};
