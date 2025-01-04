import React from "react"
import styles from "./Herramientas.module.css"
import { getImageUrl } from "../../utils"
export const Herramientas = ()=>{
    return(
        <section className={styles.section}>
            <h1>HERRAMIENTAS</h1>
            <div className={styles.herramientas}>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("python.png")} alt="" />
                    <h3>Python</h3>
                </div>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("html.png")} alt="" />
                    <h3>Html</h3>
                </div>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("css-3.png")} alt="" />
                    <h3>Css</h3>
                </div>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("js.png")} alt="" />
                    <h3>JS</h3>
                </div>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("MySql.png")} alt="" />
                    <h3>MySql</h3>
                </div>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("postgre.png")} alt="" />
                    <h3>Postgres</h3>
                </div>
                <div className={styles.herramienta}>
                    <img src={getImageUrl("linux.png")} alt="" />
                    <h3>Linux</h3>
                </div>
            </div>
        </section>
    )
}