import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs
const date = new Date()
const dia = date.getDate();

export function BaixarDeclaracao(nome_aluno ,data_nascimento ,nome_pai ,nome_mae ,serie_aluno, data_inicial, data_final, serie_seguinte){

    const docDefinition ={
        content: [
            {text: 'Escola Carequinha 5\n\n', color: 'red', fontSize: 20},
            {text: 'Mantenedora: Maria Neves Ferreira Alves\n  "A ARTE DE APRENDER E SER FELIZ"\n  Rua Anita Garibaldi nº 224 - Bairro Florais Léa LEM/BA\n  CNPJ-04.177.166/0001-39               FONE: 77 999537160\n\n', alignment: 'center', fontSize: 10},
            {text: 'DECLARAÇÃO ESCOLAR',  alignment: 'center', bold: true, fontSize: 13, textDecoration:  'lineThrough'},
            {text: `Nome do(a) aluno(a) ${nome_aluno}\n`},
            {text: `Data de nascimento: ${data_nascimento}\n`},
            {text: `Filiação:\n Mãe: ${nome_mae}\n Pai: ${nome_pai}\n\n\n`},
            {text: `Declaramos para os devidos fins de que o(a) aluno(a) ${nome_aluno} estudou neste estabelecimento de ensino o ${serie_aluno}º ano desde ${data_inicial} a ${data_final}\n Com direito a se matricular-se no ${serie_seguinte} da educação básica\n\n\n\n`},
            {text: `LUIS EDUARDO MAGALHÃES BAHIA ${dia}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`},
            {text: "______________________________________________\n Maria Neves Ferreira Alves\n Diretora\n\n\n\n\n\n\n\n\n\n\n\n\n", alignment: 'center'},
            {text: " Rua Anita Garibaldi Quadra 16 Lote 18 - Bairro Santa Cruz      (77)36285167\n LUIS EDUARDO MAGALHÃES BAHIA", alignment: 'center'}
        ]
    }
    pdfMake.createPdf(docDefinition).download('declaracao.pdf')
}