import React from "react";
import styles from "./createMatch.module.css";
import Match from "../../components/Match";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import COUNTRYS from "../../utils/countrys";
import { useDispatch, useSelector } from "react-redux";
import { addMatchThunk, saveMatches } from "../../store/matches/thunks";
import { useNavigate } from "react-router-dom";

const CreateMatch = () => {
    const [preview, setPreview] = useState(
        {error: ""}
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const matchesSelector = useSelector(state => state.matches);

    useEffect(() => {
        dispatch(saveMatches())
    }, [dispatch])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.matchDate = data.matchDate.split("-").reverse().join("/") + " - " + data.matchTime;
        if(data.homeTeam === data.awayTeam){
            setPreview({error: "The teams can't be the same"});
        } else {
            data.error = "";
            data.date = data.matchDate;
            setPreview(data);
        }
    };

    const handleConfirm = () => {
        const formatDate = preview.date.split(" - ")[0].split("/").reverse().join("-") + "T" + preview.date.split(" - ")[1] + ":00.000Z";
        const newMatch = {
            homeTeam: preview.homeTeam,
            awayTeam: preview.awayTeam,
            date: formatDate
        };
        dispatch(addMatchThunk(newMatch))
        .then(() => {
            navigate("/matches");
        })
        .catch(() => {
            console.log("Error");
        })
    };

    if (matchesSelector.isLoading) {
        return <h1>Loading...</h1>;
    }

    if (matchesSelector.isError) {
        return <h1>Error...</h1>;
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Create Match</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row}>
                    <div className={styles.col}>
                    <select className={styles.select} name= "homeTeam" {...register("homeTeam", { required: true })}>
                        <option value="">-Home Team-</option>
                        {
                            COUNTRYS.map((country, index) => {
                                return <option key={index} value={country.name}>{country.name}</option>
                            })
                        }
                    </select>
                    {errors.homeTeam && <span className={styles.error}>Please select a team</span>}
                    </div>
                    <div className={styles.col}>
                    <select className={styles.select} name= "awayTeam" {...register("awayTeam", { required: true })}>
                        <option value="">-Away Team-</option>
                        {
                            COUNTRYS.map((country, index) => {
                                return <option key={index} value={country.name}>{country.name}</option>
                            })
                        }
                    </select>
                    {errors.awayTeam && <span className={styles.error}>Please select a team</span>}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <label>Match Date</label>
                        <input className={styles.input} type={"date"} {...register("matchDate", { required: true }  )} />
                        {errors.matchDate && <span className={styles.error}>Date is required</span>}
                    </div>
                    <div className={styles.col}>
                        <label>Match Time</label>
                        <input className={styles.input} type={"time"} {...register("matchTime", { required: true })} />
                        {errors.matchTime && <span className={styles.error}>Time is required</span>}
                    </div>
                </div>
                {
                    preview.error &&
                    (<span className={styles.error}>Teams can't be the same</span>)
                }
                <button className={styles.button} type="submit">Preview</button>
            </form>
            { preview.matchDate && preview.homeTeam && preview.awayTeam && !preview.error &&
                    (<div className={styles.preview}>
                        <div className={styles.row}>
                            <h2 className={styles.title}>Preview</h2>
                            <button className={styles.button} onClick={handleConfirm} >Save</button>
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