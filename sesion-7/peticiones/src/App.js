import { useEffect, useState } from "react"
import { URL_API } from "./API"
import { EntradaBlog } from "./EntradaBlog"

export function App(){
    const [entrada, setEntrada] = useState()

    // Cuando cargue el componente se usa []
    useEffect(()=>{
        // Resultado: https://jsonplaceholder.typicode.com/posts
        fetch(`${URL_API}posts`)
        .then((respuesta)=>respuesta.json())
        .then(setEntrada)
    }, [])

    return (<div>
        <h1>Peticiones de API</h1>

        <div>
            {entrada && entrada.map((post)=> <EntradaBlog key={post.id} {...post} />)}
        </div>
    </div>)
}
