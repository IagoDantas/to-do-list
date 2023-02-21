import { Empty } from './Empty';
import styles from './Tasks.module.css';
import { ToDo } from './ToDo';


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


            {/* <Empty /> */}
            <div className={styles.taskList}>
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
            </div>
        </article>

    )
}