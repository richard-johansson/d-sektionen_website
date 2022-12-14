import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import background from '../img/newStudents.jpg';
import "../css/background.css";

export default function NewStudents() {
    return (
        <div>
            <div 
                className="bg" 
                style={{backgroundImage: `url(${background})`}} 
            >
                <div className="centered">
                    Sökande
                </div>
            </div>

            <div className="container">
                <h2 className="mt-3">Om programmen</h2>
                    <a>D-sektionen representerar idag tre stycken civilingenjörsutbildningar inom data/IT, 
                        en kandidatutbildning inom programmering och en masterutbildning inom programmering. 
                        Dessa är:
                    </a>
                    <ul>
                        <li>
                            <a>Civilingenjörsprogrammet i datateknik</a>
                        </li>
                        <li>
                            <a>Civilingenjörsprogrammet i informationsteknologi</a>
                        </li>
                        <li>
                            <a>Civilingenjörsprogrammet i mjukvaruteknik</a>
                        </li>
                        <li>
                            <a>Kandidatprogrammet i innovativ programmering</a>
                        </li>
                        <li>
                            <a>Masterprogrammet i Computer Science</a>
                        </li>
                    </ul> 
                <h2 className="mt-5">Civilingenjörsprogrammet i datateknik (D)</h2>
                <a>Detta program startades 1975 och är därmed den äldsta civilingenjörsutbildningen inom data. Därför har det 
                    erhållit stort förtroende hos arbetsmarknaden. Programmet vill dock inte leva på gamla meriter, utan strävar 
                    hela tiden efter att anpassa och utveckla sig med omvärlden.</a>
                <h4>Läs mer</h4>
                <ul>
                    <li>
                        <a href="https://liu.se/utbildning/program/6cddd">LiU:s hemsida om datateknikprogrammet</a>
                    </li>
                    <li>
                        <a href="https://liu.se/artikel/masterprofiler-for-datateknik">Masterprofiler för datateknik</a>
                    </li>
                </ul>
                <h3>Detta läser du</h3>
                <img src={require("../img/content-D.png")} className="img-fluid" alt="Detta läser du"></img>
                
                <h2 className="mt-5">Civilingenjörsprogrammet i informationsteknologi (IT)</h2>
                <a>Denna utbildning har ett stort fokus på att arbeta i grupp och utmanar studenterna genom sin speciella 
                    problemlösningsmetodik. Denna syftar till att öka studenternas förmåga att lösa problem och att ge dem en bättre 
                    förutsättning för att kunna arbeta i projektgrupper på deras framtida arbetsplatser.</a>
                <h4>Läs mer</h4>
                <ul>
                    <li>
                        <a href="https://liu.se/utbildning/program/6cite">LiU:s hemsida om informationsteknologiprogrammet</a>
                    </li>
                    <li>
                        <a href="https://liu.se/artikel/masterprofiler-for-informationsteknologi">Masterprofiler för IT</a>
                    </li>
                </ul>
                <h3>Detta läser du</h3>
                <img src={require("../img/content-IT.png")} className="img-fluid" alt="Detta läser du"></img>

                <h2 className="mt-5">Civilingenjörsprogrammet i mjukvaruteknik (U)</h2>
                <a>Den här utbildning startades år 2013. Utbildningen har tagits fram i samarbete med både studenter 
                    och näringsliv. Det innebär att utbildningen verkligen ligger i tiden och ger studenterna den 
                    kompetens IT-företagen vill ha.</a>
                <h4>Läs mer</h4>
                <ul>
                    <li>
                        <a href="https://liu.se/utbildning/program/6cmju">LiU:s hemsida om mjukvaruteknikprogrammet</a>
                    </li>
                    <li>
                        <a href="https://liu.se/artikel/masterprofiler-for-mjukvaruteknik">Masterprofiler för mjukvaruteknik</a>
                    </li>
                </ul>
                <h3>Detta läser du</h3>
                <img src={require("../img/content-U.png")} className="img-fluid" alt="Detta läser du"></img>
                
                <h2 className="mt-5">Kandidatprogrammet i innovativ programmering (IP)</h2>
                <a>Detta är ett kandidatprogram för den som är intresserad av eller vill bli bra på att programmera. 
                    Utbildningen är helt fokuserad på praktisk programmering och studenterna får lära sig en mängd 
                    olika programmeringsspråk och plattformar.</a>
                <h4>Läs mer</h4>
                <ul>
                    <li>
                        <a href="https://liu.se/utbildning/program/6kipr">LiU:s hemsida om innovativ programmering</a>
                    </li>
                    <li>
                        <a>Detta program har inga masterprofiler, dock kan du efter denna utbildning läsa masterprogrammet 
                            i Computer Science.</a>
                    </li>
                </ul>
                <h3>Detta läser du</h3>
                <img src={require("../img/content-IP.png")} className="img-fluid" alt="Detta läser du"></img>

                <h2 className="mt-5">Masterprogrammet i Computer Science (CS)</h2>
                <a>Detta är ett masterprogram för den som har en kandidatexamen inom programmering. Här får man den kunskap 
                    och kompetens som krävs för en karriär i mjukvaruteknikens framkant, till exempel med operativsystemdesign, 
                    som internetsäkerhetsspecialist eller spelprogrammerare. Programmet förbereder också för forskning och 
                    fortsatta studier till en doktorsexamen.</a>
                <h4>Läs mer</h4>
                <ul>
                    <li>
                        <a href="https://liu.se/utbildning/program/6mics">LiU:s hemsida om innovativ programmering</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}