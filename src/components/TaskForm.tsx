import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { Empty } from './Empty';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Tasks } from './Tasks';

export function TaskForm() {

    const [concludedTasks, setConcludedTasks] = useState<string[]>([])

    const [newTask, setNewTask] = useState<string[]>([])

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

        if (concludedTasks.includes(task)) {
            setConcludedTasks(concludedTasks.filter(taskItem => {
                return taskItem !== task
            }))
        }
        else {
            return setConcludedTasks([...concludedTasks, task])
        }
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('A tarefa não pode ser vazia.')
    }

    const isNewTaskEmpty = newTaskText.length === 0

    return (
        <main>
            <article className={styles.formWrapper}>
                <form className={styles.taskForm}>
                    <input
                        type="text"
                        value={newTaskText}
                        onInvalid={handleNewTaskInvalid}
                        onChange={handleNewTaskTextChange} placeholder="Adicione uma nova tarefa"
                        required
                    />
                    <button
                        onClick={handleCreateNewTask}
                        disabled={isNewTaskEmpty}
                        type="submit">
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
                                <span>{newTask.length > 0 ? `${concludedTasks.length} de ${newTask.length}` : newTask.length}</span>
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