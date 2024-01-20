import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function BaixarFichaMatricula(nome_aluno ,periodo ,responsavel_buscar ,data_nascimento ,nome_pai ,nome_mae ,endereco ,cidade ,telefone ,email ,serie_aluno){
    if(data_nascimento == null){
        data_nascimento = '_____/_____/______'
    }else{

    }

    const docDefinition = {
        content: [
            {text:'Ficha de Matrícula - Escola Carequinha 5\n'},
            {text:'"A arte de aprender a ser feliz"\n'},
            {text:'Maria Neves Ferreira Alves: CNPJ: 041771660001-39\n'},
            {text:'Rua Anita Garibaldi nº224 Bairro Aroldo da Cruz CEP 47850-000\n'},
            {text:'Luis Eduardo Magalhães - Bahia       Fone (77)3628-5167\n'},
            {text:`Série: ${serie_aluno}\n`},
            {text: '_______________________________________________________________________________________ \n\n', fontSize: 12 },
            {text: `Horario que deseja que seu filho(a) permança na escola: ${periodo}`},
            {text: `Quem costuma trazer ou buscar a criança na escola? ${responsavel_buscar}\n`},
            {text: `Dados do aluno:\n`},
            {text: `Nome do aluno: ${nome_aluno}\n`},
            {text: `Data de nascimento: ${data_nascimento}\n`},
            {text: `Nome do pai: ${nome_pai}\n`},
            {text: `Nome da mãe: ${nome_mae}\n`},
            {text: `Endereço: ${endereco}\n`},
            {text: `Cidade: ${cidade}\n`},
            {text: `Telefone: ${telefone}\n`},
            {text: `Email: ${email}\n`},
            {text: `Problemas de saude que a criança apresenta ou ja apresentou:\n ( )alergias   ( )desmaios  ( )visão  ( )convulsão  ( ) audição  ( ) Outros\n`},
            {text: `Toma remédios controlados:  (  ) Sim    (  ) Não\n`},
            {text: `Em caso de urgência deverá ser encaminhado para (  ) Posto de saude  (  ) Clinica particular,  nome da clinica:______________________________\n`},
            {text: `Qual medicamento deve ser usado no caso de febre? Quantas gotas? \n`},
            {text: `Autoriza a utilização de imagem da criança na escola em redes sociais e midias da escola?  (  )Sim  (  )Não \n`},
            {text: `Alguma observação a fazer?_______________________________________________________________________________________\n`},
            {text: `Declaro para os devidos fins que:\n_______________________________________________________________________________________\n`},
            {text: `Está matriculado no curso de:\n _______________________________________________________________________________________`}
            
        ]
    }

    pdfMake.createPdf(docDefinition).download('FichaDeMatricula.pdf');
}