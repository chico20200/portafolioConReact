import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./Estudios.module.css"
export const Estudios =()=>{
    return(
        <section className={styles.section}>
            <h1>ESTUDIOS</h1>
            <div className={styles.estudios}>
                <div className={styles.estudio}>
                    <img src={getImageUrl("desarrollador.jpg")} alt="ilustracion desarrollador" />
                    <h2>Desarrollo de software</h2>
                    <p>Cursando tercer semestre en La Escuela Politecnica Nacional</p>
                </div>
                <div className={styles.estudio}>
                    <img src={getImageUrl("estudiante.jpg")} alt="ilustración estudiante" />
                    <h2>Bachillerato</h2>
                    <p>Bachiller en ciencias culminado en el 2020</p>
                </div>
                <div className={styles.estudio}>
                    <img src={getImageUrl("filosofos.jpg")} alt="ilustración filosofos" />
                    <h2>Filosofía</h2>
                    <p>Lecturas autonomas y cursos con distintos maestros</p>
                </div>
            </div>
        </section>
    )

}