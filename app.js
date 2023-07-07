import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const configuracion = JSON.parse(process.env.CONFIG);


const apiKey = 'FkIw9aQ7EJrI27ZoSRVSNvn5Djo4RYYoRw6iRmhZ';
const startDate = '2023-07-01';
const endDate = '2023-07-04';
const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
async function getDataAsteroids(){
    let request = await fetch(apiUrl);
    console.log(await request.json());
}
getDataAsteroids();

app.listen(configuracion.port, configuracion.hostname, () => {
    console.log(`http://127.127.127.127:${configuracion.port}`);
});