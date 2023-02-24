import styles from './Tasks.module.css';
import { Check, Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'

interface TasksProps {
    isConcluded: boolean;
    content: string;
    onDeleteTasks: (task: string) => void;
    onConcludedTask: (task: string) => void;
}

export function Task({ content, onConcludedTask, onDeleteTasks, isConcluded }: TasksProps) {


    function handleDeleteTask() {
        onDeleteTasks(content)
    }


    function handleConcludedTask() {
        onConcludedTask(content)
    }

    return (
        <div className={styles.todo}>
            <Checkbox.Root
                onCheckedChange={handleConcludedTask}
                className={isConcluded ? styles.checkedImg : styles.checkImg}
                checked={isConcluded}
            >
                <div
                    className={
                        isConcluded ?
                            styles.checked
                            :
                            styles.checkbox
                    }
                >
                    <Checkbox.Indicator >
                        <Check size={16} weight='bold' />
                    </Checkbox.Indicator>
                </div>

            </Checkbox.Root>
            <span
                className={
                    isConcluded ?
                        styles.todoDisabledText :
                        styles.todoText
                }>{content}
            </span>

            <button onClick={handleDeleteTask} className={styles.trashButton}>
                <Trash size={20} />
            </button>
        </div >

    )
}