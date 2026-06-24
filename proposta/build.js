const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageBreak,
} = require('docx');

const GOLD = 'B8995F';
const INK = '1A1A1A';
const SLATE = '6A6A6A';
const SAND = 'F3EEE6';

const thinBorder = { style: BorderStyle.SINGLE, size: 4, color: 'EAE5DC' };
const cellBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const cellNoBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function eyebrow(text) {
  return new Paragraph({ spacing: { before: 100, after: 60 },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, color: GOLD, size: 18, font: 'Arial' })] });
}
function h1(text) { return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] }); }
function subhead(text) { return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] }); }
function lead(text) { return new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text, color: SLATE, size: 24 })] }); }
function body(text) { return new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text, size: 22 })] }); }
function bullet(text, ref = 'bullet-list') {
  return new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text, size: 22 })] });
}
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }
function fillField(label, placeholder) {
  return new Paragraph({ spacing: { after: 60 }, children: [
    new TextRun({ text: label + ': ', bold: true, size: 22 }),
    new TextRun({ text: placeholder, italics: true, color: SLATE, size: 22 }),
  ] });
}

function headerCell(text, w) {
  return new TableCell({
    borders: cellBorders, width: { size: w, type: WidthType.DXA },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    shading: { fill: INK, type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, bold: true, color: 'FFFFFF', size: 20 })] })],
  });
}
function cell(text, w, opts = {}) {
  return new TableCell({
    borders: cellBorders, width: { size: w, type: WidthType.DXA },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    shading: { fill: opts.fill || 'FFFFFF', type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({ text, bold: !!opts.bold, color: opts.color || INK, size: 20 })],
    })],
  });
}

function twoColCard(title, text, w = 4680) {
  return new TableCell({
    borders: cellNoBorders, width: { size: w, type: WidthType.DXA },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    shading: { fill: SAND, type: ShadingType.CLEAR },
    children: [
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: title, bold: true, size: 22 })] }),
      new Paragraph({ children: [new TextRun({ text, size: 20, color: SLATE })] }),
    ],
  });
}

function diagCheckRow(frente, statusPlaceholder) {
  return new TableRow({ children: [
    cell(frente, 2800, { bold: true }),
    cell(statusPlaceholder, 5880, { color: SLATE }),
  ] });
}

const logo = fs.readFileSync('/Users/giovanna/Claude/PRUMO/logo.png');

