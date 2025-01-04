import React from "react";
import {getImageUrl} from "../../utils"
import styles from "./Informacion.module.css"
export const Informacion = () => {
    return(
        <div className={styles.section}>
            <div className={styles.info}>
                <h1>SEBASTIAN CHICO</h1>
                <p>Soy una persona apasionada por la filosofía, el arte y la tecnología, con una curiosidad constante por explorar nuevas ideas y perspectivas. Mi enfoque de vida se basa en el aprendizaje continuo y en la búsqueda de experiencias significativas que me permitan crecer tanto personal como profesionalmente. </p>
            </div>
            <div className={styles.imgCont}>
                <img src={getImageUrl("Foto.jpeg")} alt="Foto del desarrollador" />
            </div>
        </div>
    )
}