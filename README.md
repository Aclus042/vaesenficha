# Ficha de Personagem Digital - Vaesen

Este projeto é uma implementação completa de uma ficha de personagem digital para o sistema de RPG **Vaesen**, criada com HTML, CSS e JavaScript vanilla. O design foi cuidadosamente desenvolvido para capturar a atmosfera gótica e nórdica do livro original de Johan Egerkrans, reproduzindo fielmente a estética visual característica do jogo.

## 🎨 Design Inspirado no Livro Original

### Estética Visual Autêntica
- **Arte Nórdica Vintage**: Inspirado nas gravuras e ilustrações de Johan Egerkrans
- **Paleta de Cores Authentic**: Tons de pergaminho, dourado envelhecido e preto profundo
- **Elementos Decorativos**: Ornamentos, bordas duplas e símbolos místicos
- **Tipografia de Época**: Fontes serifadas que remetem a manuscritos do século XIX
- **Texturas de Papel**: Efeitos visuais que simulam papel envelhecido e pergaminho

### Elementos Visuais Únicos
- **Bordas Ornamentadas**: Elementos decorativos em estilo Art Nouveau nórdico
- **Símbolos Místicos**: ❦, ◆, ◇ usados como elementos decorativos
- **Efeitos de Profundidade**: Sombras e bordas múltiplas criando sensação de camadas
- **Padrões Sutis**: Texturas de fundo que simulam papel antigo
- **Animações Suaves**: Transições que mantêm a elegância visual

## 🎯 Características Principais

### ✨ Interface Completa e Imersiva
- **Design Gótico Autêntico**: Reproduz fielmente a atmosfera do livro
- **Layout Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tipografia Temática**: Crimson Text e Cinzel para máxima autenticidade
- **Paleta Nórdica**: Cores que capturam o espírito do horror nórdico do século XIX

### 🎲 Funcionalidades do Sistema
- **Sistema de Idade Dinâmico**: Pontos ajustados automaticamente com feedback visual
- **Validação Inteligente**: Controle de pontos com animações e alertas visuais
- **Tabela D66 Completa**: 36 souvenirs únicos com descrições atmosféricas
- **Relacionamentos Dinâmicos**: Sistema flexível para PJs
- **Recursos Detalhados**: 8 níveis com descrições completas do período

### 💾 Gerenciamento Avançado
- **Salvamento Automático**: Persistência local no navegador
- **Exportar/Importar**: Sistema JSON robusto para backup
- **Múltiplas Opções**: Carregamento de arquivo ou armazenamento local
- **Reset Seguro**: Confirmação antes de limpar dados

## 🚀 Como Usar

### Instalação
1. Faça o download dos arquivos `index.html`, `styles.css` e `script.js`
2. Coloque todos os arquivos na mesma pasta
3. Abra o arquivo `index.html` em qualquer navegador moderno

### Criando um Personagem

#### 1. Informações Básicas
- **Nome**: Digite o nome do seu personagem
- **Idade**: Selecione a faixa etária (clique no ℹ️ para ver tabela de pontos)
- **Arquétipo**: Escolha entre 12 arquétipos disponíveis
- **Motivação**: Defina o que move seu personagem
- **Trauma**: Descreva experiências traumáticas
- **Segredo Sombrio**: Um segredo que o personagem esconde

#### 2. Atributos
- Distribua pontos entre **Físico**, **Precisão**, **Lógica** e **Empatia**
- Os pontos disponíveis variam conforme a idade selecionada
- O contador mostra pontos usados/disponíveis em tempo real

#### 3. Perícias
- 12 perícias organizadas por atributo base
- Pontos disponíveis variam conforme a idade
- Valores de 0-3 por perícia

#### 4. Talentos
- Três slots de talentos
- Opções mudam conforme o arquétipo selecionado
- Cada arquétipo tem talentos únicos e temáticos

#### 5. Recursos
- Escala de 1-8 representando poder econômico
- Clique no ℹ️ para descrições detalhadas de cada nível

#### 6. Relacionamentos
- Adicione quantos relacionamentos precisar
- Campos para nome e descrição
- Botão ❌ para remover relacionamentos

#### 7. Equipamentos
- **Gerais**: Equipamentos diversos
- **Armas**: Arsenal do personagem
- **Armadura**: Proteções
- **Souvenir**: Use o botão 🎲 para rolar na tabela D66

#### 8. Condições
- **Físicas**: Ferido, Gravemente Ferido, Incapacitado, Morrendo
- **Mentais**: Perturbado, Assombrado, Demente, Insano

### Gerenciando Fichas

#### Salvar
- Clique em **💾 Salvar** para armazenar no navegador
- Os dados ficam salvos mesmo fechando o browser

