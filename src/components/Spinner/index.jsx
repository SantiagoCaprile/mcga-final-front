import React from "react";
import styles from "./spinner.module.css";


const Spinner = () => {
    return (
        <div className={styles.bouncingball}>
            <img src="https://freesvg.org/img/soccer_ball2.png" alt= "Loading" className={styles.ballImg}/>
        </div>
    )
}

export default Spinner