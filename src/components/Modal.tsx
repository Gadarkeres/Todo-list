import React from 'react'

//css
import styles from './Modal.module.css'


type Props = {
    children: React.ReactNode
 

}

const modal = ({children}: Props) => {

    const closeModal = (e:React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }




  return (
    <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
        <i className="bi bi-x-lg" onClick={closeModal}></i>
            <h2>Edite sua tarefa</h2>
            {children}
        </div>

    </div>
  )
}

export default modal