import React from 'react'
import styles from './home.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { saveUsers } from '../../store/users/thunks'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userSelector = useSelector(state => state.users)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const user = {
            name: data.username,
            password: data.password
        }
        dispatch(saveUsers(user))
    }

    if (userSelector.error) {
        console.log("Error: ", userSelector.error)
    }

    if (userSelector.data.message === "OK") {
        navigate("/matches")
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
                {
                    userSelector.isLoading? <div className={styles.loading}>Loading...</div>
                    : <button className={styles.button} type="submit">Log In</button>
                }

            </form>
            {
                userSelector.isError && <div className={styles.error}>Invalid Credentials</div>
            }
        </div>
    )
}

export default Home