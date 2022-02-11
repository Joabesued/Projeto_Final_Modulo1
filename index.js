console.clear();
var prompt = require('prompt-sync')();
//todas as variaveis usadas no projeto.
let genero = ['vazio','feminino', 'masculino'];
validarGenero = [0,1,2];
let respostaGenero;
let personagem = {nome: 'Jogador(a)' ,idade:16 , peso:60 ,altura:1.50, genero: genero[respostaGenero], nomeCamisa: ''};
let posicao = ['','goleiro','zagueiro','lateral direito','lateral esquerdo','volante','meio de campo','pivô','atacante','ponta direita','ponta esquerda','centroavante'];
let status = {dribles: 0 , equilibrio: 0 , forca: 0 , velocidade: 0 , resistencia: 0 , chute: 0, defesa: 0};
let statusVida = {fome: 3, energia: 3};
let casa = {alimentos: 3, aluguel: 5};
let salarioAleatorio;
let iniciarGame = 'sim';
let aleatorioCamisa;
let aleatorio;
let numeroDaCamisa;
var time;
let decisao;
let dormir = 6;
let tempo = {dia: 1, hora: 6};
let durante;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function aumentaHabilidade(receber){

    let status = ['dribles','equilibrio','forca','velocidade','resistencia','chute','defesa'];
    let resultadoAleatorio = Math.floor(Math.random()*status);
    

    if(resultadoAleatorio >= 1 && resultadoAleatorio <=2){
        status.dribles +=2
        status.equilibrio +=2

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;

        console.log(`${personagem.nome} ganhou +2 em Dribles e +2 em Equilibrio`);
        console.table(status);
    }
    if(resultadoAleatorio >= 3 && resultadoAleatorio <=4){
        status.forca +=2
        status.velocidade +=2

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;

        console.log(`${personagem.nome} ganhou +2 em Força e +2 em Velocidade`);
        console.table(status);
    }
    if(resultadoAleatorio >= 5 && resultadoAleatorio <= 7){
        status.resistencia +=2
        status.chute +=2
        status.defesa +=2

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;

        console.log(`${personagem.nome} ganhou +2 em Resistencia , +2 Chute e +2 de Desefa`);
        console.table(status);

    }
    return [personagem.pontos];
}



function perguntasInicias(){
    console.log(` 1- Sair para compras as coisas necessarias. `);
    console.log(` 2- Fazer um treino pesado `);
    console.log(` 3- Fazer ligações para empresarios e patrocinios.`);
    console.log(` 4- comer alguma coisa. `);
    console.log(` 5- Ir treinar no seu clube de futebol. `);
    console.log(` 6- Dormir `);
}

