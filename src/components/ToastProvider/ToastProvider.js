import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
	const [toastList, setToastList] = React.useState([])

	const addToast = (text, variant, afterAddFn) => {
		if (text) {
			setToastList((prev) => [...prev, { text, variant, id: Date.now() }])
			afterAddFn && afterAddFn()
		}
	}

	const removeToast = (id) => {
		setToastList((prev) => prev.filter((toast) => toast.id !== id))
	}

	return (
		<ToastContext.Provider value={{ toastList, addToast, removeToast }}>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastProvider
