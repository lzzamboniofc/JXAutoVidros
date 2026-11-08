# Revisão de identidade — JX Autovidros

Revisão realizada com o **desia 2.0**, acompanhada de edição manual e validação local da versão estática.

## O que mudou

- Texto principal mais direto: dúvida sobre vidro trincado e convite para falar com a JX.
- Apresentação da loja baseada na localização real em Itu e no contato com a equipe.
- Serviços destacados pelos nomes confirmados: troca de para-brisa e de vidro traseiro.
- Perguntas frequentes com foco em informações úteis antes da visita.
- Remoção do `backdrop-filter` nos avisos de fotografias ilustrativas e de uma textura geométrica sem função no topo.
- Mantidos os botões de orçamento por WhatsApp, os links da loja e o layout responsivo.

## Resultado da auditoria

- Antes: 9 alertas, índice heurístico 21.
- Depois: 7 alertas, índice heurístico 15.

O índice do desia **não é uma nota de qualidade visual** nem determina se o site foi feito com IA.

Os alertas restantes incluem falsos positivos e informações que devem ser preservadas: avisos repetidos de **Imagem ilustrativa**, rótulos de navegação, nomes de ruas, títulos em caixa alta coerentes com a estética automotiva, texto legal do rodapé e trechos de código SVG indevidamente tratados como frases.

## Testes e limites

- Suite de testes do desia: 8/8 aprovada.
- Build Node executado localmente (`npm run build`).
- Sintaxe JavaScript validada e links internos conferidos.
- Navegador automatizado impedido pelo ambiente (`ERR_BLOCKED_BY_ADMINISTRATOR`); validação visual em tamanhos diferentes deve ser refeita quando o navegador permitir.
- Fotografias de banco permanecem **ilustrativas** até serem substituídas por material real da JX.
- Não foi acionado modo de reescrita via API externa (`--llm`) nem análise remota de imagens (`--visao-ia`).

## Origem

Ferramenta recebida no arquivo `desia-2.0(1)(2).zip`; análise conservadora com `--check --json` e revisão humana seletiva, sem alterações agressivas no código.
