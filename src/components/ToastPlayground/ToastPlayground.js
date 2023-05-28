import React from 'react'
import Button from '../Button'
import { ToastContext } from '../ToastProvider'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
	const [text, setText] = React.useState('')
	const [variant, setVariant] = React.useState('notice')
	const { addToast } = React.useContext(ToastContext)

	function afterAddFn() {
		setVariant('notice')
		setText('')
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf />

			<form
				className={styles.controlsWrapper}
				onSubmit={(e) => {
					e.preventDefault()
					addToast(text, variant, afterAddFn)
				}}
			>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => (
							<label htmlFor={`variant-${option}`} key={option}>
								<input
									id={`variant-${option}`}
									type="radio"
									name="variant"
									value={option}
									checked={variant === option}
									onChange={() => setVariant(option)}
								/>
								{option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="submit">Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ToastPlayground
