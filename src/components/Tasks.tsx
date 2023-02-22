import styles from './Tasks.module.css';
import { Check, Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'

interface TasksProps {
    content: string;
    onDeleteTasks: (task: string) => void;
    onConcludedTask: (task: string) => void;
}

export function Tasks({ content, onConcludedTask, onDeleteTasks }: TasksProps) {

    function handleDeleteTask() {
        onDeleteTasks(content)
    }

    return (
        <div className={styles.todo}>
            <Checkbox.Root className={styles.checkImg}>
                <Checkbox.Indicator className={styles.checkbox}>
                    <Check size={16} weight='bold' />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span className={styles.todoText}>{content}</span>
            <button onClick={handleDeleteTask} className={styles.trashButton}>
                <Trash size={20} />
            </button>
        </div>

    )
}