import Button from "../Button";
import style from './Formulario.module.scss'
import { useState } from 'react';

export default function Formulario() {
    const [tarefa, setTarefa] = useState({nome: "", tempo: "00:00"})

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(tarefa)
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
                    value={tarefa.nome}
                    onChange={(e) => setTarefa({...tarefa, nome: e.target.value})}
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
                    value={tarefa.tempo}
                    onChange={(e) => setTarefa({ ...tarefa, tempo: e.target.value })}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button>
                Adicionar
            </Button>
        </form>
    )
}