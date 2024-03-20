export default function Pokemon(props){
    return <article>
        <h1>{props?.name}</h1>
        <div>
            <img src={props?.sprites?.front_default} alt="" />
        </div>
        <div>
            <h2>Stats</h2>
            {props?.stats?.map((stat,i)=>
                <p key={i}>
                    <b>{stat.stat.name}:</b>
                    <span>{stat.base_stat}</span>
                </p>
            )}
        </div>
    </article>
}
