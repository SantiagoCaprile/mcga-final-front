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
                <h2>Aca va el log In</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Username</label>
                    <input {...register("username", { required: true })} />
                    {errors.username && <span>This field is requiered</span>}
                    <label>Password</label>
                    <input type={"password"} {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Home