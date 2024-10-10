import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function search({updateInfo}){
    let[city , setCity] = useState("");
    let[error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "25c413770bc40c0c78eb30943e07c680";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JSONresponse = await response.json();
            console.log(JSONresponse);
    
            let result = {
                city:city,
                temp : JSONresponse.main.temp,
                tempMax: JSONresponse.main.temp_max,
                tempMin : JSONresponse.main.temp_min,
                feelsLike: JSONresponse.main.feels_like,
                weather:JSONresponse.weather[0].description,
                humidity:JSONresponse.main.humidity
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    }

    let handleChange =  (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("")
            let newInfo  = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err) {
            setError("Sorry , but we couldn't found that place!")
        }
        
    }

    return(
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">
        Search
      </Button>
      {/* {error && <p>No such place exist!</p>} */}
            </form>
        </div>
    )
}