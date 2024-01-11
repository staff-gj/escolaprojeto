import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function BaixarBoleto(nomeAluno, responsavel, valorCobrado) {
    alert(`Bom dia ${nomeAluno}, com responsável ${responsavel}, gostaria de baixar seu boleto?`);

    const boletos = [];

    for (let mes = 1; mes <= 12; mes++) {
        const vencimento = new Date(2024, mes - 1, 1);
        const vencimentoFormatado = `${vencimento.getDate().toString().padStart(2, '0')}/${(vencimento.getMonth() + 1).toString().padStart(2, '0')}/${vencimento.getFullYear()}`;

        boletos.push(
            [
                { text: 'Carnê de Pagamento Mensal - Escolinha Carequinha V', bold: true, fontSize: 15 },
                { text: 'Maria Neves Ferreira Alves - CNPJ 04177166000139', fontSize: 12 },
                { text: 'Rua Anita Garibaldi – 224 - Florais Léa Luis Eduardo Magalhães - Bahia CEP 47850-000', fontSize: 12 },
                { text: '\n' },
                { text: `Nome do responsável: ${responsavel} `, fontSize: 12 },
                { text: `Nome do aluno(a): ${nomeAluno} `, fontSize: 12 },
                { text: `Vencimento: ${vencimentoFormatado}`, fontSize: 12 },
                { text: `Valor Pago: R$`, fontSize: 12 },
                { text: `Valor: R$${valorCobrado}`, fontSize: 12 },
                { text: '\n' },
                { text: 'Assinatura: ', fontSize: 12 },
                { text: '_____________________________________________________________________________ \n\n', fontSize: 12 },
            ]
        );
    }

    const docDefinition = {
        content: boletos.flat(),
    };

    pdfMake.createPdf(docDefinition).download('Boletos.pdf');
}
