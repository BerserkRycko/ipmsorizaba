import React, { createContext, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const DialogContext = createContext()

export function Dialog({ children, open, onOpenChange }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}

export function DialogContent({ children, className = '' }) {
  const { open, onOpenChange } = useContext(DialogContext)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) return null

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className={`relative bg-background rounded-lg shadow-lg w-200 max-h-[90vh] overflow-auto p-4 ${className}`}>
        <button
          className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
          onClick={() => onOpenChange(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export function DialogHeader({ className = '', ...props }) {
  return <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
}

export function DialogTitle({ className = '', ...props }) {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
}

export function DialogDescription({ className = '', ...props }) {
  return <p className={`text-sm text-muted-foreground ${className}`} {...props} />
}