import { useState } from "react"
import InfoBox from "./infoBox"
import Search from "./search"

export default function (){
    let[weatherInfo , setWeatherInfo] = useState({
        city:"jaipur",
        feelsLike: 31.77,
        temp: 29.62,
        tempMax: 29.62,
        tempMin: 29.62,
        weather: "haze",
        humidity:61,
    })

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }
    return(
        <div>
            <h2>Weather app by Nam</h2>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}