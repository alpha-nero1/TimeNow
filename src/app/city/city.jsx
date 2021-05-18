import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Data } from "../../data/data";
import { Back } from "../Back";
import { Clock } from "../Clock";

export const City = () => {
    const { city, country } = useParams();
    const [name, _, offset] = city.split('_');
    const fullCountry = Data.Countries[country];
    const metaContent = `See the time now in ${name}, ${fullCountry.name} in real-time.`
    return (
        <>
            <Back to={'/' + country}/>
            <div className="App">
                <Helmet>
                    <title>The time now in {name}, {fullCountry.name} | Current {name} time</title>
                    <meta name="description" content={metaContent}></meta>
                </Helmet>
                <header style={{ paddingTop: '2rem', padding: '1rem', paddingBottom: 0 }}>
                    <h1>The time now in {name}, {fullCountry.name}</h1>
                    <h2>The current time in {name} {fullCountry?.emoji}</h2>
                </header>
                <Clock offset={offset}/>
            </div>
        </>
        
    )
}