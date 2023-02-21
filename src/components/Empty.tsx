import styles from './Empty.module.css'
import emptyImage from '../assets/clipboard.svg'

export function Empty() {
    return (
        <div className={styles.emptyTasks}>
            <img src={emptyImage} alt="" draggable={false} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}