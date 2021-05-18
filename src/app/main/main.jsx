import { Helmet } from "react-helmet";
import { Data } from "../../data/data";
import { Clock } from "../Clock";
import { Footer } from "../Footer";

const domain = document.location.host

const renderCounries = () => Object.values(Data.Countries).map(country => (
    <div key={`tn-${country.code}`} id={`tn-country-${country.code}`} style={{ padding: '1rem', textAlign: 'left' }}>
        <a style={{ fontSize: '16pt' }} href={`http://${domain}/${country.code}`}>{country?.emoji}&nbsp; {country.name} </a>
    </div>
));

const metaContent = `See your local time, in real-time! From here you can also discover the current time in other global cities such as Sydney, New York and Milan!`

export const MainPage = () => (
    <div className="App">
        <Helmet>
            <title>The time now | The local time | The current time</title>
            <meta name="description" content={metaContent}></meta>
        </Helmet>
        <header style={{ paddingTop: '2rem' }}>
            <h1>The time now</h1>
            <h2>Your real-time clock.</h2>
        </header>
        <Clock />
        <div style={{ marginRight: 'auto', marginLeft: 'auto', minWidth: '30%' }}>
            <h3>Time in other places...</h3>
            <div style={{ maxHeight: '24vh', overflowY: 'scroll', width: '100%' }}>
                {renderCounries()}
            </div>
        </div>
        <Footer />
    </div>
);