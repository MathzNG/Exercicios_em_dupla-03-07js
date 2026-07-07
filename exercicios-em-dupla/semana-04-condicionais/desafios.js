/* ============================================================
   🎯 SEMANA 04 — CONDICIONAIS E DEFESA CONTRA ENTRADA INVÁLIDA
   Preparação para a SA · em DUPLA (troquem piloto/copiloto
   a cada exercício!)
   ------------------------------------------------------------
   COMO RODAR: abra desafios.html, aperte F12 (Console), salve e F5.

   📚 CONSULTA PERMITIDA (documentação oficial):
   - if...else: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
   - switch: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
   - Operador ternário: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator
   - Operadores lógicos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_AND
   - isNaN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN

   🚫 PROIBIDO pedir a resposta para IA. Na SA você estará sem ela.
   ============================================================ */


/* ═══ EXERCÍCIO 1 — 🚌 O busão chegou? ═══
   CONTEXTO: painel do Terminal Santo Amaro. Se o 675P chegou,
   avisa; senão, silêncio.
   TAREFA: crie 'chegou' (true) e use if para mostrar
   "🚌 675P na plataforma!" só quando for true.
   EXEMPLO (molde):
       if (choveu) {
         console.log("leva guarda-chuva");
       }
   RESULTADO ESPERADO: 🚌 675P na plataforma! */

let chegou = false;

if (chegou) {
   console.log('O busão chegou!!');
} else {
   console.log('O busão ainda não chegou');
}


// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 2 — 🎂 Entra ou não entra? ═══
   CONTEXTO: portaria do rolê 18+.
   TAREFA: crie 'idade' (17) e mostre "Pode entrar" ou
   "Hoje não, campeão" usando if/else.
   DICA: o else é o caminho de "todo o resto".
   RESULTADO ESPERADO: Hoje não, campeão */

let idade = 17;

if (idade >= 18) {
   console.log('Pode entrar!!');
} else {
   console.log('Hoje não, campeão!!');
}
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 3 — 🎓 Aprovado, recuperação ou reprovado? ═══
   CONTEXTO: a nota da UC saiu!
   TAREFA: crie 'nota' (5) e com if / else if / else mostre:
   nota >= 7 → "Aprovado! 🎉"  ·  nota >= 5 → "Recuperação 📚"
   senão → "Reprovado 😞"
   🧠 COMO PENSAR:
      1º testo o MELHOR caso primeiro (>= 7)
      2º o else if só recebe quem NÃO passou no primeiro teste
      3º o else final pega todo o resto — ele não precisa de condição
   DICA: a ORDEM dos testes importa — comece pelo maior.
   RESULTADO ESPERADO: Recuperação 📚 */

let nota = 5;

if (nota >= 7) {
   console.log('Aprovado!!');
} else if (nota >= 5) {
   console.log('Recuperação!!');
} else {
   console.log('Reprovado!!');
}

// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 4 — 🍨 Quem paga o açaí? ═══
   CONTEXTO: par ou ímpar para decidir quem paga o açaí depois
   da aula.
   TAREFA: crie 'numero' (7) e mostre "PAR — você venceu!" ou
   "ÍMPAR — perdeu, paga o açaí 🍨" usando % e if/else.
   DICA: par é quando  numero % 2 === 0
   RESULTADO ESPERADO: ÍMPAR — perdeu, paga o açaí 🍨 */

let numero = 7;

if (numero % 2 === 0) {
   console.log('Você venceu');
} else {
   console.log('Perdeu, paga o açaí');
}

// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 5 — 📅 Promoção do dia (switch) ═══
   CONTEXTO: a lanchonete do Largo 13 tem promoção por dia:
   "segunda" → pastel R$ 5 · "quarta" → caldo de cana em dobro ·
   "sexta" → combo R$ 15 · outro dia → "Sem promoção hoje 😢"
   TAREFA: crie 'dia' ("quarta") e resolva com switch.
   EXEMPLO (molde):
       switch (fruta) {
         case "uva": console.log("R$ 8"); break;
         default: console.log("não temos");
       }
   DICA: não esqueça o break — sem ele o switch "vaza" pro próximo.
   RESULTADO ESPERADO: caldo de cana em dobro */

let dia = 'quarta';

switch (dia) {
   case 'segunda':
      console.log('Pastel R$5');
      break;
   case 'quarta':
      console.log('Caldo de cana em dobro');
      break;
   case 'sexta':
      console.log('Combo R$15');
      break;
   default:
      console.log('Não temos nada para este dia da semana');
      break;
}

// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 6 — 🎫 Meia ou inteira? (ternário) ═══
   CONTEXTO: cinema no Shopping. Estudante paga meia.
   TAREFA: crie 'estudante' (true) e resolva NUMA LINHA SÓ com o
   operador ternário, mostrando "Meia: R$ 15" ou "Inteira: R$ 30".
   EXEMPLO (molde):  let msg = temSol ? "praia" : "filme em casa";
   RESULTADO ESPERADO: Meia: R$ 15 */

let estudante = true;
let desconto = estudante ? 'Meia: R$15' : 'Inteira: R$30';
console.log(desconto);


// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 7 — 🪪 Balada: RG *E* 18+ ═══
   CONTEXTO: na porta da balada conferem as DUAS coisas.
   TAREFA: com 'idadeBalada' (19) e 'temRG' (false), mostre "Entrou! 🎉"
   apenas se idadeBalada >= 18 E temRG; senão "Barrado no baile".
   DICA: junte as condições com && DENTRO do if.
   ('idade' já existe no exercício 2 — por isso o nome novo!)
   RESULTADO ESPERADO: Barrado no baile */

let idadeBalada = 19;
let temRG = true;

if (idadeBalada >= 18 && temRG) {
   console.log('Entrou!!');
} else {
   console.log('Barrado no baile!!');
}
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 8 — 💸 Desconto: estudante OU aniversariante ═══
   CONTEXTO: a pizzaria dá 20% se você é estudante OU se é seu
   aniversário 🍕.
   TAREFA: com 'ehEstudante' (false) e 'ehAniversario' (true),
   mostre "Tem desconto!" ou "Preço cheio" usando ||.
   RESULTADO ESPERADO: Tem desconto! */

let eEstudante = false;
let ehAniversario = true;

if (eEstudante || ehAniversario) {
   console.log('Tem desconto!!');
} else {
   console.log('Preço cheio!!');
}
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 9 — 🛡️ Campo vazio não passa ═══
   CONTEXTO: cadastro da vaga de estágio — nome em branco não vale.
   TAREFA: crie 'nomeDigitado' ("") e mostre
   "⚠️ Preencha o nome!" se estiver vazio; senão "Cadastro ok".
   DICA: vazio é  nomeDigitado === ""
   RESULTADO ESPERADO: ⚠️ Preencha o nome! */

let nomeDigitado = '';

if (nomeDigitado === '') {
   console.log('Preencha o nome!!');
} else {
   console.log('Cadastro Ok!!');
}

// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 10 — 🛡️ Número que não é número ═══
   CONTEXTO: alguém digitou "abc" no valor da recarga do bilhete 🚌.
   TAREFA: crie  let valor = Number("abc");  e mostre
   "⚠️ Valor inválido" se isNaN(valor); senão o próprio valor.
   DICA: isNaN(x) devolve true quando x é NaN.
   RESULTADO ESPERADO: ⚠️ Valor inválido */

let valor = Number('abc');

if (isNaN(valor)) {
   console.log('Valor inválido');
} else {
   console.log(valor);
}
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 11 — 🏧 O caixa eletrônico desconfiado ═══
   CONTEXTO: sacar dinheiro tem DUAS regras: ter saldo E o valor
   ser múltiplo de 10 (o caixa só tem notas de 10).
   TAREFA: com 'saldoConta' (100) e 'saque' (35), teste:
   - saque > saldoConta        → "Saldo insuficiente"
   - saque % 10 !== 0          → "Só notas de 10!"
   - senão                     → "💵 Pode sacar"
   🧠 COMO PENSAR:
      1º qual regra barra PRIMEIRO? (sem saldo, nem adianta ter nota)
      2º passou no saldo? Agora a regra das notas (o % denuncia o 35)
      3º sobrou alguém? Esse pode sacar — é o else
   DICA: if / else if / else — e teste também com saque = 30 e 200.
   RESULTADO ESPERADO (com 35): Só notas de 10! */

let saldoConta = 100;
let saque = 35;

if (saque > saldoConta) {
   console.log('Saldo insuficiente!!');
}
else if (saque % 10 !== 0) {
   console.log('Só notas de 10!!');
}
else {
   console.log('Pode sacar!!');
}
// ✍️ SOLUÇÃO DA DUPLA:

