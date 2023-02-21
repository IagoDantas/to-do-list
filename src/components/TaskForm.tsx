import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { Tasks } from './Tasks'
export function TaskForm() {
    return (

        <main>
            <article className={styles.formWrapper}>
                <form className={styles.taskForm}>
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <button type="submit">
                        Criar
                        <PlusCircle size={18} weight='bold' />
                    </button>
                </form>

            </article>
            <article>

                <Tasks />
            </article>
        </main>

    )
}