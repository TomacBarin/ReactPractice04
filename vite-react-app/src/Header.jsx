export default function Header(props) {
    return(
        <header>
            <h1>Tjosan från {props.name}</h1>
            <p>Detta är från {props.stad}</p>
            <p>Gone {props.interest}</p>
            <p>I eat {props.breakfast}</p>
        </header>
    )
}