/* ═══ EXERCÍCIO 12 — 🔧 REFATORE este código feio ═══
   CONTEXTO: um colega escreveu isto (funciona, mas está horrível):
       let pontos = 85;
       if (pontos >= 90) { console.log("Ouro"); }
       if (pontos >= 70 && pontos < 90) { console.log("Prata"); }
       if (pontos >= 50 && pontos < 70) { console.log("Bronze"); }
       if (pontos < 50) { console.log("Sem medalha"); }
   TAREFA: reescreva com if / else if / else — SEM os && (a ordem
   dos testes já garante as faixas). A saída tem que continuar igual.
   🧠 COMO PENSAR:
      1º leiam o código feio JUNTOS e identifiquem as 4 faixas
      2º comecem do topo: quem é >= 90 já foi embora no primeiro if
      3º então o else if (>= 70) NÃO PRECISA testar "< 90" —
         quem chegou nele já reprovou no teste anterior!
   DICA: quem começa pelo maior nunca precisa do "e menor que".
   RESULTADO ESPERADO: Prata */

let pontos = 85;

if (pontos >= 90) {
   console.log("Ouro");
}
else if (pontos >= 70 && pontos < 90) {
   console.log("Prata");
}
else if (pontos >= 50 && pontos < 70) {
   console.log("Bronze");
}
else {
   console.log("Sem medalha");
}

// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 13 — 🍕 Guard clause: pare cedo ═══
   CONTEXTO: dividir a pizza da vitória entre 0 pessoas quebra a
   matemática (60 / 0 = Infinity 😱).
   TAREFA: complete a função com uma "guard clause": se pessoas
   for 0 (ou menor), retorne "⚠️ Precisa de pelo menos 1 pessoa!"
   ANTES da conta. Teste com 0 e com 4.
   🧠 COMO PENSAR:
      1º a guard clause é a PRIMEIRA linha dentro da função
      2º if (pessoas <= 0) → return com a mensagem de aviso
      3º quem retorna, SAI da função — a divisão nem chega a rodar
   DICA: if + return no COMEÇO da função — o resto nem roda. */
function dividirPizza(valor, pessoas) {

   if (pessoas <= 0){
      return 'Precisa de pelo menos 1 pessoa!!'
   }
   // ✍️ SOLUÇÃO DA DUPLA (a guard clause vem AQUI):

   return "Cada um paga R$ " + (valor / pessoas);
}
console.log(dividirPizza(60, 0)); // ⚠️ Precisa de pelo menos 1 pessoa!
console.log(dividirPizza(60, 4)); // Cada um paga R$ 15


/* ═══ EXERCÍCIO 14 — 🚗 O preço da corrida ═══
   CONTEXTO: app de corrida cobra: bandeirada R$ 5 + R$ 2 por km.
   Corrida a partir de 10 km tem 10% de desconto no total.
   TAREFA: com 'km' (12), calcule o preço, aplique o desconto se
   tiver direito e mostre:  Corrida: R$ <valor>
   DICA: calcule o total primeiro; o if só mexe no desconto:
         total = total * 0.9;
   RESULTADO ESPERADO: Corrida: R$ 26.1 */

   let km = 12;
   let total = 5 + (km * 2);

   if (km > 10){
      total *= 0.9;
      console.log('Corrida: R$' + total);
   }
   else{
      console.log('Corrida: R$' + total);
   }



// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 15 — 🏆 DESAFIO DA DUPLA: posso pedir pizza? ═══
   CONTEXTO: sexta à noite, jogo do Brasil 🇧🇷. Você pede pizza SE:
   tem pelo menos R$ 50 no bolso  E  (é fim de semana OU o Brasil
   joga hoje).
   TAREFA: crie 'grana' (60), 'fimDeSemana' (false) e
   'brasilJoga' (true) e mostre "🍕 PEDE A PIZZA!" ou
   "Miojo hoje 🍜" com UM ÚNICO if combinando && e ||.
   🧠 COMO PENSAR:
      1º escrevam a regra em PORTUGUÊS: "grana E (fds OU jogo)"
      2º traduzam palavra por palavra: E vira && · OU vira ||
      3º os parênteses do português viram parênteses no código
      4º testem SEM os parênteses e vejam a regra mudar — por quê?
   DICA: parênteses agrupam o OU:  grana >= 50 && (a || b)
   BÔNUS para a dupla: testem as 4 combinações de a/b e anotem.
   RESULTADO ESPERADO: 🍕 PEDE A PIZZA! */

   let grana = 60;
   let fimDeSemana = false;
   let brasilJoga = true;

   if(grana >= 50 &&(fimDeSemana || brasilJoga)){
      console.log('Pede a pizza');
   }else{
      console.log('Miojo hoje');
   }
   
// ✍️ SOLUÇÃO DA DUPLA:



/* ============================================================
   ✅ CHECKLIST FINAL DA DUPLA
   [x] Todas as saídas batem com o resultado esperado?
   [x] Os DOIS sabem explicar cada if via código?
   [x] Commit nos DOIS GitHubs:
        git commit -m "Semana 04 resolvida — dupla X & Y"
   ============================================================ */
