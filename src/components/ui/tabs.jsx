import React, { createContext, useContext, useState } from 'react'
import { Scripts } from 'react-router-dom'

const TabsContext = createContext()
export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
    

  )
}

export function TabsList({ children, className }) {
  return (
    <div className={`inline-flex items-center justify-center rounded-md bg-muted p-1 ${className}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, className }) {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  const isActive = activeTab === value

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      } ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className }) {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null

  return <div className={className}>{children}</div>
}