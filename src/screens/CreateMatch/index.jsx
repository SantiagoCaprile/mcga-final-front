import React from "react";
import styles from "./createMatch.module.css";
import Match from "../../components/Match";
import { useForm } from "react-hook-form";

const CreateMatch = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Create Match</h1>
            <form className={styles.form} onSubmit={handleSubmit()}>
                <div className={styles.row}>
                    <label>Home Team</label>
                    <select className={styles.select} name= "homeTeam" {...register("homeTeam", { required: true })}>
                        <option value="1">Team 1</option>
                        <option value="2">Team 2</option>
                        <option value="3">Team 3</option>
                    </select>
                    {errors.homeTeam && <span className={styles.error}>This field is requiered</span>}
                    <label>Away Team</label>
                    <select className={styles.select} name= "homeTeam" {...register("awayTeam", { required: true })}>
                        <option value="1">Team 1</option>
                        <option value="2">Team 2</option>
                        <option value="3">Team 3</option>
                    </select>
                    {errors.awayTeam && <span className={styles.error}>This field is required</span>}
                </div>
                <div className={styles.row}>
                    <label>Match Date</label>
                    <input className={styles.input} type={"date"} {...register("matchDate", { required: true }  )} />
                    {errors.matchDate && <span className={styles.error}>Date is required</span>}
                    <label>Match Time</label>
                    <input className={styles.input} type={"time"} {...register("matchTime", { required: true })} />
                    {errors.matchTime && <span className={styles.error}>Time is required</span>}
                </div>
                <button className={styles.button} type="submit">Create Match</button>
            </form>
            <h2 className={styles.title}>Preview</h2>
            <Match />
        </div>
    );
};

export default CreateMatch;