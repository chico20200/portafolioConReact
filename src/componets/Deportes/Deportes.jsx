import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./Deportes.module.css"
export const Deportes = () => {
    return (
        <section className={styles.section}>
            <h1>Deportes</h1>
            <div className={styles.deportes}>
                <div className={styles.deporte}>
                    <img src={getImageUrl("basketball.jpg")} alt="ilustracion desarrollador" />
                    <h2>BASKETBALL</h2>
                    <p>Cursando tercer semestre en La Escuela Politecnica Nacional</p>
                </div>
                <div className={styles.deporte}>
                    <img src={getImageUrl("voleybal.jpg")} alt="ilustración estudiante" />
                    <h2>VOLEYBAL</h2>
                    <p>Bachiller en ciencias culminado en el 2020</p>
                </div>
                <div className={styles.deporte}>
                    <img src={getImageUrl("senderismo.jpg")} alt="ilustración filosofos" />
                    <h2>SENDERISMO</h2>
                    <p>Lecturas autonomas y cursos con distintos maestros</p>
                </div>
            </div>
        </section>
    )
}