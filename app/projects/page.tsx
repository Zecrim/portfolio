import React from 'react'
import Link from 'next/link'
import styles from './Projects.module.css'
import Image from 'next/image'
import chef from '../../public/images/chef.png'
import wrench from '../../public/images/wrench.png'
import wordle from '../../public/images/wordle.png'


const Projects = () => {
    return(
        <>
            <h1 className='title'>Projects</h1>
            <main className={styles.list}>
                <Link href={'https://chef-book-7e05b256961b.herokuapp.com/'} target="_blank" rel="noopener noreferrer" className={styles.project}>Chef Book
                    <Image src={chef} alt="The Chef Book logo" width={256} className='image'/>
                </Link>
                <Link href={'https://the-wrench-collective-b3c568642add.herokuapp.com/'} target="_blank" rel="noopener noreferrer" className={styles.project}>The Wrench Collective
                    <Image src={wrench} alt="The Chef Book logo" width={256} className='image'/>
                </Link>
                <Link href={'https://zecrim.github.io/Cromdle/'} target="_blank" rel="noopener noreferrer" className={styles.project}>Wordle
                    <Image src={wordle} alt="The Chef Book logo" width={256} className='image'/>
                </Link>
            </main>
        </>
    )
}

export default Projects