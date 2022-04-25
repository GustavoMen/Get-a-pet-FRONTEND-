import styles from './Dashboard.module.css'
import api from '../../../utils/api'
import {useState, useEffect} from 'react'
import RoundedImage from '../../layout/RoundedImage'


function MyAdoptions() {
    
    const [pets, setPets] = useState()
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api
          .get('/pets/myadoptions', {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          })
          .then((response) => {
            setPets(response.data.pets)
          })
      }, [token])
      console.log(pets)
    

    return (
        <p>MyAdoptions</p>
    )
}

export default MyAdoptions