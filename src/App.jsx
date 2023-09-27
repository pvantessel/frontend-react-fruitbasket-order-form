import './App.css'
import {useState} from "react";
import FruitCounter from "./components/FruitCounter.jsx";
import FormInputField from "./components/FormInputField.jsx";

function App() {

    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    function resetAllFruits() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [postalcode, setPostalcode] = useState("");
    const [frequency, toggleFrequency] = useState("Wekelijks");
    const [timeslot, toggleTimeslot] = useState("Overdag");
    const [remarks, setRemarks] = useState("");
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    function submitForm(e) {
        e.preventDefault();
        console.log(`Details bestelling van ${firstname} ${lastname}`);
        console.log(`Bestelde producten: Bananen (${bananas}X), aardbeien (${strawberries}X), appels (${apples}X) & kiwi's (${kiwis}X)`);
        console.log(`
        Voornaam: ${firstname},
        Achternaam: ${lastname},
        Leeftijd: ${age},
        Postcode: ${postalcode},
        Bezorg frequentie: ${frequency},
        Bezorg tijdslot: ${timeslot},
        Opmerkingen: ${remarks},
        Algemene voorwaarden: ${agreeTerms}`
        );
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <section className="productOverview">

                <h2>Onze producten</h2>
                <article className="productCard">
                    <h3>🍌 Bananen</h3>
                    <FruitCounter
                        fruit={bananas}
                        setFruit={setBananas}
                        productClass="productButtons"
                    />
                </article>

                <article className="productCard">
                    <h3>🍓 Aardbeien</h3>
                    <FruitCounter
                        fruit={strawberries}
                        setFruit={setStrawberries}
                        productClass="productButtons"
                    />
                </article>

                <article className="productCard">
                    <h3>🍏 Appels</h3>
                    <FruitCounter
                        fruit={apples}
                        setFruit={setApples}
                        productClass="productButtons"
                    />
                </article>

                <article className="productCard">
                    <h3>🥝 Kiwi's</h3>
                    <FruitCounter
                        fruit={kiwis}
                        setFruit={setKiwis}
                        productClass="productButtons"
                    />
                </article>

                <button type="button" onClick={resetAllFruits} className="resetButton">Reset</button>

            </section>

            <section className="contactSection">

                <h2>Contact formulier</h2>

                <form onSubmit={submitForm} className="contactForm">

                    <FormInputField
                        labelInputClass="contactDivInput"
                        labelName="inputFirstname"
                        labelText="Voornaam"
                        inputType="text"
                        inputName="inputFirstname"
                        inputValue={firstname}
                        setInput={setFirstname}
                    />

                    <FormInputField
                        labelInputClass="contactDivInput"
                        labelName="inputLastname"
                        labelText="Achternaam"
                        inputType="text"
                        inputName="inputLastname"
                        inputValue={lastname}
                        setInput={setLastname}
                    />

                    <FormInputField
                        labelInputClass="contactDivInput"
                        labelName="inputAge"
                        labelText="Leeftijd"
                        inputType="text"
                        inputName="inputAge"
                        inputValue={age}
                        setInput={setAge}
                    />

                    <FormInputField
                        labelInputClass="contactDivInput"
                        labelName="inputPostalcode"
                        labelText="Postcode"
                        inputType="text"
                        inputName="inputPostalcode"
                        inputValue={postalcode}
                        setInput={setPostalcode}
                    />

                    <div className="contactDivSelect">
                        <p>Bezorg frequentie</p>
                        <select
                            name="frequency"
                            id="frequency"
                            value={frequency}
                            onChange={(e) => toggleFrequency(e.target.value)}
                        >
                            <option value="Wekelijks">Iedere week</option>
                            <option value="Om de week">Om de week</option>
                            <option value="Maandelijks">Iedere maand</option>
                        </select>
                    </div>

                    <div className="contactDivRadio">
                        <input
                            type="radio"
                            name="timeslot"
                            id="timeslotDaytime"
                            value="Overdag"
                            checked={timeslot === 'Overdag'}
                            onChange={(e) => toggleTimeslot(e.target.value)}
                        />
                        <label htmlFor="timeslotDaytime">
                            Overdag
                        </label>

                        <input
                            type="radio"
                            name="timeslot"
                            id="timeslotEvening"
                            value="'s Avonds"
                            onChange={(e) => toggleTimeslot(e.target.value)}
                        />
                        <label htmlFor="timeslotEvening">
                            's Avonds
                        </label>
                    </div>

                    <div className="contactDivTextarea">
                        <label htmlFor="remarks">
                            Opmerking
                        </label>
                        <textarea
                            name="remarks"
                            id="remarks"
                            cols="50"
                            rows="15"
                            placeholder="Plaats hier uw opmerking"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                        >
                        </textarea>
                    </div>

                    <div className="contactDivCheckbox">
                        <input
                            type="checkbox"
                            id="conditions"
                            name="terms-and-conditions"
                            value={agreeTerms}
                            onChange={(e) => toggleAgreeTerms(e.target.checked)}
                        />
                        <label htmlFor="conditions">
                            Ik ga akkoord met de voorwaarden
                        </label>
                    </div>

                    <button type="submit">Verzend</button>
                </form>
            </section>

        </>
    )
}

export default App
