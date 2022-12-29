let cont = 0; // contador de itens da lista
let lista = new Array (); // delarar array de itens da lista

function criar_Card(){ // criar card

    if(document.getElementById("Card-Conteudo").value != ""){

        cont++; // realizar a contagem
        
        function criar_item_Card(){ // gerar card na tela

            let Tarefa = document.getElementById("Card-Conteudo").value; // pegar o valor do input de tarefa
            lista[cont-1] = Tarefa; // difinir array com as tarefas

                return `<li id="list_item_${cont-1}">
                            ${Tarefa}    
                            <input type="button" value="X" id="item_${cont-1}" class="BotaoDeletarCard" onclick="remover_Card()">        
                        </li>` // retornar item de lista preenchido na DOM

        }

        document.getElementById("Lista-Cards").innerHTML += criar_item_Card(); //chamar a função para criar card
        
        document.getElementById("Card-Conteudo").value = ""; // limpar o campo de input após o uso

    }else{

        alert("campo de texto vazio"); // campo vazia, não adciona nada

    }
 
}
   
function remover_Card(){ // remover card 

    for(let idVerificador = 0; idVerificador <= cont; idVerificador++){ // looping para selecionar e separar o botão e o card respectivo

        if(`item_${idVerificador}` == event.srcElement.id){ // verificar se o loop e o id do item sao iguais

            document.querySelector(`#list_item_${idVerificador}`).remove(); // remover item da lista no HTML
            lista[idVerificador] = null; // remover item do array da lista
        
        }

    }
    
}

function remover_todos_Cards(){ // remover todos os cards da lista
    
    document.getElementById("Lista-Cards").innerHTML = ""; // esvaziar a lista
    
    lista = new Array; // resetar o array de tarefas
    
    cont = 0; // resetar o contador de tarefas
}

    


