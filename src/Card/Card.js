import './Card.css'

export default function Card({imagem,titulo,genero,desenvolvedor,plataforma,descricao}){
    return(
        <div className = 'Card'>
            <img src = {imagem} alt = 'Foto do Jogo'/>
            <div className = 'Titulo'>
                <h1>{titulo}</h1>
            </div>
            <div className = 'genero'>
                <h4>{genero}</h4>
            </div>
            <div className = 'desenvolvedor'>
                <h4>{desenvolvedor}</h4>
            </div>
            <div className = 'plataforma'>
                <h4>{plataforma}</h4>
            </div>
            <div className = 'descricao'>
                <p>{descricao}</p>
            </div>
        </div>
    )
    
    
    
}