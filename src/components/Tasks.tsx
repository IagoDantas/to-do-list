import styles from './Tasks.module.css';

import emptyImage from '../assets/clipboard.svg'

export function Tasks() {
    return (
        <article className={styles.taskWrapper}>
            <header>
                <div className={styles.info}>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <span>0</span>
                    </div>
                    <div className={styles.concludedTasks}>
                        <strong>Concluídas</strong>
                        <span>0</span>
                    </div>
                </div>
            </header>

            <div className={styles.emptyTasks}>
                <img src={emptyImage} alt="" draggable={false} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </article>

    )
}