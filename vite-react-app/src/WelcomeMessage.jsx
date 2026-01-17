export default function WelcomMessage(props) {
    return (
        <section>
            <h2>React-övning, haom!</h2>
            <p>Jag befinner mig i {props.stad}</p>
            <p>På morgonen äter jag {props.breakfast}</p>
            <p>Extra notis: {props.extraMessage}</p>
        </section>
    )
}