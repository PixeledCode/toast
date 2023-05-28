import React from 'react'

export function useEscapeKey(callbackFn) {
	React.useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === 'Escape') {
				callbackFn()
			}
		}

		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [callbackFn])
}
