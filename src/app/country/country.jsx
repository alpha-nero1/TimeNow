import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Data } from "../../data/data";
import { Back } from "../Back";

const domain = document.location.host

export const Country = () => {
    const { country: code } = useParams();
    const fullCountry = Data.Countries[code];
    const metaContent = `See the time now in cities in ${fullCountry.name}`;

    const getCityLinks = () => {
        return fullCountry.cities.map(city => (
            <div key={city.name} style={{ padding: '1rem' }}>
                <a style={{ fontSize: '16pt' }} href={`http://${domain}/${code}/${city.name}_offset_${city.offset}`}>{city.name}</a>
            </div>
        ));
    }

    return (
        <>
        <Back to={'/'}/>
            <div className="App">
                <Helmet>
                    <title>The current time in {fullCountry.name} | The time now in {fullCountry.name}</title>
                    <meta name="description" content={metaContent}></meta>
                </Helmet>
                <header style={{ paddingTop: '2rem', padding: '1rem', paddingBottom: 0 }}>
                    <h1>The time now in cities in { fullCountry.name }</h1>
                    <h2 style={{ padding: '1rem', paddingTop: '0.2rem' }}>Clocks for cities in { fullCountry.name } {fullCountry.emoji}</h2>
                </header>
                <div>
                    {getCityLinks()}
                </div>
            </div>
        </>
    )
}