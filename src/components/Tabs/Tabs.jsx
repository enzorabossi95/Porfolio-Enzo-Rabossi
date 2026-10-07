import { useRef, useState } from 'react'
import styles from './Tabs.module.css'

export function Tabs({ label, tabs }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)
  const tabRefs = useRef([])

  function selectByIndex(index) {
    const wrapped = (index + tabs.length) % tabs.length
    setActiveId(tabs[wrapped].id)
    tabRefs.current[wrapped]?.focus()
  }

  function handleKeyDown(event, index) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      selectByIndex(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      selectByIndex(index - 1)
    }
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className={styles.tablist}>
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeId

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={styles.tab}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== activeId}
          tabIndex={0}
          className={styles.panel}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  )
}