function verificarPerguntas(receber,receber2){
    let comprar = "sim";
  //PERGUNTA 1-
    if(decisao == 1){

      if (statusVida.dinheiro == 250 || statusVida.dinheiro == 0) {
          console.log("Com essa quantidade de dinheiro vai ser impossivel comprar tudo que precisa. Escolha abaixo o que vai levar.");
          while (comprar == "sim") {
          console.log();
          console.log("1- Chuteiro/equipamentos = 100R$");
          console.log("2- Suplementos = 100R$");
          console.log("3- alimentção em geral = 250R$");
  
          let resposta = prompt("");
  
          if (resposta == 1){
            statusVida.dinheiro = statusVida.dinheiro - 100;
            console.log(`Agora você só tem${statusVida.dinheiro}R$ `);
          } else if (resposta == 2) {
            statusVida.dinheiro = statusVida.dinheiro - 100;
            console.log(`Agora você só tem${statusVida.dinheiro}R$ `);
          } else if (resposta == 3) {
            statusVida.dinheiro = statusVida.dinheiro - 250;
            console.log(`Agora você só tem${statusVida.dinheiro}R$ `);
          }
          comprar = prompt('Deseja comprar mais alguma coisa? ');
        }
      }
      else{
          console.log(`${personagem.nome} conseguiu comprar todos os itens que precisava. Comprou chuteira nova, suplemento para 1 dia e alimentos para amanhã. `);
          console.log();
          casa.alimentos = casa.alimentos + 3
          statusVida.dinheiro = statusVida.dinheiro - 450;
          statusVida.energia = statusVida.energia + 3;
          console.log(`Por conseguir comprar suplemento, sua energia aumentou para ${statusVida.energia}. `);
          console.log(`Você comprou alimentos, seu estoque foi aumentado para ${casa.alimentos} `);
          console.log(`agora você tem ${statusVida.dinheiro}R$`);
      }

    }
    //PERGUNTA 2
    else if(decisao == 2){
        temporizador()
        console.log('Você realizou um treino pesado, acabou ganhando alguns status. Porém está com mais fome e com menos energia.');
        statusVida.energia -=2
        statusVida.fome += 2
        console.log();
        console.log('Lembre que antes de todas as partidas precisa ter bons status de fome e energia. Isso influencia 100% na partida!!!');
        aumentaHabilidade(status);
        console.table(statusVida);

    }
    //PERGUNTA 3
    else if(decisao == 3){

    let noticiaAleatoria = Math.floor(Math.random()*1000);

        if(noticiaAleatoria <= 499){
            temporizador();
            console.log('INFELIZMENTE NINGUEM ATENDEU SUAS EXPECTATIVAS!!');

        }

        if(noticiaAleatoria >= 500 && noticiaAleatoria < 600){
            temporizador();
            statusVida.fome +=1
            statusVida.dinheiro += 100;
            console.log('PARABÉNS!! VOCÊ VAI FAZER UM COMERCIAL PARA UM RESTAURANTE!!');
            console.log('Você recebeu mais 100R$ pela propagando!!');
            console.log();
            console.log(`Seus status foram atualizados, agora você tem ${statusVida.dinheiro}R$`);
            console.table(statusVida);

        }if(noticiaAleatoria >= 600 && noticiaAleatoria <= 700){
            temporizador();
            statusVida.fome -=1
            statusVida.dinheiro += 200;
            console.log('PARABÉNS!! VOCê CONSEGUIU UM PATROCINADOR!!');
            console.log('Você recebeu 200R$ do patrocinador!!');
            console.log();
            console.log(`Seus status foram atualizados, agora você tem ${statusVida.dinheiro}R$`);
            console.table(statusVida);

        }if(noticiaAleatoria > 700 && noticiaAleatoria < 970){
            temporizador();
            statusVida.fome +=1
            statusVida.dinheiro += 500;
            console.log('PARABÉNS!! VOCê CONSEGUIU UMA PARTICIPAÇÃO EM UM PROGRAMA DE TV!!!!');
            console.log('Você recebeu 500R$ do PROGRAMA DE TV!!');
            console.log();
            console.log(`Seus status foram atualizados, agora você tem ${statusVida.dinheiro}R$`);
            console.table(statusVida);

        }
        if(noticiaAleatoria >= 970){

            temporizador();
            statusVida.fome -=1
            statusVida.dinheiro += 700;
            console.log('PARABÉNS!! VOCê SE TORNOU A CARA DA BLUE EdTech!!!!');
            console.log('Você recebeu 700R$ da BLUE!!');
            console.log();
            console.log(`Seus status foram atualizados, agora você tem ${statusVida.dinheiro}R$`);
            console.table(statusVida);

        }
        if(noticiaAleatoria >= 990){
           temporizador();
                console.log('PARABÉNS, VOCÉ VAI SAIR NA REVISTA VEJO. SEMPRE FOI SEU SONHO, PORÉM VOCÊ TEM QUE IR ATÉ LÁ AGORA!!! ');
                perguntaSeria = prompt('Antes de ir até a vejo, deseja tomar uma cerveja para comemorar a noticia? ');

                if(perguntaSeria == 'sim'){
                    while(true){
                    console.log(`Ao caminho da vejo, ${personagem.nome} se envolveu em um acidente e acabou não resistindo!!!`);
                    console.log(`Se for beber para comemorar algo, não dirija. Assim como foi ${personagem.nome}, pode ser você.`);
                    console.log();
                    break
                    }
                if(perguntaSeria == 'nao'){

                    console.log(`${personagem.nome} foi até a vejo para tirar as fotos, logo depois, recebeu a proposta milionaria do Barcelona.`);
                    let aceitar = prompt('Deseja aceitar a proposta? ');
                    if(aceitar == 'sim'){
                       while(iniciarGame= 'sim'){
                           console.log('VOCÊ FOI CONTRATATO PELO BARCELONA. COM ISSO VOCÊ CUMPRE O OBJETIVO DO JOGO: SUBIR PARA SERIE A.');
                           console.log('PARABÉNS!!!');
                           console.log('FIM'); 
                           break
                       }
                    }else{
                        console.log('VOCÊ RECUSOU O BARCELONA E IRÁ CONTINUAR JOGANDO O JOGO!!');
                }    
              }
             }
            }
        }
  }



