//next js imports
import Link from 'next/link'
import styles from './Navigation.module.css'


import React from 'react'


const Navigation = ({links}) => {
  return (
    <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({label, route}) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
  )
}

export default Navigation