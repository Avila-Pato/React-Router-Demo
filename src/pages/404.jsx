import { Link } from "./Link";

export default function Page404 (){
    return (
        <>
        <div> 
            <h1> Page 404 </h1>
            <img src="https://wallpapercave.com/wp/wp7351915.jpg" alt="no esta bn " />
            <p>Esta pagina no existe</p>
            </div>

        <Link to="/">Volver al inicio</Link>
        </>
    )
}