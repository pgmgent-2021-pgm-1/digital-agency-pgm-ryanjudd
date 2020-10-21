const projects = [
    new Project("Virtuele Campus", "Eindopdracht: Arteveldehogeschool Campus Mariakerke in een virtuele, driedimensionale wereld. Alle 3D-assets zijn zelf gemodelleerd.", "https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png", ["Virtuele Campus - Image 01", "(type: image)", "https://dl.airtable.com/.attachments/b88a6d82184634f19caec2f51434a7d5/d97ee3f8/mixed-reality-2018-2019_Virtuele-Campus_02.png"], ["Virtuele Campus - Image 02", "(type: image)", "https://dl.airtable.com/.attachments/286d1a48fb0106f22f78b1f8023209f7/f833c891/mixed-reality-2018-2019_Virtuele-Campus_03.png"], ["Virtuele Campus - Image 03", "(type: image)", "https://dl.airtable.com/.attachments/b37720b639adeb8cc3e3610e8625aa0c/25cfcfbe/mixed-reality-2018-2019_Virtuele-Campus_04.png"], 25, 147, "30/06/2020", "17/10/2020"),
    new Project("Veggie-boat", "Maak een krachtig campagnebeeld dat zal gebruikt worden om een vegetarische organisatie te promoten. Het concept dat hiervoor bedacht is is een groenten- en/of fruitbootje op het water. Een bootje gemaakt van groenten of fruit, Een persoon in het bootje, Een duidelijke en geloofwaardige reflectie in het water, Een brandende lantaarn, Achtergrond ondersteunt de blikvanger en leidt niet af. Zorg voor heel wat sfeer in je beeld.", "https://dl.airtable.com/.attachments/2861dba0445bb1563159cb8da02a1189/6c605300/A_2_Brughmans_Karolien_sm.jpge", ["Gilles Van Wynsverge", "(type: image)", "https://dl.airtable.com/.attachments/a41b33fc8178663cf4c778e377b1c225/5d5b49e6/A_2_VanWynsberge_Gilles_opt.jpg"], ["Evert Lammertyn", "(type: image)", "https://dl.airtable.com/.attachments/a496c06f145e4ecb754b44a5b74f79aa/9e3b14ae/c_2_lammertyn_evert_opt.jpg"], ["Stijn Stevens", "(type: image)", "https://dl.airtable.com/.attachments/43825315bef63421c4b32cc3cbf1bb85/ba7a37a1/C_2_Stevens_Stijn_opt.jpg"], "14", "143", "30/06/2020", "17/10/2020")
];


let equals = "=";
let space = "|                                   PORTFOLIO                                   |"

for (i = 0; i < 80; i++) {
    equals += "=";
}

console.log(`${equals}
${space}
${equals}`);


logProject();

function logProject () {
    for (i = 0; i < 2; i++) {



        console.log(`Project ${i+1}: ${projects[i].title}
${equals}
        Synopsis:           ${projects[i].synopsis}
        Thumbnail:          ${projects[i].thumbnailUrl}
        Likes:              ${projects[i].likes}
        Views:              ${projects[i].views}
        Created at:         ${projects[i].creationDate}
        Modified at:        ${projects[i].modifyDate}
        -----------------------------------------------------
        Assets
        -----------------------------------------------------
        Asset 1:            ${projects[i].assets[0]}
        Asset 2:            ${projects[i].assets[1]}
        Asset 3:            ${projects[i].assets[2]}
${equals}`);

    }
    
}


function Assets(name, type, url){
    this.name = name;
    this.type = type;
    this.url = url;
}

function Project(title, synopsis, thumbnailUrl, asset1, asset2, asset3, likes, views, creationDate, modifyDate) {
    this.title = title;
    this.synopsis = synopsis;
    this.thumbnailUrl = thumbnailUrl;
    this.assets = [asset1, asset2, asset3]
    this.likes = likes;
    this.views = views;
    this.creationDate = creationDate;
    this.modifyDate = modifyDate;
}