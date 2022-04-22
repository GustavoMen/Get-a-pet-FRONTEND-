import styles from './AddPet.module.css'
import api from '../../../utils/api'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useFlashMessage from '../../../hooks/useFlashMessage'

// COMPONENTS
import PetForm from '../../form/PetForm'

function AddPet() {

    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>O pet cadastrado ficara disponivel para adoção</p>
            </div>
            <PetForm btnText='Cadastrar Pet'/>
        </section>
    )
}

export default AddPet