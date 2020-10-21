

const news = [
    //function News(title, synopsis, body, thumbnailUrl, name, famName, authorThumbnailUrl, nickName, message, creationDate, modifyDate)
    new News("5 redenen waarom jij moet kiezen voor Grafische en Digitale Media", "Ben je nog niet volledig overtuigd waarom je moet kiezen voor de opleiding Grafische en Digitale Media aan Arteveldehogeschool? Lees dan snel verder, want derdejaarsstudent Arjan helpt jou de knoop doorhakken.", "<p>Campus Mariakerke, dat wordt jouw thuisbasis tijdens je studies. Die campus ligt niet pal in het centrum van Gent. Schrikt dat jou af omdat het niet vlot bereikbaar lijkt? Geen nood, er zijn verschillende mogelijkheden: Arjan vertelt: “Eerst en vooral heb je de sneldienst, dat is een bus die jou rechtstreeks van het Gent-Sint-Pietersstation naar de campus brengt en terug. Ik neem meestal de auto en ik parkeer op de gratis parking aan de campus. Vanuit mijn eigen ervaring geef ik je één tip mee: zet je wekker op tijd ’s ochtends, anders heb je misschien geen plaatsje op de parking en kom je te laat in de les. Dat is toch het laatste wat je wilt! ”</p>", "https://dl.airtable.com/.attachments/54c0d7df5b5b353f18743151e1e31bb8/2bd20846/32247355_10158520174543647_5350226527105581056_o.jpg", "Lisa", "De Wilde", "https://dl.airtable.com/.attachments/8216307230f675f3fa6eb2aa90474c67/7ff726d6/lisa.jfif", ["Icefellow", "harmageddon"], ["Is dit een body waar nog een lens op moet?", "Jazeker, dus dat komt nog bovenop de prijs... tenzij je de lenzen al in je bezit hebt (of gaat huren)"], Date(Date.now), Date(Date.now)),
    new News("Tentoonstelling ‘Concertfotografie’ door Geert Bonne", "Geert, voormalig drummer bij Gorky, is een ‘gevoelsmens’. Zijn invalshoek bij het maken van de concertfoto’s, meer bepaald het sub-thema rockfotografie, is het gevoel van passie, geluk, concentratie en overgave dat muziekartiesten ervaren op een podium.", "<p>“Mijn voorkeur gaat daarbij uit naar zwart-wit foto’s omdat je meer de nadruk kan leggen op het onderwerp”, vertelt Geert. De foto’s zijn getrokken over een tijdsspanne van vijf jaar. In de tentoonstelling zien we onder andere Luc De Vos en Raymond van het Groenewoud passeren. Deze tentoonstelling moet studenten Grafische en Digitale Media inspireren en stimuleren om zelf hun creatieve blik te verruimen.</p>" ,"https://dl.airtable.com/.attachments/ce0470435c01a2a03365cacb5f70def2/fc368b51/IMG_0521.JPG", "Lisa", "De Wilde", "https://dl.airtable.com/.attachments/8216307230f675f3fa6eb2aa90474c67/7ff726d6/lisa.jfif", ["Icefellow", "harmageddon"], ["Is dit een body waar nog een lens op moet?", "Jazeker, dus dat komt nog bovenop de prijs... tenzij je de lenzen al in je bezit hebt (of gaat huren)"], Date(Date.UTC), Date(Date.now))
];


let equals = "=";
let space = "|                                   NEWS                                   |"

for (i = 0; i < 80; i++) {
    equals += "=";
}

console.log(`${equals}
${space}
${equals}`);


logNews();

function logNews () {
    for (i = 0; i < 2; i++) {



        console.log(`New ${i+1}: ${news[i].title}
${equals}
        Synopsis:           ${news[i].synopsis}
        Body :              ${news[i].body}
        Thumbnail:          ${news[i].thumbnailUrl}
        Created at:         ${news[i].creationDate}
        Modified at:        ${news[i].modifyDate}
        -----------------------------------------------------
        Authors
        -----------------------------------------------------
        Author 1:            ${news[i].authors[0]} ${news[i].authors[1]}
                             ${news[i].authors[2]}
        -----------------------------------------------------
        Comments
        -----------------------------------------------------
        * ${news[i].comments[0]}\n\t Written by: ${news[i].commentsAuthor[0]}
        \t* ${news[i].comments[1]}\n\t\t Written by: ${news[i].commentsAuthor[1]}
        
${equals}`);

    }
    
}


function News(title, synopsis, body, thumbnailUrl, name, famName, authorThumbnailUrl, nickName, message, creationDate, modifyDate) {
    this.title = title;
    this.synopsis = synopsis;
    this.body = body;
    this.thumbnailUrl = thumbnailUrl;
    this.authors = [name, famName, authorThumbnailUrl]
    this.commentsAuthor = nickName;
    this.comments = message;
    this.creationDate = creationDate;
    this.modifyDate = modifyDate;
}