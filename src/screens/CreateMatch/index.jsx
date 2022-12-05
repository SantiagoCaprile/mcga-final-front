import React from "react";
import styles from "./createMatch.module.css";
import Match from "../../components/Match";
import { useForm } from "react-hook-form";
import { useState } from "react";
import COUNTRYS from "../../utils/countrys";

console.log(COUNTRYS);
const CreateMatch = () => {
    const [preview, setPreview] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        data.matchDate = data.matchDate.split("-").reverse().join("/") + " - " + data.matchTime;
        setPreview(data);
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Create Match</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row}>
                    <label>Home Team</label>
                    <select className={styles.select} name= "homeTeam" {...register("homeTeam", { required: true })}>
                        {
                            COUNTRYS.map((country, index) => {
                                return <option key={index} value={country.name}>{country.name}</option>
                            })
                        }
                    </select>
                    {errors.homeTeam && <span className={styles.error}>This field is requiered</span>}
                    <label>Away Team</label>
                    <select className={styles.select} name= "homeTeam" {...register("awayTeam", { required: true })}>
                        {
                            COUNTRYS.map((country, index) => {
                                return <option key={index} value={country.name}>{country.name}</option>
                            })
                        }
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
                <button className={styles.button} type="submit">Preview</button>
            </form>
            { preview.matchDate &&
                    (<div className={styles.preview}>
                        <div className={styles.row}>
                            <h2 className={styles.title}>Preview</h2>
                            <button className={styles.button}>Save</button>
                        </div>
                        <Match
                        homeTeam={preview.homeTeam}
                        awayTeam={preview.awayTeam}
                        matchDate={preview.matchDate}
                        />
                    </div>
                    )
            }

        </div>
    );
};

export default CreateMatch;