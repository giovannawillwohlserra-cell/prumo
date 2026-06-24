# PRUMO CONSULTORIA — Projeto de Site Institucional
### Arquitetura, copy, design, conversão e SEO

> **Verdade central que atravessa todo o site:** *"Sua empresa cresceu mais rápido do que sua estrutura."*
> **Promessa de posicionamento:** transformar crescimento desorganizado em crescimento sustentável.
> **Conversão única (CTA mestre):** agendar uma **reunião diagnóstica**.

O arquivo `index.html` entrega tudo isto já implementado, em produção, responsivo (375 / 768 / 1280px). Este documento é o racional por trás de cada decisão.

---

## 1. ARQUITETURA DO SITE

Decisão estratégica: **one-page institucional de alta conversão**, não um site de múltiplas páginas.
Por quê? O ICP (sócio/CEO de PME) não navega — ele é conduzido por uma narrativa linear que vai da **dor → problema → solução → prova de método → convite**. Cada seção empurra para a próxima e todas convergem para o mesmo CTA.

| # | Seção | Função no funil | Estado mental do visitante |
|---|-------|-----------------|----------------------------|
| 1 | Hero | Captura + identificação imediata | "Isso é sobre mim?" |
| 2 | Os sinais (dor) | Espelho — identificação visceral | "É exatamente o que vivo." |
| 3 | O problema real | Reenquadramento (não é esforço, é estrutura) | "Então o problema tem nome." |
| 4 | Como a PRUMO ajuda (3 pilares) | Solução estruturada | "Eles sabem o caminho." |
| 5 | Metodologia | Redução de risco / credibilidade de processo | "Tem método, não é achismo." |
| 6 | Resultados esperados | Projeção de futuro (mapa de valor) | "Vale a pena chegar lá." |
| 7 | Diagnóstico (5 frentes) | Mecanismo de conversão consultivo | "Quero ver onde estou travando." |
| 8 | Sobre a PRUMO | Autoridade + propósito + proximidade | "Confio em quem está conduzindo." |
| 9 | FAQ | Quebra de objeções finais | "Não tenho mais desculpas." |
| 10 | CTA final | Conversão | "Vou agendar." |
| — | Footer | Reforço de marca + navegação | — |

---

## 2. HIERARQUIA DE NAVEGAÇÃO

Menu enxuto, com vocabulário do cliente (não jargão de consultoria):

```
PRUMO (logo → topo)
├── Sinais            → #dor          (atrai por identificação, não por "serviços")
├── O que fazemos     → #pilares
├── Metodologia       → #metodologia
├── Diagnóstico       → #diagnostico
├── Sobre             → #sobre
└── [ Agendar diagnóstico ]  ← CTA fixo, cor de destaque (dourado)
```

- Header fixo, transparente sobre o hero → vira branco/blur ao rolar (sofisticação + legibilidade).
- O CTA "Agendar diagnóstico" está **sempre visível** no header em todas as telas.
- Footer repete a navegação + contato (segunda chance de conversão).

---

## 3. WIREFRAME TEXTUAL (estrutura visual de cada seção)

