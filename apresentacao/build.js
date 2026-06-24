const pptxgen = require('pptxgenjs');
const html2pptx = require('./html2pptx');

async function main() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Prumo Consultoria';
  pptx.title = 'Prumo — Apresentação Comercial';

  const files = [
    'slides/01-capa.html',
    'slides/02-sinais.html',
    'slides/03-problema.html',
    'slides/04-pilares.html',
    'slides/05-metodologia.html',
    'slides/06-diagnostico.html',
    'slides/07-resultados.html',
    'slides/08-sobre-cta.html',
  ];

  for (const f of files) {
    await html2pptx(f, pptx);
  }

  await pptx.writeFile({ fileName: 'PRUMO_Apresentacao_Comercial.pptx' });
  console.log('done');
}

main().catch(e => { console.error(e); process.exit(1); });
