import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import TarefasCompletas from "../TarefasCompletas";


export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  // exercicio 2 
  const [tarefaRemovida, setTarefaRemovida] = useState([]);

  const onChangeTarefa = (event) => {

    setNovaTarefa(event.target.value);
  };


  // Exercicio 1 adicionando tarefa com Enter

  const enterAdd = (e) => {
    if (e.key === 'Enter' ) {
      adicionaTarefa()
    }

  }

  // exercicio 2 teste

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };


  const concluiTarefa = (tarefa) => {
    lista.map((item) => {
      if(item === tarefa) {
        setTarefaRemovida([...tarefaRemovida, item])
      }
      const listaFiltrada = lista.filter((item) => item !== tarefa);
      setLista(listaFiltrada)
  
    })}
  return (

    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={enterAdd}
        />
        <AddTaskButton onClick={() => adicionaTarefa()}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
     {/* exercicio 2  */}
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => concluiTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />

      <TarefasCompletas listaRemovida={tarefaRemovida}/>
    </ListaTarefasContainer>
  );
}
