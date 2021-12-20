import React from 'react'
import styles from '../styles/component_styles/Navbar-styles.module.css'

export default function NavBar() {
    return (
        <div className={`${styles.nav} mx-auto flex justify-between items-center pt-5`}>
            <h3 className='xs:text-lg sm:text-sm md:text-sm font-bold '>projectname</h3>
            <h4 className={`hidden md:block xs:text-2xs sm:text-xs md:text-2xs font-medium ${styles.soon}`}>coming soon</h4>   
        </div>
    )
}