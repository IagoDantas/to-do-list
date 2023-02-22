import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { Empty } from './Empty';


import { ChangeEvent, FormEvent, useState } from 'react'
import { Tasks } from './Tasks';
export function TaskForm() {

    const [concludedTasks, setConcludedTasks] = useState<string[]>([])

    const [newTask, setNewTask] = useState<string[]>([
        // 'Lavar louça',
        // 'Estudar',
        // 'Lavar roupa',
    ])

    const [newTaskText, setNewTaskText] = useState('')


    function handleCreateNewTask(event: FormEvent) {

        event.preventDefault()

        setNewTask([...newTask, newTaskText])
        setNewTaskText('')
    }

    function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {

        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)

    }

    function deleteTask(task: string) {
        const tasksWithoutDeletedOne = newTask.filter(taskItem => {
            return taskItem !== task
        })
        setNewTask(tasksWithoutDeletedOne)
    }

    function concludedTask(task: string) {

        setConcludedTasks([...concludedTasks, task])
    }

    return (
        <main>
            <article className={styles.formWrapper}>
                <form className={styles.taskForm}>
                    <input type="text" onChange={handleNewTaskTextChange} placeholder="Adicione uma nova tarefa" />
                    <button onClick={handleCreateNewTask} type="submit">
                        Criar
                        <PlusCircle size={18} weight='bold' />
                    </button>
                </form>

            </article>
            <article>

                <article className={styles.taskWrapper}>
                    <header>
                        <div className={styles.info}>
                            <div className={styles.createdTasks}>
                                <strong>Tarefas criadas</strong>
                                <span>{newTask.length}</span>
                            </div>
                            <div className={styles.concludedTasks}>
                                <strong>Concluídas</strong>
                                <span>{`${concludedTasks.length} de ${newTask.length}`}</span>
                            </div>
                        </div>
                    </header>

                    <div className={styles.taskList}>
                        {newTask.length > 0 ? newTask.map((task) => {
                            return (
                                <Tasks content={task} onDeleteTasks={deleteTask} onConcludedTask={concludedTask} />
                            )
                        }) : <Empty />}
                    </div>

                </article>
            </article>
        </main>

    )
}