```
┌─ HERO (fundo navy profundo, grid sutil, glow azul/dourado) ────────────┐
│ eyebrow: CONSULTORIA DE ESTRUTURAÇÃO ORGANIZACIONAL                     │
│ H1 (serif): Sua empresa cresceu mais rápido do que a sua [estrutura].   │
│ sub: posicionamento oficial em 1 frase                                  │
│ [Agendar reunião diagnóstica →]   [Como ajudamos]                       │
│ ── strip de 4 números: 3 pilares · 5 frentes · 10–50 · crescimento ──   │
└────────────────────────────────────────────────────────────────────────┘

┌─ OS SINAIS (fundo cinza claro) ─ grid 2 colunas, 8 cards "frase-dor" ──┐
│ cada card = aspas douradas + frase do cliente + microcopy explicativo  │
└────────────────────────────────────────────────────────────────────────┘

┌─ O PROBLEMA REAL (fundo navy) ─ 2 colunas ────────────────────────────┐
│ H2: O problema não é falta de esforço.                                 │
│ Frase-âncora grande: É falta de estrutura...                           │
│ col esquerda: narrativa | col direita: lista "crescimento sem estrutura gera" │
└────────────────────────────────────────────────────────────────────────┘

┌─ COMO A PRUMO AJUDA (fundo branco) ─ 3 cards-pilar ───────────────────┐
│ 01 Liderança | 02 Processos | 03 Estratégia                           │
│ cada um: ícone + nº + título + descrição + 4 entregáveis              │
└────────────────────────────────────────────────────────────────────────┘

┌─ METODOLOGIA (cinza claro) ─ 4 steps horizontais com barra animada ───┐
│ 01 Diagnóstico → 02 Estruturação → 03 Implementação → 04 Acompanhamento│
└────────────────────────────────────────────────────────────────────────┘

┌─ RESULTADOS (branco) ─ 2 colunas ─────────────────────────────────────┐
│ esquerda: cadeia de valor 1→6 (mapa de valor)                         │
│ direita: 6 cards de resultado concreto                                 │
└────────────────────────────────────────────────────────────────────────┘

┌─ DIAGNÓSTICO (navy profundo) ─ 5 cards das frentes avaliadas ─────────┐
│ Estrutura · Dependência dos sócios · Liderança · Processos · Alinhamento│
│ ▸ faixa-CTA destacada: "Descubra onde sua estrutura está travando"     │
└────────────────────────────────────────────────────────────────────────┘

┌─ SOBRE (branco) ─ 2 colunas ──────────────────────────────────────────┐
│ esquerda: história + propósito + diferenciais + citação-âncora        │
│ direita: 4 valores (Credibilidade · Estrutura · Crescimento · Proximidade)│
└────────────────────────────────────────────────────────────────────────┘

┌─ FAQ (cinza claro) ─ accordion centralizado, 6 perguntas ─────────────┐
└────────────────────────────────────────────────────────────────────────┘

┌─ CTA FINAL (navy) ─ centralizado ─────────────────────────────────────┐
│ H2 + parágrafo + [Agendar minha reunião diagnóstica →] [E-mail]        │
│ microcopy de reasseguramento (sem compromisso)                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. ESTRUTURA VISUAL / DESIGN SYSTEM

**Direção:** corporativo premium, minimalista, muito espaço em branco — referência Falconi / McKinsey, mas com calor de PME brasileira. Sem cara de agência, sem cara de startup.

### Paleta
| Token | Hex | Uso |
|-------|-----|-----|
| Navy profundo | `#071A2F` | fundos de seção "âncora" (hero, problema, diagnóstico, CTA) |
| Navy | `#0A2540` | títulos, fundo problema |
| Grafite | `#1F2933` | corpo de texto |
| Slate | `#52606D` | textos de apoio |
| Branco / Mist | `#FFFFFF` / `#F6F8FA` | respiro, alternância de seções |
| Azul aço (acento) | `#3D7DCA` | ícones, detalhes — uso contido |
| Dourado (premium) | `#C2A36B` | **único** acento de status: CTAs, marcadores, linhas. Sinaliza valor sem gritar |

> Regra de ouro aplicada: **uma cor de ação só**. O dourado é exclusivo dos elementos de conversão e acento — isso treina o olho do visitante a associar "dourado = ação".

### Tipografia
- **Display:** `Fraunces` (serifada, óptica) — gravidade, autoridade, "casa estabelecida". Usada em todos os H1–H4.
- **Texto:** `Inter` — neutra, legível, corporativa moderna.
- Eyebrows em caixa alta, tracking largo, com filete dourado → assinatura visual consistente.

### Ritmo e movimento (contido, executivo)
- Alternância de seções claras/escuras cria respiração e hierarquia.
- `reveal on scroll` suave (fade + subida de 26px), barras de metodologia que preenchem, hover discreto nos cards. Nada de motion "startupeiro".

---

## 5. COPY COMPLETA

A copy integral está implementada no `index.html`. Resumo dos textos-chave por seção:

- **Hero H1:** *Sua empresa cresceu mais rápido do que a sua estrutura.*
- **Hero sub:** posicionamento oficial literal.
- **Dor:** as 8 dores convertidas em frases na voz do cliente (1ª pessoa) + microcopy de contexto.
- **Problema real:** *"O problema não é falta de esforço. É falta de estrutura."*
- **Pilares:** Liderança / Processos / Estratégia e alinhamento, com os entregáveis exatos do briefing.
- **Metodologia:** Diagnóstico → Estruturação → Implementação → Acompanhamento.
- **Resultados:** mapa de valor (6 elos) + 6 resultados concretos.
- **Diagnóstico:** as 5 frentes (Estrutura, Dependência dos sócios, Liderança, Processos, Alinhamento estratégico) em forma de perguntas.
- **Sobre:** história, propósito, diferenciais e a citação-âncora.
- **CTA final:** convite à reunião diagnóstica + reasseguramento.

