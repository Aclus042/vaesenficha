const talentos = {
  academica: [
    {
      nome: "Rato de Biblioteca",
      descricao: "Receba +2 em APRENDIZADO quando procurar pistas em livros ou bibliotecas."
    },
    {
      nome: "Erudição",
      descricao: "Você pode passar em um teste de APRENDIZADO para estabelecer verdades sobre locais e fenômenos no jogo. Você pode saber que um certo local é renomado por seus vidraceiros, ou que uma gangue de criminosos opera na área. A Mestre de Jogo julga o que for apropriado e o que é razoável que você saiba. Você não deve ter permissão de inventar coisas sobre os vaesen."
    },
    {
      nome: "Saber é Reconfortante",
      descricao: "Ignore Condições ao fazer testes de APRENDIZADO."
    }
  ],
  andarilho: [
    {
      nome: "Truques de Mendigos",
      descricao: "Receba +2 em FURTIVIDADE ao tentar esconder um objeto ou a si mesmo de um humano rico."
    },
    {
      nome: "Desconfiança",
      descricao: "Ignore condições mentais ao fazer testes de VIGILÂNCIA."
    },
    {
      nome: "Viajado",
      descricao: "Uma vez por mistério, você pode fazer um teste de MANIPULAÇÃO para criar uma PNJ situada na região, e a quem já tenha encontrado antes. A Mestre de Jogo decide como ela mudou desde que vocês se encontraram e o que ela pensa de você agora. Se o teste falhar, ela ou é hostil ou precisa muito da sua ajuda."
    }
  ],
  caçadora: [
    {
      nome: "Cão de Caça",
      descricao: "Receba +2 em VIGILÂNCIA quando rastrear sua presa."
    },
    {
      nome: "Herbalismo",
      descricao: "Ao usar ervas selvagens, você pode usar MEDICINA sem ter acesso a suprimentos médicos."
    },
    {
      nome: "Pontaria",
      descricao: "Receba +2 em COMBATE À DISTÂNCIA na sua primeira rodada quando você conseguir emboscar ou atacar seu inimigo."
    }
  ],
  detetiveParticular: [
    {
      nome: "Olhos de Águia",
      descricao: "Você recebe +2 em VIGILÂNCIA quando tentar interpretar uma situação na qual não tenha envolvimento."
    },
    {
      nome: "Elementar",
      descricao: "Uma vez por sessão, você pode pedir à Mestre de Jogo para explicar como as pistas estão conectadas."
    },
    {
      nome: "Foco",
      descricao: "Ignore penalidades de Condições ao fazer testes de INVESTIGAÇÃO."
    }
  ],
  escritora: [
    {
      nome: "Escrita Automática",
      descricao: "Ao canalizar espíritos por meio da escrita automática, você pode usar INSPIRAÇÃO para receber pistas. A Mestre de Jogo fornece pistas mais ou menos vagas, predições sobre o futuro ou revelações momentâneas sobre os pensamentos e experiências dos seus inimigos. Sucessos extras revelam mais pistas. Em uma falha, a Mestre decide se você sofre uma Condição, fica possuída ou passa por uma mudança de personalidade (você decide de que tipo) que dura 1D6 horas. Você pode usar a Escrita Automática uma vez por sessão de jogo."
    },
    {
      nome: "Jornalismo",
      descricao: "Você pode usar INSPIRAÇÃO em vez de MANIPULAÇÃO ao encantar ou enganar alguém para obter informações."
    },
    {
      nome: "Jeito com as Palavras",
      descricao: "Ignore penalidades de Condições ao fazer testes de INSPIRAÇÃO."
    }
  ],
  medica: [
    {
      nome: "Médica de Campo",
      descricao: "Receba +2 em testes de Medo quando amedrontada por cadáveres ou corpos humanos feridos."
    },
    {
      nome: "Médica Chefe",
      descricao: "Quando usar MEDICINA para tratar outras personagens jogadoras, elas podem curar um total de quatro Condições em vez de três. O mesmo se aplica aos sucessos extras."
    },
    {
      nome: "Medicina Emergencial",
      descricao: "Ignore Condições físicas ao usar Medicina."
    }
  ],
  ocultista: [
    {
      nome: "Truques de Mágica",
      descricao: "Você pode usar FURTIVIDADE em vez de MANIPULAÇÃO ao realizar truques para influenciar as pessoas."
    },
    {
      nome: "Médium",
      descricao: "Você pode usar OBSERVAÇÃO para realizar séances nos quais você prevê os futuros das pessoas e entra em contato com os mortos. Sucessos extras fornecem mais informações, prolongam o contato ou fazem os espíritos se materializarem. Em uma falha, você recebe informações imprecisas, sofre um ataque ou uma Condição."
    },
    {
      nome: "Amedrontar",
      descricao: "Você pode amedrontar com Medo 1 (veja a página 68). Isso conta como uma ação lenta e não funciona contra os vaesen. Escolha uma vítima na sua zona. PNJs alvo devem passar em um teste de Lógica ou de Empatia. A rolagem delas recebe um bônus de dados igual ao número de indivíduos amigáveis na mesma zona."
    }
  ],
  oficial: [
    {
      nome: "Veterano de Guerra",
      descricao: "Você está acostumado à batalha. Ao sacar cartas na iniciativa, saque duas cartas e escolha uma delas (veja o capítulo 5)."
    },
    {
      nome: "Cavalheirismo",
      descricao: "Você recebeu treinamento para ocultar suas emoções e se comportar em situações sociais, mesmo sob pressão. Ignore penalidades de Condições mentais ao fazer testes de MANIPULAÇÃO."
    },
    {
      nome: "Estrategista",
      descricao: "Quando você passar em um teste de COMBATE A DISTÂNCIA durante o combate e tiver sucessos extras, você pode, além das alternativas normais, dar uma ordem a uma personagem amiga. Fazer isso custa um sucesso. Se ela seguir sua ordem, ela recebe +2 em seu próximo teste (pode ser escolhido múltiplas vezes para dar ordens a pessoas diferentes)."
    }
  ],
  pastor: [
    {
      nome: "Perdão",
      descricao: "As personagens jogadoras que se confessarem a você como uma atividade curam três Condições em vez de duas (veja a página 72)."
    },
    {
      nome: "Bênção",
      descricao: "Uma vez por sessão, você pode abençoar um objeto ou outra personagem jogadora. A personagem jogadora, ou qualquer um que utilizar o objeto, recebe a Vantagem Abençoada, adicionando +2 a um teste à escolha da pessoa. A Vantagem encerra ao ser usada ou quando o mistério terminar. Você pode abençoar a mesma personagem ou objeto apenas uma vez por mistério."
    },
    {
      nome: "Confissão",
      descricao: "Você pode usar OBSERVAÇÃO em vez de MANIPULAÇÃO quando tiver uma conversa confidencial."
    }
  ],
  serviçal: [
    {
      nome: "Leal",
      descricao: "Receba +2 em testes de Medo na presença de alguém que você jurou proteger."
    },
    {
      nome: "Forte Como Uma Rocha",
      descricao: "Receba +2 em FORÇA ao lutar sem armas."
    },
    {
      nome: "Robustez",
      descricao: "Você pode ignorar penalidades de Condições físicas em uma rolagem por sessão de jogo."
    }
  ],
  gerais: [
    {
      nome: "Animal de Estimação",
      descricao: "Você tem um animal de estimação que pode usar uma vez por sessão para receber +1 em um teste à sua escolha em uma situação na qual seu animal seja claramente útil."
    },
    {
      nome: "Artista da Fuga",
      descricao: "Ignore penalidades de Condições ao usar AGILIDADE para fugir."
    },
    {
      nome: "Contatos",
      descricao: "Uma vez por sessão, você pode decidir que já conhece uma determinada PNJ e que seu relacionamento é positivo. A Mestre de Jogo pode não permitir, caso o contato torne o mistério menos divertido."
    },
    {
      nome: "Coragem",
      descricao: "Receba +1 em todos os testes de Medo."
    },
    {
      nome: "Corrida",
      descricao: "Receba +2 em AGILIDADE quando tentar ultrapassar alguém em uma corrida ou alcançar em uma perseguição."
    },
    {
      nome: "Covardia",
      descricao: "Quando ferida em combate, você pode fazer outra personagem jogadora sofrer o dano em seu lugar ao passar em um teste de FURTIVIDADE. Isso não conta como uma ação. Se o teste falhar, você é atingida e sofre 1 dano extra. Isso pode ser feito uma vez por encontro de combate."
    },
    {
      nome: "Dedicação",
      descricao: "Uma vez por sessão, você pode ignorar as Condições mentais em um teste de perícia."
    },
    {
      nome: "Defensiva",
      descricao: "A cada rodada, você recebe uma ação extra que pode ser usada apenas para esquivar ou para aparar."
    },
    {
      nome: "Dinamitiosta",
      descricao: "Recebe +2 em COMBATE A DISTÂNCIA ao usar explosivos."
    },
    {
      nome: "Duas Armas",
      descricao: "Quando usar duas armas em combate corpo a corpo, você pode usar os sucessos extras para acertar um inimigo adicional na mesma zona. Se você usar mais sucessos para aumentar o dano, você pode escolher qual dos ataques causa mais dano."
    },
    {
      nome: "Empática",
      descricao: "Ignore penalidades de Condições ao fazer testes de OBSERVAÇÃO."
    },
    {
      nome: "Enganação",
      descricao: "Receba +2 em MANIPULAÇÃO quando trapacear e enganar."
    },
    {
      nome: "Experiência de Batalha",
      descricao: "Receba +2 em MEDICINA ao tentar tratar um ferimento crítico físico."
    },
    {
      nome: "Fama",
      descricao: "Receba +2 em MANIPULAÇÃO ao tentar influenciar alguém que ouviu falar sobre você."
    },
    {
      nome: "Nove Vidas",
      descricao: "Ao rolar um ferimento crítico, você pode decidir qual dos dados representa as dezenas e qual representa as unidades."
    },
    {
      nome: "O Pastor do Senhor",
      descricao: "Receba +2 ao usar INSPIRAÇÃO para tratar um ferimento crítico mental."
    },
    {
      nome: "Pés Ligeiros",
      descricao: "Durante o combate, você pode se mover dentro da sua zona sem usar ações."
    },
    {
      nome: "Pugilismo",
      descricao: "Cause 1 dano extra ao lutar sem armas."
    },
    {
      nome: "Reflexos Rápidos",
      descricao: "Você pode sacar armas sem usar uma ação."
    },
    {
      nome: "Riqueza",
      descricao: "Aumente Recursos em 1 (pode ser comprado várias vezes)."
    },
    {
      nome: "Segurança nos Números",
      descricao: "Receba +2 em testes de Medo quando estiver acompanhada por ao menos duas outras personagens jogadoras. Em um combate, isso se aplica somente se vocês estiverem na mesma zona."
    },
    {
      nome: "Sexto Sentido",
      descricao: "Ao fazer testes de INVESTIGAÇÃO, você pode gastar sucessos extras para descobrir se um vaesen esteve na área, obter impressões mais ou menos vagas do tipo de vaesen que é e descobrir se magia foi utilizada."
    },
    {
      nome: "Símbolo Sagrado",
      descricao: "Você tem um item religioso que lhe permite usar INSPIRAÇÃO para atacar vaesen em combate corpo a corpo, causando 1 dano."
    },
    {
      nome: "Treinamento de Combate",
      descricao: "Receba +2 em COMBATE CORPO A CORPO e FORÇA ao aparar golpes."
    }
  ]
};

export default talentos;
