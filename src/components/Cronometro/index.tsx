import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'
import Button from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'
import { useState, useEffect } from 'react';

interface CronometroProps {
    selecionado: ITarefa | undefined
}

export function Cronometro({selecionado}: CronometroProps) {
    const [tempo, setTempo] = useState<Number>();
    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}