# PRUMO — Resumo de continuidade do projeto
> Abra um novo chat do Claude Code **dentro da pasta `/Users/giovanna/Claude/PRUMO`** e comece dizendo: *"Leia o CONTINUAR-AQUI.md e o index.html e continue o projeto do site da Prumo de onde paramos."*
> Assim o contexto da PRUMO fica separado do FLEX ON.

_Última atualização: 22/06/2026_

---

## 1. O QUE É O PROJETO
Site institucional + identidade de comunicação da **Prumo Consultoria** — consultoria de **estruturação organizacional** para empresas em crescimento.

**Posicionamento oficial:** Ajudamos empresas em crescimento a construir a estrutura que sustenta o próximo nível de resultados, por meio do desenvolvimento de lideranças, da organização de processos e do alinhamento das pessoas à estratégia.

**Verdade central (atravessa o site):** *"Sua empresa cresceu mais rápido do que sua estrutura."*

**Conversão única (CTA mestre):** agendar uma **reunião diagnóstica** (vai direto pro WhatsApp).

**Tom de voz:** consultivo, executivo, claro, autoridade sem arrogância. Sem jargão, sem promessa milagrosa, sem motivacional. Sem emojis.

---

## 2. ARQUIVOS NA PASTA
- `index.html` — **o site** (one-page, produção, tema claro, responsivo, animado). É o arquivo principal.
- `logo.png` — logo oficial **já recortada** (sem o espaço vazio do original). Usada no topo e rodapé.
- `LOGO PRUMO.png` — logo original (1536×1024, com muito espaço transparente). NÃO usar direto; usar `logo.png`.
- `ESTRATEGIA-SITE-PRUMO.md` — documento estratégico (arquitetura, SEO, conversão, wireframe). _Obs.: foi escrito antes dos últimos enxugamentos; precisa de atualização quando sobrar tempo._
- `PRUMO_Proposta_Comercial (1).docx` — proposta comercial (material separado).
- `CONTINUAR-AQUI.md` — este arquivo.

**Como ver o site:** abrir `index.html` no navegador, ou rodar `python3 -m http.server 8080` na pasta e abrir `http://localhost:8080`. Hard-refresh = Cmd+Shift+R.

---

## 3. IDENTIDADE VISUAL (já implementada no index.html)
- **Tema claro** (a cliente rejeitou o escuro/azul). Fundos branco / off-white quente (creme/areia).
- **Paleta:** preto suave `#1A1A1A` (texto), off-white `#FAF8F4`, areia `#F3EEE6`, **dourado `#B8995F` (único acento de ação)**. Quase nenhum azul.
- **Tipografia:** títulos em `Fraunces` (serifada), corpo em `Inter`, marca em `Sacramento` (fallback manuscrito quando a logo não carrega).
- **Logo grande** no topo (120px de altura; 78px ao rolar). Importante: a logo só ficou grande depois de **recortar o espaço vazio** do arquivo original.
- **Animações** (skill design-motion-principles): barra de progresso de scroll, aurora animada + grid no hero, faixa marquee de palavras-chave, revelação em cascata (stagger), brilho nos botões, micro-interações nos cards. Tudo com `prefers-reduced-motion`.

---

## 4. ESTRUTURA ATUAL DO SITE (enxugada para mobile)
A cliente pediu para o site conter **apenas o essencial**: quem somos, o que fazemos, como fazemos e a estratégia de atração/venda. O detalhamento foi movido para apresentação comercial / proposta.

Ordem das seções:
1. **Hero** — promessa + 2 CTAs (WhatsApp / Como ajudamos).
2. **Os sinais** (`#dor`) — atração: 4 dores na voz do cliente + frase-ponte ("não é falta de esforço, é falta de estrutura").
3. **O que fazemos** (`#pilares`) — 3 pilares: Liderança / Processos / Estratégia e alinhamento.
4. **Certificações** (`#certificacoes`) — ESG, LGPD, Compliance Trabalhista (certifica) + GPTW (suporte). Seção em fundo escuro (contraste pontual).
5. **Como fazemos** (`#metodologia`) — 4 etapas densas: Diagnóstico / Estruturação / Implementação / Acompanhamento.
6. **Diagnóstico** (`#diagnostico`) — 6 frentes avaliadas: Estrutura, Dependência dos sócios, Liderança, Processos, **Pessoas (psicologia positiva)**, Alinhamento estratégico + faixa-CTA.
7. **Quem somos** (`#sobre`) — história, propósito, 4 valores (Credibilidade, Estrutura, Crescimento, Proximidade).
8. **FAQ** (`#faq`) — 6 perguntas.
9. **CTA final** (`#contato`) — reunião diagnóstica.
10. **Rodapé**.

**Removido do site (mover para apresentação/proposta):** seção "O problema real" (narrativa longa) e "Resultados esperados" (mapa de valor + 6 cards). As 4 dores extras que foram cortadas dos "Sinais" também podem entrar na apresentação.

---

## 5. DADOS REAIS
- **WhatsApp:** +55 71 99692-1513 → todos os botões "Agendar" levam para `https://wa.me/5571996921513?text=...`
- **E-mail:** atprumo@gmail.com
- **Serviços:** os 3 pilares + certificações (ESG, LGPD, Compliance Trabalhista, suporte GPTW) + alocação de pessoas por **psicologia positiva**.
- **Diferencial de pessoas:** avaliamos perfis/talentos e colocamos cada pessoa na posição em que rende mais, com base na psicologia positiva.

---

## 6. DECISÕES / CORREÇÕES JÁ FEITAS PELA CLIENTE (não repetir os erros)
- ❌ NÃO usar tema escuro/azul. Site é **claro**.
- ❌ NÃO descrever o público por "10 a 50 colaboradores" nem por faturamento no site (ela rejeitou esse recorte no FAQ). Descrever o ICP por **momento/sintomas** (cresceu e a estrutura ficou para trás).
- ❌ NÃO deixar o site longo demais ("livro eterno" no celular). Manter enxuto.
- ✅ Logo grande e recortada.
- ✅ Diagnóstico mapeia **estrutura, processos, pessoas e produto**.
- ✅ Sem emojis.

---

## 7. PRÓXIMOS PASSOS SUGERIDOS (pendências)
1. **Atualizar `ESTRATEGIA-SITE-PRUMO.md`** para refletir a estrutura enxugada + certificações + frente Pessoas.
2. Logo do rodapé em **versão branca real** (hoje usa filtro CSS).
3. **Favicon** a partir do círculo da logo.
4. ~~Adicionar prova social~~ — **feito** (22/06): seção `#prova-social` no `index.html`, com depoimento e logos em placeholder (substituir quando houver conteúdo real).
5. **Publicar** (Vercel/Netlify) + domínio (sugestão: prumoconsultoria.com.br) + GA4. **Em andamento** — ver seção 8 (registro de domínio + SEO).
6. ~~Montar apresentação comercial e proposta~~ — **feito** (22/06): `PRUMO_Apresentacao_Comercial.pptx` (8 slides) e `PRUMO_Proposta_Comercial.docx` (nova versão completa), ambos na raiz da pasta. Fontes de trabalho em `apresentacao/` e `proposta/` (scripts Node — não precisam ser versionados/entregues ao cliente).

## 8. REGISTRO DE DOMÍNIO + SEO (em andamento — 23/06)
Objetivo do cliente: registrar um domínio próprio e aparecer bem quando alguém pesquisar por "consultoria" (+ variações de estruturação organizacional). Plano e progresso devem ser registrados aqui à medida que avançarmos.
