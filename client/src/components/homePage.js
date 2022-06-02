import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import homeBackground from '../img/homeimg.jpg'
import "../css/background.css";

export default function HomePage() {
    return (
        <div>
            <div 
                className="bg" 
                style={{backgroundImage: `url(${homeBackground})`}} 
            >
                <div className="centeredImage">
                    <img
                        width = "500"
                        src = {require("../img/D-logo-color-whiteBG.png")}
                    >
                    </img>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2>Sektioner</h2>
                        <a>
                            Sektionerna är till för att förgylla din tillvaro som student. Till varje utbildning hör en sektion med frivilligt medlemskap. Sektionerna bevakar ubildningens kvalitet men har också hand om andra aktiviteter som företagskvällar och nolle-p för nya studenter. Varje sektion har dessutom ett festeri som arrangerar sektionens fester, sittningar och andra aktiviteter. Generellt så är det gratis att vara med i sektionen för alla utbildningar på Tekniska fakulteten och så även för D-sektionen. För en lista på olika sektioner på LiU.
                        </a>
                    </div>
                    <div className="col">
                    <h2>Nolle-P</h2>
                        <a>
                        Innan du tar klivet in studielivet på riktigt ska du tillsammans med alla andra nykomlingar få uppleva en av de roligaste perioderna i ditt liv, Nolle-P. I drygt tre veckor kommer du att få vara med i roliga aktiviteter och festligheter, lära känna dina klasskamrater samt många andra studenter från hela universitetet. Du kommer även få utforska campus så att du inte går vilse på väg till alla roliga aktiviteter. Nolle-P är till för dig och du kommer att känna dig värmt välkommen till Linköpings universitet!

Den här perioden planeras länge och noggrant av STABEN, en mytomspunnen grupp av individer som dyker upp en gång om året för att göra allt för du ska få den bästa tiden i ditt liv. Till sin hjälp har STABEN sina trogna faddrar. Faddrarna är studenter från högre årskurser som hjälper till under Nolle-P och de kommer at följa med dig under hela perioden, så passa på att fråga dem om deras erfarenheter och kunskap. Du kommer tillsammans med dina klasskamrater och faddrar bland annat gå på klassmiddagar, lekar, aktiviteter, stadsvandring, åka på hajk, vara med på en trerätters sittning och en hel rad med fester och det bästa av allt är att detta bara är en bråkdel av vad du kommer få uppleva under Nolle-P.

Många äldre studenter beskriver sitt Nolle-P som ett av de finaste minnena på LiTH.

Och kom ihåg, STABEN ser dig.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
   }