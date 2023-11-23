import Button from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

export function Cronometro() {
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