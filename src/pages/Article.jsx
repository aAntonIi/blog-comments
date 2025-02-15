import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Article.module.css';

const articles = [
    {
        id: 1,
        title: "Wspaniała podróż do Barcelony",
        image: "https://img.freepik.com/darmowe-zdjecie/widok-z-boku-kobiety-robiacy-zdjecia-telefonem_23-2149512371.jpg?t=st=1738970479~exp=1738974079~hmac=51f3bb0e32700d718783cdda7273a8dfaa981ee557d1f6cf3f25bdc53e715a85&w=1380",
        sections: [
            {
                type: 'text',
                content: "Barcelona, stolica Katalonii, to miasto, które zachwyca swoją różnorodnością. Od modernistycznej architektury Gaudíego po tętniące życiem plaże, Barcelona oferuje niezapomniane wrażenia dla każdego podróżnika. W tym artykule zabiorę Cię w podróż po najważniejszych miejscach tego magicznego miasta."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/widok-z-boku-kobiety-robiacy-zdjecia-telefonem_23-2149512371.jpg?t=st=1738970479~exp=1738974079~hmac=51f3bb0e32700d718783cdda7273a8dfaa981ee557d1f6cf3f25bdc53e715a85&w=1380",
                align: 'right',
                caption: "Sagrada Família to ikona Barcelony."
            },
            {
                type: 'text',
                content: "Jednym z najbardziej ikonicznych miejsc w Barcelonie jest **Sagrada Família**, bazylika zaprojektowana przez słynnego architekta Antonia Gaudíego. Budowa rozpoczęła się w 1882 roku i do dziś nie została ukończona. Wnętrze kościoła to prawdziwe dzieło sztuki, z kolorowymi witrażami i kolumnami przypominającymi drzewa."
            },
            {
                type: 'question',
                content: "Czy wiedziałeś, że Sagrada Família ma być ukończona do 2026 roku, w setną rocznicę śmierci Gaudíego?"
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/widok-z-boku-kobiety-robiacy-zdjecia-telefonem_23-2149512371.jpg?t=st=1738970479~exp=1738974079~hmac=51f3bb0e32700d718783cdda7273a8dfaa981ee557d1f6cf3f25bdc53e715a85&w=1380",
                align: 'center',
                caption: "Park Güell to kolorowe dzieło Gaudíego."
            },
            {
                type: 'text',
                content: "Kolejnym must-see jest **Park Güell**, również zaprojektowany przez Gaudíego. Ten kolorowy park oferuje niesamowite widoki na miasto oraz charakterystyczne mozaiki i rzeźby. To idealne miejsce na spacer i relaks."
            },
            {
                type: 'text',
                content: "**Ciekawostka:** Park Güell został wpisany na listę UNESCO w 1984 roku."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/widok-z-boku-kobiety-robiacy-zdjecia-telefonem_23-2149512371.jpg?t=st=1738970479~exp=1738974079~hmac=51f3bb0e32700d718783cdda7273a8dfaa981ee557d1f6cf3f25bdc53e715a85&w=1380",
                align: 'left',
                caption: "Plaża Barceloneta to raj dla miłośników słońca."
            },
            {
                type: 'text',
                content: "Barcelona słynie również z pięknych plaż. **Barceloneta** to najpopularniejsza plaża w mieście, idealna na relaks i sporty wodne. Jeśli szukasz spokojniejszego miejsca, polecam **Platja de Bogatell**."
            },
            {
                type: 'question',
                content: "Którą plażę wybrałbyś na swój wypoczynek: tętniącą życiem Barcelonetę czy spokojną Platja de Bogatell?"
            },
            {
                type: 'text',
                content: "Barcelona to miasto, które nigdy nie przestaje zachwycać. Niezależnie od tego, czy jesteś miłośnikiem architektury, plaż, czy dobrego jedzenia, znajdziesz tu coś dla siebie. Mam nadzieję, że ten artykuł zainspirował Cię do odwiedzenia tego magicznego miejsca."
            }
        ]
    },
    {
        id: 2,
        title: "Weekend w Paryżu",
        image: "https://img.freepik.com/darmowe-zdjecie/piekny-szeroki-strzal-z-wiezy-eiffla-w-paryzu-otoczony-woda-ze-statkow-pod-kolorowym-niebem_181624-5118.jpg?t=st=1738970339~exp=1738973939~hmac=2eb7c2b936101585f031aad386cf03dcb3038b6c3e6f810427a4fccb9265e3e4&w=1380",
        sections: [
            {
                type: 'text',
                content: "Paryż, stolica Francji, to miasto miłości, sztuki i mody. W tym artykule opowiem Ci, jak spędzić niezapomniany weekend w tym magicznym miejscu. Od ikonicznej Wieży Eiffla po romantyczne spacery nad Sekwaną, Paryż ma wiele do zaoferowania."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/piekny-szeroki-strzal-z-wiezy-eiffla-w-paryzu-otoczony-woda-ze-statkow-pod-kolorowym-niebem_181624-5118.jpg?t=st=1738970339~exp=1738973939~hmac=2eb7c2b936101585f031aad386cf03dcb3038b6c3e6f810427a4fccb9265e3e4&w=1380",
                align: 'right',
                caption: "Wieża Eiffla to symbol Paryża."
            },
            {
                type: 'text',
                content: "**Wieża Eiffla** to symbol Paryża i jedno z najczęściej odwiedzanych miejsc na świecie. Z tarasu widokowego na szczycie można podziwiać panoramę miasta. Wieczorem wieża jest pięknie oświetlona, co tworzy magiczną atmosferę."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Wieża Eiffla miała być tymczasową konstrukcją i miała zostać zdemontowana po 20 latach?"
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/piekny-szeroki-strzal-z-wiezy-eiffla-w-paryzu-otoczony-woda-ze-statkow-pod-kolorowym-niebem_181624-5118.jpg?t=st=1738970339~exp=1738973939~hmac=2eb7c2b936101585f031aad386cf03dcb3038b6c3e6f810427a4fccb9265e3e4&w=1380",
                align: 'center',
                caption: "Luwr to największe muzeum na świecie."
            },
            {
                type: 'text',
                content: "**Muzeum Luwr** to jedno z największych i najważniejszych muzeów na świecie. Znajdziesz tu dzieła takie jak „Mona Lisa” Leonarda da Vinci czy „Wenus z Milo”. To obowiązkowy punkt dla miłośników sztuki."
            },
            {
                type: 'text',
                content: "**Ciekawostka:** Luwr był pierwotnie pałacem królewskim, zanim stał się muzeum."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/piekny-szeroki-strzal-z-wiezy-eiffla-w-paryzu-otoczony-woda-ze-statkow-pod-kolorowym-niebem_181624-5118.jpg?t=st=1738970339~exp=1738973939~hmac=2eb7c2b936101585f031aad386cf03dcb3038b6c3e6f810427a4fccb9265e3e4&w=1380",
                align: 'left',
                caption: "Montmartre to serce artystycznego Paryża."
            },
            {
                type: 'text',
                content: "Dzielnica **Montmartre** to serce artystycznego Paryża. Spacerując wąskimi uliczkami, można poczuć atmosferę dawnych czasów, gdy mieszkali tu Picasso i Van Gogh. Nie zapomnij odwiedzić **Bazyliki Sacré-Cœur**, skąd rozciąga się piękny widok na miasto."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Montmartre było ulubionym miejscem artystów w XIX wieku?"
            },
            {
                type: 'text',
                content: "Paryż to miasto, które nigdy nie przestaje zachwycać. Niezależnie od tego, czy jesteś miłośnikiem sztuki, historii, czy po prostu romantycznych spacerów, Paryż ma coś dla Ciebie. Mam nadzieję, że ten artykuł pomoże Ci zaplanować idealny weekend w tym magicznym miejscu."
            }
        ]
    },
    {
        id: 3,
        title: "Tajemnice Krakowa",
        image: "https://img.freepik.com/darmowe-zdjecie/nocny-widok-na-miasto_1163-1548.jpg?t=st=1738970212~exp=1738973812~hmac=2bb711a43200a5455bac96991c8ed8c9310a40ba41d388aeb69a050cad457ca8&w=1380",
        sections: [
            {
                type: 'text',
                content: "Kraków, dawna stolica Polski, to miasto pełne historii, kultury i magii. W tym artykule zabiorę Cię w podróż po najważniejszych miejscach tego pięknego miasta. Od **Rynku Głównego** po **Wawel**, Kraków ma wiele do zaoferowania."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/nocny-widok-na-miasto_1163-1548.jpg?t=st=1738970212~exp=1738973812~hmac=2bb711a43200a5455bac96991c8ed8c9310a40ba41d388aeb69a050cad457ca8&w=1380",
                align: 'right',
                caption: "Rynek Główny to serce Krakowa."
            },
            {
                type: 'text',
                content: "**Rynek Główny** to serce Krakowa i jeden z największych średniowiecznych rynków w Europie. Znajdziesz tu **Sukiennice**, **Kościół Mariacki** oraz liczne kawiarnie i restauracje. To idealne miejsce na spacer i odkrywanie lokalnej kultury."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Rynek Główny w Krakowie ma powierzchnię 40 000 m²?"
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/nocny-widok-na-miasto_1163-1548.jpg?t=st=1738970212~exp=1738973812~hmac=2bb711a43200a5455bac96991c8ed8c9310a40ba41d388aeb69a050cad457ca8&w=1380",
                align: 'center',
                caption: "Zamek Królewski na Wawelu to ikona Krakowa."
            },
            {
                type: 'text',
                content: "**Zamek Królewski na Wawelu** to kolejny obowiązkowy punkt wizyty w Krakowie. Zamek był siedzibą polskich królów, a dziś można tu zwiedzać komnaty królewskie, skarbiec i zbrojownię. Na wzgórzu znajduje się również **Katedra Wawelska**, gdzie koronowano polskich monarchów."
            },
            {
                type: 'text',
                content: "**Ciekawostka:** Według legendy, w jaskini pod zamkiem mieszkał smok wawelski."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/nocny-widok-na-miasto_1163-1548.jpg?t=st=1738970212~exp=1738973812~hmac=2bb711a43200a5455bac96991c8ed8c9310a40ba41d388aeb69a050cad457ca8&w=1380",
                align: 'left',
                caption: "Kazimierz to serce żydowskiej kultury w Krakowie."
            },
            {
                type: 'text',
                content: "Dzielnica **Kazimierz** to serce żydowskiej kultury w Krakowie. Spacerując wąskimi uliczkami, można poczuć atmosferę dawnych czasów. Dziś Kazimierz to również centrum życia kulturalnego, z licznymi galeriami, kawiarniami i klubami."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Kazimierz był niegdyś osobnym miastem, a dopiero później został włączony do Krakowa?"
            },
            {
                type: 'text',
                content: "Kraków to miasto, które zachwyca swoją historią, kulturą i atmosferą. Niezależnie od tego, czy jesteś miłośnikiem architektury, historii, czy po prostu lubisz odkrywać nowe miejsca, Kraków ma coś dla Ciebie. Mam nadzieję, że ten artykuł zainspirował Cię do odwiedzenia tego magicznego miasta."
            }
        ]
    },
    {
        id: 4,
        title: "Zakopane - zimowa stolica Polski",
        image: "https://img.freepik.com/darmowe-zdjecie/widok-na-gory-zakopane_1398-3460.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
        sections: [
            {
                type: 'text',
                content: "Zakopane, położone u podnóża Tatr, to zimowa stolica Polski. To miejsce, które przyciąga miłośników gór, narciarstwa i pięknych krajobrazów. W tym artykule opowiem Ci o najważniejszych atrakcjach Zakopanego."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/widok-na-gory-zakopane_1398-3460.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
                align: 'right',
                caption: "Widok na Tatry z Zakopanego."
            },
            {
                type: 'text',
                content: "**Krupówki** to główny deptak Zakopanego, pełny restauracji, kawiarni i sklepów z regionalnymi produktami. To idealne miejsce na spacer i zakup pamiątek."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Krupówki mają około 1 km długości?"
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/widok-na-gory-zakopane_1398-3460.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
                align: 'center',
                caption: "Gubałówka to popularne miejsce widokowe."
            },
            {
                type: 'text',
                content: "**Gubałówka** to jedno z najpopularniejszych miejsc widokowych w Zakopanem. Można tu wjechać kolejką linową i podziwiać panoramę Tatr. Zimą Gubałówka staje się rajem dla narciarzy."
            },
            {
                type: 'text',
                content: "**Ciekawostka:** Gubałówka ma wysokość 1126 m n.p.m."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/widok-na-gory-zakopane_1398-3460.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
                align: 'left',
                caption: "Morskie Oko to najpiękniejsze jezioro w Tatrach."
            },
            {
                type: 'text',
                content: "**Morskie Oko** to najpiękniejsze jezioro w Tatrach, położone w Dolinie Rybiego Potoku. To obowiązkowy punkt dla miłośników górskich wędrówek. Droga do jeziora prowadzi przez malownicze szlaki."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Morskie Oko ma głębokość około 50 metrów?"
            },
            {
                type: 'text',
                content: "Zakopane to miejsce, które zachwyca o każdej porze roku. Niezależnie od tego, czy jesteś miłośnikiem gór, narciarstwa, czy po prostu pięknych krajobrazów, Zakopane ma coś dla Ciebie. Mam nadzieję, że ten artykuł zainspirował Cię do odwiedzenia tego magicznego miejsca."
            }
        ]
    },
    {
        id: 5,
        title: "Wrocław - miasto krasnali",
        image: "https://img.freepik.com/darmowe-zdjecie/wroclaw-rynek_1398-3461.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
        sections: [
            {
                type: 'text',
                content: "Wrocław, stolica Dolnego Śląska, to miasto pełne kolorowych kamienic, mostów i krasnali. W tym artykule zabiorę Cię w podróż po najważniejszych atrakcjach tego pięknego miasta."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/wroclaw-rynek_1398-3461.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
                align: 'right',
                caption: "Rynek we Wrocławiu to serce miasta."
            },
            {
                type: 'text',
                content: "**Rynek we Wrocławiu** to jeden z najpiękniejszych rynków w Polsce. Otoczony kolorowymi kamienicami, pełen restauracji i kawiarni, to idealne miejsce na spacer i odkrywanie lokalnej kultury."
            },
            {
                type: 'question',
                content: "Czy wiesz, że Rynek we Wrocławiu ma powierzchnię 3,8 hektara?"
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/wroclaw-rynek_1398-3461.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
                align: 'center',
                caption: "Ostrów Tumski to najstarsza część Wrocławia."
            },
            {
                type: 'text',
                content: "**Ostrów Tumski** to najstarsza część Wrocławia, pełna zabytkowych kościołów i mostów. To idealne miejsce na spacer i odkrywanie historii miasta."
            },
            {
                type: 'text',
                content: "**Ciekawostka:** Ostrów Tumski był pierwotnie wyspą na Odrze."
            },
            {
                type: 'image',
                content: "https://img.freepik.com/darmowe-zdjecie/wroclaw-rynek_1398-3461.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
                align: 'left',
                caption: "Krasnale to symbol Wrocławia."
            },
            {
                type: 'text',
                content: "**Krasnale** to symbol Wrocławia. Te małe figurki rozsiane po całym mieście stały się jedną z największych atrakcji turystycznych. Można je znaleźć w różnych zakątkach miasta, a ich poszukiwanie to świetna zabawa dla całej rodziny."
            },
            {
                type: 'question',
                content: "Czy wiesz, że we Wrocławiu jest ponad 400 krasnali?"
            },
            {
                type: 'text',
                content: "Wrocław to miasto, które zachwyca swoją architekturą, historią i atmosferą. Niezależnie od tego, czy jesteś miłośnikiem historii, kultury, czy po prostu lubisz odkrywać nowe miejsca, Wrocław ma coś dla Ciebie. Mam nadzieję, że ten artykuł zainspirował Cię do odwiedzenia tego magicznego miasta."
            }
        ]
    }

];