Tom em toda a copy: **consultivo, executivo, claro, objetivo, autoridade sem arrogância, sem jargão, sem promessa milagrosa, sem motivacional** — exatamente o tom de voz especificado.

---

## 6. CTAs (hierarquia e racional)

| CTA | Onde | Tipo | Racional |
|-----|------|------|----------|
| **Agendar diagnóstico** | header (fixo) | Primário (dourado) | sempre disponível |
| **Agendar reunião diagnóstica** | hero | Primário | conversão acima da dobra |
| **Como ajudamos** | hero | Secundário | para quem ainda não está pronto → mantém na página |
| **Agendar diagnóstico** | faixa do Diagnóstico | Primário | converte no pico de identificação |
| **Agendar minha reunião diagnóstica** | CTA final | Primário | fechamento |
| **Falar por e-mail** | CTA final | Secundário | canal alternativo (reduz fricção) |

> **Todos os CTAs primários levam à mesma ação** (reunião diagnóstica). Um único objetivo de conversão = mensagem sem dispersão.
> No HTML, os botões apontam para `wa.me` (WhatsApp) e `mailto:` como placeholders — **trocar pelos canais reais** (link do Calendly/WhatsApp da PRUMO e e-mail oficial).

---

## 7. FAQ (objeções que ela quebra)

1. **"A PRUMO vende consultoria?"** → ativa o modelo de diagnóstico (não-venda).
2. **"Para que tipo de empresa?"** → o ICP se reconhece (10–50, informal, sócio na operação).
3. **"Diferença de um treinamento/curso?"** → estrutura vs. conteúdo.
4. **"Quanto tempo para ver resultado?"** → expectativa realista, sem promessa.
5. **"Vou ter que parar a operação?"** → remove o medo de disrupção.
6. **"Como começa?"** → reduz a barreira final → reunião diagnóstica.

---

## 8. ESTRATÉGIA DE CONVERSÃO

1. **Identificação antes de oferta.** O visitante vê suas próprias dores (seção 2) antes de qualquer pitch — gera o "isso é sobre mim".
2. **Reenquadramento.** O problema deixa de ser culpa ("não me esforço") e ganha nome ("falta estrutura") → tira o peso emocional e cria abertura.
3. **Diagnóstico como porta de entrada (não venda).** O CTA não é "contrate", é "descubra onde está travando" — baixíssima fricção, alinhado ao método consultivo.
4. **Prova de método, não de ego.** Sem cases inventados; a credibilidade vem da clareza do processo (metodologia em 4 passos + 5 frentes do diagnóstico).
5. **Um único objetivo de conversão**, repetido em 4 pontos da jornada (hero, diagnóstico, CTA final, header fixo).
6. **Reasseguramento na hora do clique:** "sem compromisso de contratação · foco em clareza, não em venda" → derruba a última objeção.
7. **Quando houver dados:** acrescentar prova social (logos de clientes, depoimento de sócio, 1 número de resultado real). O layout já reserva o lugar natural (entre Resultados e Diagnóstico).

---

## 9. SUGESTÕES DE IMAGENS

Direção fotográfica: **realista, sóbria, corporativa brasileira** — luz natural, tons frios/neutros, nada de banco de imagens "sorriso forçado". Preferir foto real da PRUMO/clientes quando possível.

| Seção | Sugestão | Tratamento |
|-------|----------|-----------|
| Hero | (mantido só com gráfico/grid — opcional: foto de sócios em reunião de gestão, lado direito, com overlay navy) | Overlay navy 70%, dessaturado |
| Problema real | Detalhe arquitetônico de estrutura (vigas, andaime, planta baixa) como metáfora visual de "estrutura" | Monocromático azul |
| Pilares | Ícones (já implementados) — opcionalmente 1 foto por pilar: reunião de líderes / fluxo de trabalho / quadro de planejamento | — |
| Metodologia | Manter gráfico de steps; opcional: foto discreta de workshop com a equipe | — |
| Sobre | Foto real do(s) consultor(es) ou da PRUMO em campo (autoridade humana) | Cor sóbria, fundo neutro |
| CTA final | Textura/abstração arquitetônica de linhas convergindo (sensação de direção/prumo) | — |

