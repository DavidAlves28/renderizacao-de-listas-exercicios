import React from "react";
import { ItemsRemovidos, Li } from "./style";


export default function TarefasCompletas(props) {

console.log(props.listaRemovida);
    return (
         <ItemsRemovidos>
         <h1>Tarefas Concluídas</h1>
            <ul>
                {props.listaRemovida.map((tarefa, index) => {
                    return (
                        <Li key={index}>
                            <p>{tarefa}</p>
                        </Li>
                    );
                })}
            </ul>

        </ItemsRemovidos>
        
    )
}