const doc = new Document({
  styles: {
    default: { document: { run: { font: 'Arial', size: 22, color: INK } } },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal', run: { size: 56, bold: true, color: INK, font: 'Georgia' },
        paragraph: { spacing: { before: 0, after: 160 }, alignment: AlignmentType.LEFT } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: false, color: INK, font: 'Georgia' },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, color: INK, font: 'Arial' },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullet-list', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 480, hanging: 240 } } } }] },
    ],
  },
  sections: [{
    properties: { page: { margin: { top: 1100, right: 1100, bottom: 1100, left: 1100 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: 'PRUMO CONSULTORIA', color: GOLD, bold: true, size: 16 })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'atprumo@gmail.com  ·  WhatsApp +55 71 99692-1513', color: SLATE, size: 16 })],
      })] }),
    },
    children: [
      // CAPA
      new Paragraph({
        alignment: AlignmentType.CENTER, spacing: { before: 500, after: 360 },
        children: [new ImageRun({ type: 'png', data: logo, transformation: { width: 200, height: 75 },
          altText: { title: 'Logo Prumo', description: 'Logo Prumo Consultoria', name: 'Logo' } })],
      }),
      new Paragraph({ style: 'Title', alignment: AlignmentType.CENTER, children: [new TextRun('Proposta Comercial')] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 280 },
        children: [new TextRun({ text: 'Estruturação organizacional — pós-diagnóstico', size: 26, color: SLATE })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 8 },
        children: [new TextRun({ text: '_______________________________________', color: SLATE })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: 'Preparado para', size: 20, color: SLATE })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 4 }, children: [new TextRun({ text: '[Nome da empresa]', bold: true, size: 26 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 4 }, children: [new TextRun({ text: 'Aos cuidados de [Nome do(a) sócio(a) / responsável]', size: 20, color: SLATE })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 20 }, children: [new TextRun({ text: 'Data de emissão: [DD/MM/AAAA]  ·  Validade: 10 dias corridos', size: 18, color: SLATE })] }),

      pageBreak(),

      // 1. RESUMO DO DIAGNÓSTICO
      eyebrow('Diagnóstico realizado'),
      h1('O que identificamos na sua empresa.'),
      lead('Resumo das seis frentes avaliadas na reunião diagnóstica conduzida pela Prumo. Os campos abaixo devem ser preenchidos com os achados específicos do diagnóstico desta empresa.'),
      new Table({
        columnWidths: [2800, 5880],
        rows: [
          new TableRow({ children: [headerCell('Frente avaliada', 2800), headerCell('Situação identificada', 5880)] }),
          diagCheckRow('Estrutura', '[Resumo da situação identificada]'),
          diagCheckRow('Dependência dos sócios', '[Resumo da situação identificada]'),
          diagCheckRow('Liderança', '[Resumo da situação identificada]'),
          diagCheckRow('Processos', '[Resumo da situação identificada]'),
          diagCheckRow('Pessoas', '[Resumo da situação identificada]'),
          diagCheckRow('Alinhamento estratégico', '[Resumo da situação identificada]'),
        ],
      }),
      new Paragraph({ spacing: { before: 240, after: 0 }, children: [new TextRun({ text: ' ' })] }),
      body('Com base nesses achados, a Prumo recomenda a seguinte frente de atuação prioritária:'),
      new Paragraph({ spacing: { before: 60, after: 200 }, indent: { left: 360 },
        children: [new TextRun({ text: '[Liderança / Processos / Estratégia e alinhamento / combinação] — descrever a recomendação específica para esta empresa.', italics: true, color: GOLD, size: 22 })] }),

      pageBreak(),

      // 2. PACOTES E INVESTIMENTO
      eyebrow('Proposta de investimento'),
      h1('Pacotes de estruturação.'),
      lead('Três formatos de atuação, de acordo com a profundidade da mudança necessária. Os valores consideram o diagnóstico já realizado.'),
      new Table({
        columnWidths: [2200, 2160, 2160, 2160],
        rows: [
          new TableRow({ children: [
            headerCell('', 2200), headerCell('Essencial', 2160), headerCell('Estruturação Completa ★', 2160), headerCell('Transformação + Certificações', 2160),
          ] }),
          new TableRow({ children: [
            cell('Escopo', 2200, { bold: true }),
            cell('1 pilar prioritário', 2160),
            cell('3 pilares: Liderança, Processos e Estratégia', 2160, { fill: SAND }),
            cell('3 pilares + certificações (ESG, LGPD, Compliance)', 2160),
          ] }),
          new TableRow({ children: [
            cell('Duração estimada', 2200, { bold: true }),
            cell('2 a 3 meses', 2160),
            cell('4 a 6 meses', 2160, { fill: SAND }),
            cell('6 a 9 meses', 2160),
          ] }),
          new TableRow({ children: [
            cell('Investimento', 2200, { bold: true }),
            cell('R$ 9.500 a R$ 14.000', 2160),
            cell('R$ 28.000 a R$ 42.000', 2160, { fill: SAND, bold: true, color: GOLD }),
            cell('R$ 45.000 a R$ 65.000', 2160),
          ] }),
          new TableRow({ children: [
            cell('Indicado para', 2200, { bold: true }),
            cell('Gargalo pontual e bem definido', 2160),
            cell('Empresas com gargalos em múltiplas frentes', 2160, { fill: SAND }),
            cell('Empresas que também precisam certificar a operação', 2160),
          ] }),
        ],
      }),
      new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: '★ Pacote recomendado para esta empresa, com base no diagnóstico realizado.', italics: true, size: 20, color: GOLD })] }),
      body('Acompanhamento contínuo (opcional, pós-implementação): mensalidade de R$ 4.500, sem fidelidade mínima após os 3 primeiros meses — sustentação dos resultados, indicadores e desenvolvimento contínuo das lideranças.'),

      // 3. CONDIÇÕES COMERCIAIS
      eyebrow('Condições comerciais'),
      subhead('Forma de pagamento'),
      bullet('30% na assinatura do contrato, para início imediato do projeto'),
      bullet('Saldo restante dividido em parcelas mensais, ao longo da duração do projeto'),
      bullet('Acompanhamento contínuo (se contratado): cobrança mensal recorrente'),
      subhead('Validade'),
      body('Esta proposta é válida por 10 dias corridos a partir da data de emissão indicada na capa.'),

      pageBreak(),

      // 4. CRONOGRAMA
      eyebrow('Como vamos atuar'),
      h1('Cronograma de execução.'),
      subhead('01. Estruturação (semanas 1 a 4)'),
      body('Desenhamos, junto aos sócios, o modelo de gestão sob medida: papéis e responsabilidades, processos-chave, indicadores e rotinas de decisão.'),
      subhead('02. Implementação (semanas 5 a 12, conforme pacote)'),
      body('Colocamos o modelo em prática lado a lado com a equipe, sem relatório de gaveta — a mudança acontece no dia a dia da operação.'),
      subhead('03. Acompanhamento'),
      body('Sustentamos a mudança até que a nova estrutura funcione sem a Prumo por dentro, com autonomia real para os times.'),

      // 5. POR QUE A PRUMO
      eyebrow('Por que a Prumo'),
      subhead('Resultados que sustentam a decisão.'),
      bullet('Sócios menos dependentes do dia a dia operacional'),
      bullet('Decisões mais rápidas e descentralizadas'),
      bullet('Processos replicáveis, prontos para escalar'),
      bullet('Equipe alinhada com a estratégia do negócio'),
      bullet('Crescimento com previsibilidade, não no improviso'),
      new Paragraph({ spacing: { before: 160, after: 0 }, indent: { left: 360 },
        children: [new TextRun({ text: '"Em poucos meses, saímos da dependência total dos sócios e montamos uma liderança que toma decisões sozinha."', italics: true, color: GOLD, size: 22 })] }),
      new Paragraph({ spacing: { before: 40, after: 200 }, indent: { left: 360 },
        children: [new TextRun({ text: '— Cliente Prumo, sócio-diretor', size: 20, color: SLATE })] }),

      pageBreak(),

      // 6. PRÓXIMOS PASSOS / ACEITE
      eyebrow('Próximos passos'),
      h1('Vamos começar.'),
      body('Para confirmar o início do projeto, formalizamos o aceite desta proposta e agendamos a reunião de kickoff com os sócios e as lideranças envolvidas.'),
      bullet('1. Aceite da proposta (assinatura abaixo ou confirmação por e-mail/WhatsApp)'),
      bullet('2. Pagamento da entrada (30%)'),
      bullet('3. Agendamento da reunião de kickoff em até 5 dias úteis'),
      new Paragraph({ spacing: { before: 280, after: 8 }, children: [new TextRun({ text: 'Pacote escolhido: __________________________________________' })] }),
      new Paragraph({ spacing: { before: 0, after: 220 }, children: [new TextRun({ text: 'Investimento acordado: ____________________________________' })] }),
      new Paragraph({ spacing: { before: 220, after: 8 }, children: [new TextRun({ text: 'Assinatura (cliente): ______________________________________' })] }),
      new Paragraph({ spacing: { before: 0, after: 220 }, children: [new TextRun({ text: 'Data: ___ / ___ / ______' })] }),
      new Paragraph({ spacing: { before: 220, after: 8 }, children: [new TextRun({ text: 'Assinatura (Prumo Consultoria): ____________________________' })] }),
      new Paragraph({ spacing: { before: 160 },
        children: [new TextRun({ text: 'WhatsApp: ', bold: true }), new TextRun('+55 71 99692-1513')] }),
      new Paragraph({ spacing: { after: 200 },
        children: [new TextRun({ text: 'E-mail: ', bold: true }), new TextRun('atprumo@gmail.com')] }),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('/Users/giovanna/Claude/PRUMO/PRUMO_Proposta_Comercial.docx', buf);
  console.log('done');
});
