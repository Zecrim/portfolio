import React from 'react'
import Link from 'next/link'
import styles from './Projects.module.css'

const Projects = () => {
    return(
        <>
            <h1>Projects</h1>
            <main className={styles.list}>
                <div className={styles.project}>
                    <Link href={'https://chef-book-7e05b256961b.herokuapp.com/'} target="_blank" rel="noopener noreferrer">Chef Book</Link>
                </div>
                <div className={styles.project}>
                    <Link href={'https://the-wrench-collective-b3c568642add.herokuapp.com/'} target="_blank" rel="noopener noreferrer">The Wrench Collective</Link>
                </div>
                <div className={styles.project}>
                    <Link href={'https://zecrim.github.io/Cromdle/'} target="_blank" rel="noopener noreferrer">Wordle</Link>
                </div>
            </main>
        </>
    )
}

export default Projects