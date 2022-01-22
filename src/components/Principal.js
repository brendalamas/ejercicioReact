import Boton from "./Boton";
import "../styles/Principal.scss";

const Principal = ({titulo, subtitulo, imagen, boton})=>{
    return (
        <main className="principal">
            <section >
                <h1>{titulo}</h1>
                <h4>{subtitulo}</h4>
                <img src={imagen}/>
                <Boton
                boton="primera"/>
            </section>
            <section className={`section ${boton}`}>
                <h1>{titulo}</h1>
                <h4>{subtitulo}</h4>
                <img src={imagen}/>
                <Boton
                boton="segunda"/>
            </section>
        </main>
    )
}

export default Principal;