import { Check, Trash } from 'phosphor-react'
import styles from './ToDo.module.css'

import * as Checkbox from '@radix-ui/react-checkbox'

export function ToDo() {
    return (
        <div className={styles.todo}>
            <Checkbox.Root className={styles.checkImg}>
                <Checkbox.Indicator className={styles.checkbox}>
                    <Check size={16} weight='bold' />
                </Checkbox.Indicator>
            </Checkbox.Root>
            {<span className={styles.todoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt quia doloribus non veniam.</span>}
            <button className={styles.trashButton}>
                <Trash size={20} />
            </button>
        </div>

    )
}