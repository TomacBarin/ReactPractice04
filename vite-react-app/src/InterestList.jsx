export default function InterestList(props) {
    const interests = props.interests;

    return (
        <section>
        <h2>Mina intressen:</h2>
        <ul>
            {interests.map((interest, index) => (
            <li key={index}>
                {interest}
            </li>
            ))}
        </ul>
        </section>
    )
    }