import WelcomeMessage from "./WelcomeMessage.jsx"
import InterestList from "./InterestList.jsx"

export default function Header(props) {
  return (
    <header>
      <h1>Tjosan från {props.name}!</h1>

      <WelcomeMessage
        namn={props.name}
        stad="Lund"                    // hårdkodat här eller skicka från App om du vill
        breakfast="oat meal"
        extraMessage="Min mitt heter Kattens!"
        lastProp="Detta är sista testet."
      />

      <InterestList interests={props.interests} />

      <p>Header-sektionen med massa fina komponenter!</p>
    </header>
  )
}