function temporizador(resposta){

if(decisao == 1){
  tempo.hora = tempo.hora + 2
}else if(decisao == 2){
    tempo.hora = tempo.hora + 3;
}else if(decisao == 3){
    tempo.hora = tempo.hora + 4;
}else if(decisao == 4){
    tempo.hora = tempo.hora + 5
}else if(decisao == 5){
    tempo.hora = tempo.hora + 6
}else if(decisao == 6){
    tempo.hora = tempo.hora + 7
}
    if(tempo.hora >= 24 || decisao == 6){
        tempo.hora = dormir;
         tempo.dia++
    }
    return [tempo.hora, tempo.dia];
}

function passagemDia(horas){

    if(tempo.hora >= 6 && tempo.hora <= 12){
        durante = 'Dá manhã!!'
    }
    if(tempo.hora >= 13 && tempo.hora <= 18){
        durante = 'Dá tarde!!'
    }
    if(tempo.hora >= 19 && tempo.hora <= 23){
        durante = 'Dá noite!!'
    }
    return durante;
}

while(iniciarGame == 'sim'){

    
    personagem = {nome: 'Jogador(a)' ,idade:0  , peso:0 ,altura:0 , genero: 'indefinido'};

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Bem-vindos ao Way To Stars. O jogo se baseia numa busca pelo sucesso no mundo do futebol, você será capaz de manipular cada ação do personagem ao longo jogo, cada pergunta trará beneficios ou malecifios para o seu personagem ao longo da historia. Tudo começa na serie B do campeonato brasileiro e daí você irá iniciar sua jornada no mundo do futebol. Bom jogo e seja consciente em todas as suas decisões. ');

console.log();

console.log('Vamos começar nossa jornada, neste momemento você irá decidir o genero do personagem. ');

//1 etapa do jogo definir, definir genero do personagem.

function generoPersonagem(){

    console.log();
    console.log('Escolha qual o sexo do seu personagem.');
    console.log('1- Feminino');
    console.log('2- Masculino');
    console.log();

    do{
        respostaGenero = +prompt('Digite o numero correspondente a sua escolha: ');
        if(respostaGenero == 1){
            personagem.genero='Feminino'
            
        }else{
            personagem.genero='Masculino'
            
        }
        }while(respostaGenero != validarGenero[1] && respostaGenero != validarGenero[2]);

        return respostaGenero;
    }
generoPersonagem();
console.clear();
function nomesPersonagem(){
console.log('Abaixo faça as definições do seu personagem');
console.log();

    personagem.nome = prompt('Digite o nome do seu personagem:  ');
    console.log();
    personagem.nomeCamisa = prompt('Digite o apelido para ficar na camisa do personagem:  ');
    return [personagem.nome, personagem.nomeCamisa];
}
nomesPersonagem();

//abaixo temos uma função que decide a idade do jogador e com isso gera os "STATUS" de habilidades inicias do seu personagem.

function statusInicias(){

    do{
        console.log();
        personagem.idade = prompt('Qual vai ser a idade do seu personagem? ');
        console.clear();
    }
    while(isNaN(personagem.idade));
    
    
//coloquei ifs para definir os status inicias dos personagem de acordo com a idade escolhida pelo user.
//jogadores entre 16 a 20 anos, terão melhores habilidades em (velocidade,dribles e chute).

    if(personagem.idade >= 16 && personagem.idade <= 20){

        status.dribles= 55;//habilidade destaque
        status.equilibrio= 35;
        status.forca= 48;
        status.velocidade= 60;//habilidade destaque
        status.resistencia= 45;
        status.chute= 55;//habilidade destaque
        status.defesa= 42;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
        console.log(`${personagem.nome} recebeu uma pontuação inicial de ${pontosJogador}, foram baseados nos seus status seguintes:`);
        console.table(status);
    }
    // personagens escolhidos entre 21 a 25 anos, terão um kit inicial precisamente muito bom, com bastante equilibrio nas habilidades(status);
    else if(personagem.idade >= 21 && personagem.idade <= 25){
        status.dribles= 57;//habilidade destaque
        status.equilibrio= 54;//habilidade destaque
        status.forca= 53;//habilidade destaque
        status.velocidade= 60;//habilidade destaque
        status.resistencia= 50;
        status.chute= 55;//habilidade destaque
        status.defesa= 49;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
        console.log(`${personagem.nome} recebeu uma pontuação inicial de ${pontosJogador}, foram baseados nos seus status seguintes:`);
        console.table(status);

    }
    //jogadores entre 26 a 31 anos, já estão ficando mais devagar, porém são mais eficazes com os chutes, defesas e equilibrio.
    else if(personagem.idade >= 26 && personagem.idade <= 31){

        status.dribles= 45;
        status.equilibrio= 50;//habilidade destaque
        status.forca= 48;
        status.velocidade= 45;
        status.resistencia= 45;
        status.chute= 55;//habilidade destaque
        status.defesa= 50;//habilidade destaque

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
        console.log(`${personagem.nome} recebeu uma pontuação inicial de ${pontosJogador}, foram baseados nos seus status seguintes:`);
        console.table(status);

    }
    //jogadores de 32 a 40 anos são bem experientes nos status, chutes, força e defesa.
    else if(personagem.idade >= 32 && personagem.idade <= 40){

        status.dribles= 40;
        status.equilibrio= 40;
        status.forca= 60;//habilidade destaque
        status.velocidade= 44;
        status.resistencia= 40;
        status.chute= 55;//habilidade destaque
        status.defesa= 50;//habilidade destaque

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
        console.log(`${personagem.nome} recebeu uma pontuação inicial de ${pontosJogador}, foram baseados nos seus status seguintes:`);
        console.table(status);

    }
    return [personagem.idade, personagem.pontos, status];
    
}

statusInicias();

function alturaPersonagem(){

do{
    console.log('Obs: Digite a altura da seguinte maneira = EX:1.50, 1.60...');
    personagem.altura = prompt(`Defina a altura de ${personagem.nome} : `);
    

    }while((personagem.altura) < 1.50 || (personagem.altura) > 2.10);

    if(personagem.altura >= 1.50 && personagem.altura <= 1.80){

        console.log(`Com essa altura ${personagem.nome} só pode ter entre 60 a 80Kg`);

        }else if(personagem.altura >= 1.80 && personagem.altura <= 2.10){

            console.log(`Com essa altura ${personagem.nome} pode ter entre 81 a 100kg`);
        }

    return personagem.altura;

}
alturaPersonagem();

function pesoPersonagem(){

         personagem.peso=prompt(`Defina quantos Kg(quilos) ${personagem.nome} terá: `);

        if(personagem.altura >= 1.50 && personagem.altura <= 1.80){
            while(personagem.peso < 60 || personagem.peso > 80){
                console.log('Por favor, digite um valor entre 60 a 80Kg!! ');
                personagem.peso = prompt(`Redefina o peso de ${personagem.nome}: `);
            }
        }else if(personagem.altura >= 1.80 && personagem.altura <= 2.10){

            while(personagem.peso < 80 || personagem.peso > 100){
                console.log('Por favor, digite um valor entre 81 a 100Kg!! ');
                personagem.peso = prompt(`Redefina o peso de ${personagem.nome}`);
            }
        }
     return personagem.peso;  
    }
    pesoPersonagem();

    function posicaoJogador(escolhaPosicao){

        if(escolhaPosicao == 'goleiro' || escolhaPosicao == 'zagueiro'){
        
        status.resistencia = status.resistencia + 5;
        status.defesa = status.defesa + 5;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;

        console.log(`Seus status foram atualizados por conta da posição que escolheu, habilidades melhoradas foram as seguintes: resistencia e defesa `);
        console.log()
        console.log(`Agora os status de ${personagem.nome} estão dessa forma: `);
        console.table(status);
        }
        else if(escolhaPosicao == 'lateral direito' || escolhaPosicao == 'lateral esquerdo'){

            status.velocidade= status.velocidade + 5;
            status.resistencia= status.resistencia + 5;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
        
        console.log(`Seus status foram atualizados por conta da posição que escolheu, habilidades melhoradas foram as seguintes: velocidade e resistencia. `);
        console.log(`Agora os status de ${personagem.nome} estão dessa forma: `);
        console.table(status);
        }
        else if(escolhaPosicao == 'volante' || escolhaPosicao == 'meio campo'){
            status.equilibrio = status.equilibrio + 7;
            status.forca = status.forca + 7;
            status.defesa = status.defesa + 10;
            status.dribles = status.dribles + 10;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;

            console.log(`Seus status foram atualizados por conta da posição que escolheu, habilidades melhoradas foram as seguintes: equilibrio, força e defesa. `);
            console.log(`Agora os status de ${personagem.nome} estão dessa forma: `);
            console.table(status);
        }
        else if(escolhaPosicao == 'pivô' || escolhaPosicao == 'atacante'){

            status.forca= status.forca + 5;
            status.chute= status.chute + 7;
            
        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;

        console.log(`Seus status foram atualizados por conta da posição que escolheu, habilidades melhoradas foram as seguintes: chute e força.`);
        console.log(`Agora os status de ${personagem.nome} estão dessa forma: `);
        console.table(status);
        }
        else if(escolhaPosicao == 'ponta direita' || escolhaPosicao == 'ponta esquerda'){

            status.dribles= status.dribles + 5;
            status.equilibrio= status.equilibrio + 6;
            status.velocidade= status.velocidade + 8;
            status.chute= status.chute + 5;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
            
        console.log(`Seus status foram atualizados por conta da posição que escolheu, habilidades melhoradas foram as seguintes: dribles, equilibrio,velocidade e chute`);
        console.log(`Agora os status de ${personagem.nome} estão dessa forma: `);
        console.table(status);

        }else if(escolhaPosicao == 'centroavante'){
            status.forca = status.forca + 7;
            status.chute = status.chute + 10;

        let somaStatus = (status.dribles + status.equilibrio + status.forca + status.velocidade + status.resistencia + status.chute + status.defesa)/7;
        let pontosJogador = Math.round(somaStatus);
        personagem.pontos = pontosJogador;
            
        console.log(`Seus status foram atualizados por conta da posição que escolheu, habilidades melhoradas foram as seguintes: chute e força  `);
        console.log(`Agora os status de ${personagem.nome} estão dessa forma: `);
        console.table(status);

        }
    return [escolhaPosicao, status];
    }
    console.clear();

    console.log(`Agora chegou um dos momentos mais importantes para ${personagem.nome}, chegou a hora de escolher em qual posição irá jogar.`);
    console.log();
    console.log(posicao);
    let escolhaPosicao = prompt('Em qual posição deseja jogar? ');
    while(escolhaPosicao != 'goleiro' && escolhaPosicao != 'zagueiro' && escolhaPosicao != 'lateral esquerdo' && escolhaPosicao != 'lateral direito' && escolhaPosicao != 'volante' && escolhaPosicao != 'meio campo' && escolhaPosicao != 'atacante' && escolhaPosicao != 'ponta esquerda' && escolhaPosicao != 'ponta direita' && escolhaPosicao != 'pivô' && escolhaPosicao != 'centroavante'){
        console.log("ERRO!! Escolha uma das posições acima.");
        escolhaPosicao = prompt('Em qual posição deseja jogar? ');
    }

    posicaoJogador(escolhaPosicao);

    function numeroCamisa(){

        aleatorioCamisa = Math.floor(Math.random() * 30);
        numeroDaCamisa = aleatorioCamisa;
        personagem.numeroDaCamisa = numeroDaCamisa;

        return [numeroDaCamisa, personagem.numeroDaCamisa];
    }

    numeroCamisa();

    function timeEscolhido(campeonatoBrasileiroB, numeroDaCamisa,time){

        aleatorio = Math.floor(Math.random() * campeonatoBrasileiroB.length);
        time = campeonatoBrasileiroB[aleatorio];
        personagem.time = time;
        console.log();
        console.log(`Boas-vindas ao ${time}, aqui começa sua jornada. A partir de agora é foco total, estamos confiante que com sua chegada a equipe nós iremos consiguir subir para serie A do campeonato brasileiro. `);
        console.log();
        console.log(`Parabéns ${personagem.nome} você é o novo numero ${numeroDaCamisa} do ${personagem.time}. `);

        return [personagem.time, time];
    }

    let campeonatoBrasileiroB = [
        "Cruzeiro",
        "Bahia",
        "Brusque",
        "Chapecoense",
        "CSA",
        "CRB",
        "Criciúma",
        "Guarani",
        "Grêmio",
        "Ituano",
        "Londrina",
        "Náutico",
        "Novorizontino",
        "Operário",
        "Ponte preta",
        "Tombense",
        "Vasco",
        "Sampaio corrêa",
        "Sport",
        "Vila nova"
      ];

    timeEscolhido(campeonatoBrasileiroB, numeroDaCamisa, time);
    
      function salario(salarioInicial,timeDele){
    
          salarioAleatorio = Math.floor(Math.random() * salarioInicial.length);
          resultadoSalario = salarioInicial[salarioAleatorio];
          console.log(`Agora que faz parte do ${personagem.time}, vamos falar do seu salario. A partir daqui você terá que lhe dar com as finanças, terá que pagar alugueis, comprar comida, chuteiras novas e etc.`);
          console.log(`seu salario inicial é no valor de ${resultadoSalario}`);
          statusVida.dinheiro = resultadoSalario;

          console.log();
          console.log(`Pronto ${personagem.nome}, agora já temos tudo definido. Daqui em diante o jogo começa, você terá que administrar os seus dias e fazer com que o seu time consiga subir no campeonato.`);
          console.log('Obs: Lembre-se de que toda decisão vai influenciar na sua carreira como jogador!!. Bom jogo e aproveite sua carreira.');
          console.log()
          console.log('Abaixo estão todos os dados do seu personagem.');
          console.table(personagem);

          return [statusVida.dinheiro, resultadoSalario, salarioAleatorio];
}
      let resultadoSalario;
      let salarioInicial = [250, 500, 750, 1000];
      time;  

      salario(salarioInicial, resultadoSalario);
      passagemDia(tempo.hora);
      console.log(statusVida);
      console.log(`${personagem.nome} seu despertador tocou as ${tempo.hora} ${durante}.Vai receber todas as informações sobre seu primeiro dia no ${personagem.time}.`);
      console.log();
      console.log(`${personagem.nome} seu telefone está tocando, deseja atender? `);

      console.log('1-Sim');
      console.log('2-Não');
      
      decisao = prompt('');

      temporizador(decisao);
      passagemDia(tempo.hora);

      if(decisao == 1){

          console.log(`${personagem.nome} recebeu a ligação do clube avisando que hoje é dia de treino intensivo, o treinamento começara as 17 horas. ${personagem.nome} precisa comprar uma chuteira,pois, a sua está totalmente surrada!!`);
          console.log();
          temporizador();
          console.log(`Agora são ${tempo.hora} ${durante}`);
          console.log();
          console.log('Abaixo escolha sua proxima ação. ');    
          perguntasInicias();
          
      }
      if(decisao == 2){

          console.log(`${personagem.nome} preferiu ignorar a mensagem e decidiu ir fazer outras coisas. `);
          console.log();
          temporizador();
          console.log(`Agora são ${tempo.hora} ${durante}`);
          console.log();
          console.log('Abaixo escolha sua proxima ação... ');        
          perguntasInicias();

      }
      
      decisao = prompt('');

      verificarPerguntas();

iniciarGame = prompt('Deseja recomeçar o jogo? ');
}