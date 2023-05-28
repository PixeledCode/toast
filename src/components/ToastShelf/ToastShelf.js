import React from 'react'
import Toast from '../Toast'
import { ToastContext } from '../ToastProvider'
import styles from './ToastShelf.module.css'

function ToastShelf() {
	const { toastList } = React.useContext(ToastContext)

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toastList.map((toast) => {
				return (
					<li className={styles.toastWrapper} key={toast.id}>
						<Toast variant={toast.variant} text={toast.text} id={toast.id} />
					</li>
				)
			})}
		</ol>
	)
}

export default ToastShelf