#### Carregar
- **📁 Carregar** busca primeiro por arquivos JSON
- Se não selecionar arquivo, carrega do armazenamento local

#### Exportar
- **📤 Exportar** gera arquivo JSON para download
- Nomeado automaticamente como "nome_vaesen.json"

#### Nova Ficha
- **🆕 Nova Ficha** limpa todos os campos
- Solicita confirmação para evitar perda de dados

## 🎲 Sistema de Souvenirs D66

A tabela D66 inclui 36 souvenirs únicos e misteriosos:
- **Rolagem Automática**: Dois dados de 6 faces
- **Descrições Evocativas**: Cada item tem descrição atmosférica
- **Aceitar/Rolar Novamente**: Flexibilidade na escolha

Exemplos de souvenirs:
- "Uma moeda antiga e desgastada"
- "Um relógio de bolso parado"
- "Um objeto que muda quando não observado"

## 📱 Responsividade

O design se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Colunas reduzidas, elementos reorganizados
- **Mobile**: Layout em coluna única, botões empilhados

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Grid Layout, Flexbox, animações suaves
- **JavaScript ES6+**: Classes, arrow functions, async/await
- **Google Fonts**: Crimson Text e Cinzel
- **Local Storage**: Persistência de dados
- **JSON**: Formato de exportação/importação

## 🎨 Estilo Visual

### Paleta de Cores Autêntica
- **Primária**: `#1a1a1a` (preto profundo)
- **Secundária**: `#2d2d2d` (cinza escuro)
- **Accent**: `#b8860b` (dourado envelhecido)
- **Background**: `#f4f1e8` (pergaminho claro)
- **Paper**: `#faf8f1` (papel antigo)
- **Bordas**: `#8b6914` (dourado escuro)

### Tipografia de Época
- **Títulos**: Cinzel (serifada, elegante, estilo gravura)
- **Corpo**: Crimson Text (serifada, legível, período histórico)
- **Hierarquia**: Sistema responsivo e orgânico

### Efeitos Visuais Autênticos
- **Bordas Múltiplas**: Simulam molduras ornamentadas
- **Sombras Profundas**: Criam sensação de camadas e profundidade
- **Texturas Sutis**: Padrões que remetem a papel envelhecido
- **Gradientes Orgânicos**: Transições naturais e elegantes
- **Elementos Decorativos**: Símbolos e ornamentos do período

## 🔧 Funcionalidades Técnicas

### Validação
- Pontos de atributos limitados por idade
- Pontos de perícias limitados por idade  
- Valores mínimos/máximos respeitados
- Feedback visual (cores) para status

### Performance
- JavaScript modular e eficiente
- CSS otimizado sem dependências
- Carregamento rápido de fontes
- Lazy loading de eventos

### Acessibilidade
- Labels semânticos em todos os campos
- Contraste adequado de cores
- Navegação por teclado
- Aria-labels onde necessário

## 📋 Estrutura de Dados

```json
{
  "name": "Nome do Personagem",
  "age": "adulto",
  "archetype": "detetive",
  "motivation": "Descobrir a verdade",
  "trauma": "Perda de ente querido",
  "darkSecret": "Segredo oculto",
  "attributes": {
    "fisico": 3,
    "precisao": 4,
    "logica": 5,
    "empatia": 4
  },
  "skills": {
    "briga": 1,
    "investigacao": 3,
    // ... outras perícias
  },
  "talents": ["Investigador", "Dedutivo", "Observador"],
  "resourceLevel": "5",
  "relationships": [
    {
      "name": "Maria Silva",
      "description": "Parceira de investigação"
    }
  ],
  "equipment": {
    "general": "Caderno, lupa, lanterna",
    "weapons": "Revólver .38",
    "armor": "Casaco de couro",
    "souvenir": "Uma chave sem fechadura conhecida"
  },
  "conditions": {
    "physical": [false, false, false, false],
    "mental": [false, false, false, false]
  }
}
```

## 🚀 Possíveis Melhorias Futuras

- **Modo Escuro**: Toggle entre temas claro/escuro
- **Impressão**: CSS otimizado para impressão
- **Calculadora de Dados**: Sistema de rolagem integrado
- **Múltiplas Fichas**: Gerenciar vários personagens
- **Backup em Nuvem**: Sincronização online
- **Grupos**: Compartilhamento entre jogadores
- **Histórico**: Versionamento de mudanças
- **Templates**: Personagens pré-prontos

## 📞 Suporte

Este é um projeto independente criado para a comunidade de RPG. Para reportar bugs ou sugerir melhorias, sinta-se à vontade para entrar em contato.

---

**Desenvolvido com ❤️ para a comunidade Vaesen**

*"Em cada sombra, uma história. Em cada história, um mistério."*
