import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css"

export default function InfoBox({info}){
    let INIT_IMG = "https://images.unsplash.com/photo-1557752541-b7b612a992e7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    let HOT_IMG = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=2048x2048&w=is&k=20&c=GFLYF-pRw41qTUwGyU4V1J1qcI0ilFkKx0zuDPd_uqE="
    let COLD_IMG = "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_IMG = "https://media.istockphoto.com/id/1193749265/photo/sullen-day.jpg?s=2048x2048&w=is&k=20&c=wn75KQ1GspEJ6tbLFvryj3bqE2BJb8ZDKOTuUgA6dX0=";

    return (
        <div className="InfoBox">
            <h3>Weather info - {info.weather}</h3>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_IMG : info.temp > 15 ? HOT_IMG : COLD_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature:{info.temp}&deg;C</p>
          <p>Humidity:{info.humidity}</p>
          <p>Min temp:{info.tempMin}&deg;C</p>
          <p>Max temp:{info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}