**Conceito visual da marca:** o "prumo" (fio de prumo / nível) — linhas verticais, retidão, alinhamento. Já está sugerido no logo (P + linha-prumo + ponto) e nos grids. Usar consistentemente.

---

## 10. SUGESTÕES DE ÍCONES

Estilo: **line icons, traço fino (1.5px), cantos vivos, dois tons (azul aço + detalhe dourado)** — já implementados em SVG inline no HTML. Biblioteca recomendada para expansão: **Lucide** ou **Phosphor (regular)**.

| Contexto | Ícone |
|----------|-------|
| Liderança | pessoa + elevação / mentoria |
| Processos | blocos conectados / fluxo |
| Estratégia | alvo / bússola |
| Estrutura (diagnóstico) | edifício / pilares |
| Dependência dos sócios | pessoa central |
| Alinhamento | bússola / direção |
| Credibilidade | escudo + check |
| Crescimento | gráfico ascendente |
| Proximidade | globo / conexão |

> **Sem emojis** em nenhum ponto — coerente com o tom executivo.

---

## 11. SEO BÁSICO POR SEÇÃO

**Title:** `PRUMO Consultoria — Estrutura que sustenta o próximo nível de resultados`
**Meta description:** já implementada (foco em "empresas em crescimento", "lideranças, processos, alinhamento", "diagnóstico").
**Schema.org:** `ProfessionalService` implementado (nome, descrição, áreas, slogan).

| Seção | H principal | Palavra-chave alvo | Intenção |
|-------|-------------|--------------------|----------|
| Hero | H1: Sua empresa cresceu mais rápido do que sua estrutura | *estruturação organizacional, consultoria empresa em crescimento* | topo / branding |
| Dor | H2: Você reconhece a sua empresa…? | *empresa cresceu desorganizada, gargalos de gestão* | identificação |
| Problema | H2: O problema não é falta de esforço | *crescimento sem estrutura, profissionalização da gestão* | educação |
| Pilares | H2: Três pilares… | *desenvolvimento de lideranças, organização de processos, alinhamento estratégico* | serviço (alto valor SEO) |
| Metodologia | H2: Um caminho claro… | *metodologia de consultoria de gestão, diagnóstico empresarial* | confiança |
| Resultados | H2: Quando pessoas e estratégia caminham juntas | *resultados de consultoria, gestão profissional* | decisão |
| Diagnóstico | H2: A PRUMO não começa vendendo. Começa diagnosticando | *diagnóstico empresarial, diagnóstico de gestão* | conversão |
| Sobre | H2: Crescimento é mérito. Sustentá-lo é estrutura | *consultoria de estruturação, PRUMO consultoria* | marca |
| FAQ | H2: O que você precisa saber | *long-tail: "para que serve consultoria de gestão", "como começar consultoria"* | captura de busca |

**Recomendações técnicas adicionais:**
- 1 só H1 por página (✔ no hero).
- Hierarquia H1 > H2 > H3/H4 respeitada (✔).
- `lang="pt-BR"`, OG tags, viewport, fonts com preconnect (✔).
- Adicionar quando publicar: favicon, `og:image` (1200×630), `og:url`, sitemap.xml, robots.txt, e Google Search Console / GA4.
- Performance: fontes já com `display=swap`; considerar self-host das fontes e lazy-load das imagens reais.

---

## 12. PRÓXIMOS PASSOS PARA PUBLICAR

1. **Trocar os links de CTA** (`wa.me` e `mailto:`) pelos canais reais da PRUMO (Calendly/WhatsApp/e-mail).
2. Inserir **foto real** (sócios/consultor) na seção Sobre — eleva a autoridade.
3. Adicionar, quando houver, **1 depoimento + logos de clientes** (espaço previsto entre Resultados e Diagnóstico).
4. Registrar **domínio** (sugestão: `prumoconsultoria.com.br`) e publicar (Vercel/Netlify resolvem em minutos para arquivo único).
5. Configurar **GA4 + Search Console** e um evento de conversão no clique dos CTAs.

---

*Arquivo do site:* `index.html` — pronto, responsivo, copy 100% preenchida, sem placeholders de texto.
