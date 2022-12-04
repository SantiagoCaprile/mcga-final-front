import React from 'react'
import styles from './home.module.css'
import { useForm } from 'react-hook-form'

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Final MCGA</h1>
                <h2>Santiago Caprile</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input className={styles.input} {...register("username", { required: true })} />
                {errors.username && <span className={styles.error}>This field is requiered</span>}
                <label>Password</label>
                <input className={styles.input} type={"password"} {...register("password", { required: true })} />
                {errors.password && <span className={styles.error}>This field is required</span>}
                <button className={styles.button} type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Home