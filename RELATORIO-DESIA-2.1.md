# Auditoria do site JX Autovidros — Desia 2.1

Revisão da versão de desenvolvimento da JX Autovidros, baseada no pacote já revisado com Desia 2.0.

## Execução

- Ferramenta: **Desia 2.1 Revisado Completo**.
- Testes da ferramenta: **27/27 aprovados**.
- Auditoria estática: **17 arquivos**, **nenhuma modificação automática**.
- Índice heurístico de avisos: **15 → 15**; **7 avisos** mantidos.
- Build da versão Node.js: **aprovado** (`npm run build`).
- JavaScript: **sintaxe verificada**.
- Âncoras internas: **nenhum destino ausente**.
- Revisão visual automatizada: **não concluída**, pois a política do navegador bloqueou a abertura do arquivo local (`ERR_BLOCKED_BY_ADMINISTRATOR`).

O índice é uma soma de alertas, não uma nota estética ou uma medida de conversão.

## Avaliação dos sete avisos

- Avisos de **Imagem ilustrativa** são mantidos por transparência; as fotografias são de banco e não podem ser apresentadas como serviços realizados pela JX.
- Menções ao endereço **Av. Caetano Ruggieri** e links de **Início/Serviços** aparecem em contextos úteis, como contato e menus.
- A expressão **qual vidro** é pertinente ao processo de orçamento automotivo.
- O aviso relativo aos títulos em caixa alta é subjetivo; a tipografia está alinhada à marca automotiva.
- Dois supostos slogans detectados são falsos positivos: um texto de **direitos reservados** e um **caminho SVG**.

Nenhum dos sete achados justifica alterações automáticas que possam piorar a comunicação, ocultar informações ou prejudicar funcionalidades.

## Ajustes técnicos complementares

- O sitemap passa a listar **apenas a página inicial**. A página de privacidade está marcada como **noindex** e foi removida do sitemap.
- Atualizados os metadados de compartilhamento nas páginas `404.html` e `privacidade.html`, usando a imagem da marca que já existe no repositório.
- Acrescentada a URL canônica da página de privacidade.
- A fonte Node.js do ZIP atualizado possui `urlPublica` configurado para o GitHub Pages e gera o mesmo destino de Open Graph e sitemap.
- A arquitetura de publicação estática (branch `main`, pasta `/root`) foi mantida.

## Pendências de conteúdo

Horário de funcionamento, e-mail, imagens reais do estabelecimento, galeria e avaliações verificáveis ainda dependem de confirmação. As fotografias ilustrativas continuam usando a CDN do Pexels.

**Próximo teste recomendado:** validar visualmente o site publicado em celular, tablet e desktop e conferir a abertura de imagens externas e botões de contato. O ambiente desta execução não permitiu teste visual automatizado.
