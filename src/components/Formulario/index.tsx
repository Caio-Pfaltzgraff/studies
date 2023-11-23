import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import style from './Formulario.module.scss'
import { useState } from 'react';


export default function Formulario(
    {setTarefas}: {setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}
) {
    const [state, setState] = useState({tarefa: "", tempo: "00:00"})

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTarefas((tarefasAntigas) => [...tarefasAntigas, {...state}])
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa"
                    value={state.tarefa}
                    onChange={(e) => setState({...state, tarefa: e.target.value})}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={state.tempo}
                    onChange={(e) => setState({ ...state, tempo: e.target.value })}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}