const Article = () => {
    const { id } = useParams();
    const article = articles.find((a) => a.id === parseInt(id));

    useEffect(() => {
        // Dodaj skrypt Utterances po załadowaniu komponentu
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', 'aAntonii/blog-comments'); // Zastąp swoim repozytorium
        script.setAttribute('issue-term', 'pathname'); // Użyj ścieżki URL jako identyfikatora
        script.setAttribute('theme', 'github-light'); // Motyw
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        // Znajdź kontener na komentarze i dodaj skrypt
        const commentsContainer = document.getElementById('utterances');
        if (commentsContainer) {
            commentsContainer.appendChild(script);
        }

        return () => {
            // Usuń skrypt przy odmontowywaniu komponentu
            if (commentsContainer) {
                commentsContainer.innerHTML = '';
            }
        };
    }, []);

    if (!article) {
        return <div className={styles.page}>Artykuł nie znaleziony</div>;
    }

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>{article.title}</h1>
            <img src={article.image} alt={article.title} className={styles.mainImage} />
            {article.sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    {section.type === 'text' && <p className={styles.text}>{section.content}</p>}
                    {section.type === 'image' && (
                        <div className={`${styles.imageContainer} ${styles[section.align]}`}>
                            <img src={section.content} alt={section.caption} className={styles.image} />
                            {section.caption && <p className={styles.caption}>{section.caption}</p>}
                        </div>
                    )}
                    {section.type === 'question' && (
                        <div className={styles.question}>
                            <p>{section.content}</p>
                        </div>
                    )}
                </div>
            ))}
            {/* Sekcja komentarzy Utterances */}
            <div id="utterances" className={styles.commentsSection}></div>
        </div>
    );
};

export default Article;