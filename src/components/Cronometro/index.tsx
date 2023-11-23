import { tempoParaSegundos } from '../../common/utils/date'
import Button from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

export function Cronometro() {
    console.log('Coversao: ', tempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button>Começar!</Button>
        </div>
    )
}