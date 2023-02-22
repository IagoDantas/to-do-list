import styles from './Tasks.module.css';
import { Check, Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useState } from 'react';

interface TasksProps {
    content: string;
    onDeleteTasks: (task: string) => void;
    onConcludedTask: (task: string) => void;
}

export function Tasks({ content, onConcludedTask, onDeleteTasks }: TasksProps) {


    const [concludedTasks, setConcludedTasks] = useState<string[]>([])

    function handleDeleteTask() {
        onDeleteTasks(content)
        setConcludedTasks(concludedTasks.filter(taskItem => {
            return taskItem !== content
        }))
    }

    function concludedTask() {
        if (concludedTasks.includes(content)) {
            setConcludedTasks(concludedTasks.filter(taskItem => {
                return taskItem !== content
            }))
        }
        else {
            return setConcludedTasks([...concludedTasks, content])
        }
    }

    function handleConcludedTask() {
        concludedTask()
        onConcludedTask(content)
    }

    console.log(concludedTasks)


    return (
        <div className={styles.todo}>
            <Checkbox.Root
                onCheckedChange={handleConcludedTask}
                className={concludedTasks.includes(content) ? styles.checkedImg : styles.checkImg}
            >
                <Checkbox.Indicator className={concludedTasks.includes(content) ? styles.checkbox : styles.checked}>
                    <Check size={16} weight='bold' />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span
                className={
                    concludedTasks.includes(content) ?
                        styles.todoDisabledText :
                        styles.todoText
                }>{content}</span>
            <button onClick={handleDeleteTask} className={styles.trashButton}>
                <Trash size={20} />
            </button>
        </div>

    )
}