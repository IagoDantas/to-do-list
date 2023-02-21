import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'

export function TaskForm() {
    return (
        <article className={styles.taskWrapper}>
            <form className={styles.taskForm}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button type="submit">
                    Criar
                    <PlusCircle size={20} weight='bold' />
                </button>
            </form>
        </article>
    )
}