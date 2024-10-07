// const { json } = require("react-router-dom");

//rider
document.addEventListener("DOMContentLoaded", function () {
  const riders = [
    {
      riderTitle: "Official",
      backgroundName: "FB1",
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/02/19/3a568eee-1e12-4091-b120-f53c71cbe8f6/rider-bio_francescobagnaia.png?height=400&width=600",
      riderHashtag: "#FB1",
      firstName: "Francesco",
      lastName: "Bagnaia",
      flagImg: "https://static-files.motogp.pulselive.com/assets/flags/it.svg",
      countryName: "Italy",
      teamName: "Ducati Lenovo Team",
      currentPos: 2,
      currentPoint: 329,
      currentVic: 7,
      teammateImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/02/19/ca002749-a487-432f-879e-e44969678daa/rider-bio_eneabastianini.png?height=300&width=200",
      teammateName: "Enea Bastianini",
      totalWorldCham: 3,
      totalVic: 35,
      totalPod: 69,
      totalPole: 28,
      totalRace: 206,
    },
  ];

  const riderList = document.getElementById("riderList");
  riderList.innerHTML = ""; //xoa noi dung

  riders.forEach((rider) => {
    const link = document.createElement("a");
    link.className = "rider-list__rider";

    let backgroundClass = "rider-list__background-team-colour";

    if (rider.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (rider.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (rider.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (rider.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (rider.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (rider.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (rider.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (rider.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (rider.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (rider.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (rider.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (rider.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (rider.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (rider.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (rider.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (rider.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (rider.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (rider.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (rider.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (rider.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (rider.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (rider.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (rider.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (rider.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (rider.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (rider.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (rider.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (rider.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (rider.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (rider.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (rider.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (rider.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (rider.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (rider.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (rider.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (rider.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (rider.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (rider.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (rider.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
    <div class="rider-list__background">
      <div class="${backgroundClass}"></div>
      <div class="rider-list__background-name">${rider.backgroundName}</div>
      <div class="rider-list__background-gradient"></div>
    </div>

    <div class="rider-list__image-container">
      <div class="rider-list__image">
        <div class="rider-image-container">
          <div class="rider-image">
            <div class="u-observed lazy-image-wrapper">
              <picture class=" object-fit-cover-picture">
                <img class="img undefined picture__img object-fit-cover-picture__img" src="${rider.riderImg}" alt="${rider.lastName}"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rider-list__info-container">
      <span class="rider-list__info-hashtag">${rider.riderHashtag}</span>
      <div class="rider-list__info-name">
       <span>${rider.firstName}</span>
       <span>${rider.lastName}</span>
      </div>

      <div class="rider-list__details-container">
        <span class="rider-list__details-country">
          <div class="rider-list__flag-container">
            <img class="rider-list__details-flag" src="${rider.flagImg}"/>
          </div>
          ${rider.countryName}
        </span>
        <span class="rider-list__details-team">
        ${rider.teamName}
        </span>
      </div>
    </div>
    `;

    link.addEventListener("click", () => {
      //luu thong tin vao localStorage
      localStorage.setItem("riderDetails", JSON.stringify(rider));
      //chuyen huong den trang rider-detail
      window.location.href = "rider-detail.html";
    });

    riderList.appendChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rider2 = [
    {
      riderTitle: "Official",
      backgroundName: "SG3",
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/05/896c8377-4c5b-4141-8562-c07b4d78c9d7/03_Sergio_Garcia_Moto2_Rider_DS_3364.png?height=400&width=600",
      riderHashtag: "#SG3",
      firstName: "Sergio",
      lastName: "Garcia",
      flagImg: "https://static-files.motogp.pulselive.com/assets/flags/es.svg",
      countryName: "Spain",
      teamName: "MT Helmets - MSI",
      currentPos: 2,
      currentPoint: 166,
      currentVic: 2,
      teammateImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/05/5249a552-e1b7-444a-a3bf-763814a50b0d/79_Ai_Ogura_Moto2_Rider_DS_3385.png?height=300&width=200",
      teammateName: "Ai Ogura",
      totalWorldCham: "-",
      totalVic: 9,
      totalPod: 25,
      totalPole: 3,
      totalRace: 103,
    },
  ];

  const riderList2 = document.getElementById("riderList2");
  riderList2.innerHTML = "";

  rider2.forEach((rider) => {
    // const divTitle = document.createElement("div");
    // divTitle.textContent = rider.riderTitle;
    // divTitle.classList.add("rider-list__career-type", "rider-grid__title");
    // riderList2.appendChild(divTitle);

    const link = document.createElement("a");
    link.className = "rider-list__rider";
    let backgroundClass = "rider-list__background-team-colour";

    if (rider.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (rider.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (rider.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (rider.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (rider.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (rider.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (rider.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (rider.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (rider.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (rider.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (rider.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (rider.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (rider.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (rider.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (rider.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (rider.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (rider.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (rider.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (rider.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (rider.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (rider.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (rider.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (rider.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (rider.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (rider.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (rider.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (rider.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (rider.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (rider.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (rider.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (rider.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (rider.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (rider.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (rider.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (rider.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (rider.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (rider.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (rider.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (rider.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
    <div class="rider-list__background">
      <div class="${backgroundClass}"></div>
      <div class="rider-list__background-name">${rider.backgroundName}</div>
      <div class="rider-list__background-gradient"></div>
    </div>

    <div class="rider-list__image-container">
      <div class="rider-list__image">
        <div class="rider-image-container">
          <div class="rider-image">
            <div class="u-observed lazy-image-wrapper">
              <picture class=" object-fit-cover-picture">
                <img class="img undefined picture__img object-fit-cover-picture__img" src="${rider.riderImg}" alt="${rider.lastName}"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rider-list__info-container">
      <span class="rider-list__info-hashtag">${rider.riderHashtag}</span>
      <div class="rider-list__info-name">
       <span>${rider.firstName}</span>
       <span>${rider.lastName}</span>
      </div>

      <div class="rider-list__details-container">
        <span class="rider-list__details-country">
          <div class="rider-list__flag-container">
            <img class="rider-list__details-flag" src="${rider.flagImg}"/>
          </div>
          ${rider.countryName}
        </span>
        <span class="rider-list__details-team">
        ${rider.teamName}
        </span>
      </div>
    </div>
    `;
    link.addEventListener("click", () => {
      //luu thong tin vao localStorage
      localStorage.setItem("riderDetails", JSON.stringify(rider));
      //chuyen huong den trang rider-detail
      window.location.href = "rider-detail.html";
    });

    riderList2.appendChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rider3 = [
    {
      riderTitle: "Official",
      backgroundName: "TB5",
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/05/1eeb9363-7595-4a81-ae69-8c466905bb92/05-Tatchakorn-Buasri-Moto3-Rider_DS_2498.png?height=400&width=600",
      riderHashtag: "#TB5",
      firstName: "Tatchakorn",
      lastName: "Buasri",
      flagImg: "https://static-files.motogp.pulselive.com/assets/flags/th.svg",
      countryName: "Thailand",
      teamName: "Honda Team Asia",
      currentPos: 0,
      currentPoint: 0,
      currentVic: 0,
      teammateImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/05/e422b8bc-eeaa-4246-b328-5fa3645c9948/72_Taiyo_Furusato_Moto3_Rider_DS_2476.png?height=300&width=200",
      teammateName: "Taiyo Furusato",
      totalWorldCham: "-",
      totalVic: "-",
      totalPod: "-",
      totalPole: "-",
      totalRace: 18,
    },
  ];

  const riderList3 = document.getElementById("riderList3");
  riderList3.innerHTML = "";

  rider3.forEach((rider) => {
    // const divTitle = document.createElement("div");
    // divTitle.textContent = rider.riderTitle;
    // divTitle.classList.add("rider-list__career-type", "rider-grid__title");
    // riderList2.appendChild(divTitle);

    const link = document.createElement("a");
    link.className = "rider-list__rider";
    let backgroundClass = "rider-list__background-team-colour";

    if (rider.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (rider.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (rider.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (rider.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (rider.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (rider.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (rider.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (rider.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (rider.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (rider.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (rider.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (rider.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (rider.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (rider.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (rider.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (rider.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (rider.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (rider.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (rider.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (rider.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (rider.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (rider.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (rider.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (rider.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (rider.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (rider.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (rider.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (rider.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (rider.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (rider.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (rider.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (rider.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (rider.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (rider.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (rider.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (rider.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (rider.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (rider.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (rider.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
    <div class="rider-list__background">
      <div class="${backgroundClass}"></div>
      <div class="rider-list__background-name">${rider.backgroundName}</div>
      <div class="rider-list__background-gradient"></div>
    </div>

    <div class="rider-list__image-container">
      <div class="rider-list__image">
        <div class="rider-image-container">
          <div class="rider-image">
            <div class="u-observed lazy-image-wrapper">
              <picture class=" object-fit-cover-picture">
                <img class="img undefined picture__img object-fit-cover-picture__img" src="${rider.riderImg}" alt="${rider.lastName}"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rider-list__info-container">
      <span class="rider-list__info-hashtag">${rider.riderHashtag}</span>
      <div class="rider-list__info-name">
       <span>${rider.firstName}</span>
       <span>${rider.lastName}</span>
      </div>

      <div class="rider-list__details-container">
        <span class="rider-list__details-country">
          <div class="rider-list__flag-container">
            <img class="rider-list__details-flag" src="${rider.flagImg}"/>
          </div>
          ${rider.countryName}
        </span>
        <span class="rider-list__details-team">
        ${rider.teamName}
        </span>
      </div>
    </div>
    `;
    link.addEventListener("click", () => {
      //luu thong tin vao localStorage
      localStorage.setItem("riderDetails", JSON.stringify(rider));
      //chuyen huong den trang rider-detail
      window.location.href = "rider-detail.html";
    });

    riderList3.appendChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rider4 = [
    {
      riderTitle: "Official",
      backgroundName: "LT3",
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/21/7e338f43-a2dc-47a3-9937-076bf03cd890/03-Lukas-Tulovic-MotoE-Rider1K0A4935.png?height=400&width=600",
      riderHashtag: "#LT3",
      firstName: "Lukas",
      lastName: "Tulovic",
      flagImg: "https://static-files.motogp.pulselive.com/assets/flags/de.svg",
      countryName: "Germany",
      teamName: "Dynavolt Intact GP MotoE",
      currentPos: 11,
      currentPoint: 111,
      currentVic: 0,
      teammateImg: null,
      teammateName: null,
      totalWorldCham: "-",
      totalVic: 1,
      totalPod: 1,
      totalPole: "-",
      totalRace: 68,
    },
  ];

  const riderList4 = document.getElementById("riderList4");
  riderList4.innerHTML = "";

  rider4.forEach((rider) => {
    // const divTitle = document.createElement("div");
    // divTitle.textContent = rider.riderTitle;
    // divTitle.classList.add("rider-list__career-type", "rider-grid__title");
    // riderList2.appendChild(divTitle);

    const link = document.createElement("a");
    link.className = "rider-list__rider";
    let backgroundClass = "rider-list__background-team-colour";

    if (rider.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (rider.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (rider.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (rider.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (rider.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (rider.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (rider.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (rider.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (rider.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (rider.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (rider.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (rider.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (rider.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (rider.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (rider.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (rider.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (rider.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (rider.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (rider.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (rider.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (rider.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (rider.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (rider.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (rider.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (rider.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (rider.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (rider.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (rider.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (rider.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (rider.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (rider.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (rider.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (rider.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (rider.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (rider.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (rider.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (rider.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (rider.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (rider.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (rider.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (rider.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
    <div class="rider-list__background">
      <div class="${backgroundClass}"></div>
      <div class="rider-list__background-name">${rider.backgroundName}</div>
      <div class="rider-list__background-gradient"></div>
    </div>

    <div class="rider-list__image-container">
      <div class="rider-list__image">
        <div class="rider-image-container">
          <div class="rider-image">
            <div class="u-observed lazy-image-wrapper">
              <picture class=" object-fit-cover-picture">
                <img class="img undefined picture__img object-fit-cover-picture__img" src="${rider.riderImg}" alt="${rider.lastName}"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rider-list__info-container">
      <span class="rider-list__info-hashtag">${rider.riderHashtag}</span>
      <div class="rider-list__info-name">
       <span>${rider.firstName}</span>
       <span>${rider.lastName}</span>
      </div>

      <div class="rider-list__details-container">
        <span class="rider-list__details-country">
          <div class="rider-list__flag-container">
            <img class="rider-list__details-flag" src="${rider.flagImg}"/>
          </div>
          ${rider.countryName}
        </span>
        <span class="rider-list__details-team">
        ${rider.teamName}
        </span>
      </div>
    </div>
    `;
    link.addEventListener("click", () => {
      //luu thong tin vao localStorage
      localStorage.setItem("riderDetails", JSON.stringify(rider));
      //chuyen huong den trang rider-detail
      window.location.href = "rider-detail.html";
    });

    riderList4.appendChild(link);
  });
});

//team
document.addEventListener("DOMContentLoaded", function () {
  fetch('http://localhost:3000/rider-team')
    .then(response => response.json())
    .then(data => {
      products = data; // Lưu dữ liệu vào biến
      isLoading = false;
      renderTable(); // Render bảng với dữ liệu ban đầu
      renderPagination(); // Tạo các nút phân trang
    })
    .catch(error => {
      console.error('Lỗi khi gọi API:', error);
    });
  const team = data;

  const teamList = document.getElementById("teamList");
  teamList.innerHTML = "";
  team.forEach((team) => {
    const link = document.createElement("a");
    link.className = "teams-list__team";

    let backgroundClass = "teams-list__background-team-colour";

    if (team.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (team.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (team.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (team.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (team.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (team.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (team.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (team.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (team.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (team.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (team.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (team.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (team.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (team.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (team.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (team.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (team.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (team.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (team.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (team.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (team.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (team.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (team.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (team.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (team.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (team.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (team.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (team.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (team.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (team.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (team.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (team.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (team.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (team.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (team.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (team.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (team.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (team.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (team.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
<div class="teams-list__background">
  <div class="${backgroundClass}">
  </div>
  <div class="teams-list__background-name">${team.backgroundName}
  </div>
  <div class="teams-list__background-gradient"></div>
</div>

<div class="teams-list__image-container">
  <div class="teams-list__image js-image">
    <div class="team-image-container">
      <div class="team-image">
        <div style="" class="js-lazy-load u-observed lazy-image-wrapper ">
          <picture class=" picture">
            <img src="${team.motoImg}"  class="img undefined picture__img ">
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="teams-list__info-container">
  <div class="teams-list__info-name">${team.teamName}</div>                        
  <div class="teams-list__riders-container">
    <div class="teams-list__riders-name">
      ${team.riderName1}
    </div>
    <div class="teams-list__riders-name">
     ${team.riderName2}
    </div>
  </div>
</div>
   
 `;

    teamList.appendChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const team2 = [
    {
      backgroundName: "CFMOTO Aspar Team",
      motoImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/06/389ad663-a44c-4217-a5c4-13617abd9023/CFMotoAspar.png?width=400",
      teamName: "CFMOTO Aspar Team",
      riderName1: "Izan Guevara",
      riderName2: " Jake Dixon",
    },
  ];

  const teamList2 = document.getElementById("teamList2");
  teamList2.innerHTML = "";
  team2.forEach((team) => {
    const link = document.createElement("a");
    link.className = "teams-list__team";

    let backgroundClass = "teams-list__background-team-colour";

    if (team.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (team.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (team.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (team.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (team.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (team.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (team.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (team.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (team.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (team.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (team.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (team.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (team.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (team.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (team.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (team.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (team.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (team.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (team.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (team.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (team.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (team.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (team.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (team.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (team.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (team.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (team.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (team.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (team.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (team.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (team.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (team.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (team.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (team.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (team.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (team.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (team.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (team.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (team.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
<div class="teams-list__background">
  <div class="${backgroundClass}">
  </div>
  <div class="teams-list__background-name">${team.backgroundName}
  </div>
  <div class="teams-list__background-gradient"></div>
</div>

<div class="teams-list__image-container">
  <div class="teams-list__image js-image">
    <div class="team-image-container">
      <div class="team-image">
        <div style="" class="js-lazy-load u-observed lazy-image-wrapper ">
          <picture class=" picture">
            <img src="${team.motoImg}"  class="img undefined picture__img ">
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="teams-list__info-container">
  <div class="teams-list__info-name">${team.teamName}</div>                        
  <div class="teams-list__riders-container">
    <div class="teams-list__riders-name">
      ${team.riderName1}
    </div>
    <div class="teams-list__riders-name">
     ${team.riderName2}
    </div>
  </div>
</div>
   
 `;

    teamList2.appendChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const team3 = [
    {
      backgroundName: "BOE Motorsports",
      motoImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/07/4b6d47e9-aedb-4752-8dab-8e4d3d823691/BOE.png?width=400",
      teamName: "BOE Motorsports",
      riderName1: "David Muñoz",
      riderName2: "Joel Kelso",
    },
  ];

  const teamList3 = document.getElementById("teamList3");
  teamList3.innerHTML = "";
  team3.forEach((team) => {
    const link = document.createElement("a");
    link.className = "teams-list__team";

    let backgroundClass = "teams-list__background-team-colour";

    if (team.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (team.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (team.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (team.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (team.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (team.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (team.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (team.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (team.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (team.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (team.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (team.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (team.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (team.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (team.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (team.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (team.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (team.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (team.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (team.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (team.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (team.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (team.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (team.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (team.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (team.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (team.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (team.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (team.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (team.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (team.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (team.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (team.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (team.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (team.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (team.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (team.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (team.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (team.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
<div class="teams-list__background">
  <div class="${backgroundClass}">
  </div>
  <div class="teams-list__background-name">${team.backgroundName}
  </div>
  <div class="teams-list__background-gradient"></div>
</div>

<div class="teams-list__image-container">
  <div class="teams-list__image js-image">
    <div class="team-image-container">
      <div class="team-image">
        <div style="" class="js-lazy-load u-observed lazy-image-wrapper ">
          <picture class=" picture">
            <img src="${team.motoImg}"  class="img undefined picture__img ">
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="teams-list__info-container">
  <div class="teams-list__info-name">${team.teamName}</div>                        
  <div class="teams-list__riders-container">
    <div class="teams-list__riders-name">
      ${team.riderName1}
    </div>
    <div class="teams-list__riders-name">
     ${team.riderName2}
    </div>
  </div>
</div>
   
 `;

    teamList3.appendChild(link);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const team4 = [
    {
      backgroundName: "Aruba Cloud MotoE Racing Team",
      motoImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/22/5d340467-ff90-4eaf-b140-18cac7a3720c/07-Chaz-Davies-Bike-MotoEVALE2323.png?width=400",
      teamName: "Aruba Cloud MotoE Racing Team",
      riderName1: "Chaz Davies",
      riderName2: "Armando Pontone",
    },
  ];

  const teamList4 = document.getElementById("teamList4");
  teamList4.innerHTML = "";
  team4.forEach((team) => {
    const link = document.createElement("a");
    link.className = "teams-list__team";

    let backgroundClass = "teams-list__background-team-colour";

    if (team.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (team.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (team.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (team.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (team.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (team.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (team.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (team.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (team.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (team.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    } else if (team.teamName === "MT Helmets - MSI") {
      backgroundClass += " mt";
    } else if (team.teamName === "Honda Team Asia") {
      backgroundClass += " honda";
    } else if (team.teamName === "Dynavolt Intact GP MotoE") {
      backgroundClass += " dynavolt";
    } else if (team.teamName === "CFMOTO Aspar Team") {
      backgroundClass += " cfmoto";
    } else if (team.teamName === "BOE Motorsports") {
      backgroundClass += " boe";
    } else if (team.teamName === "Aruba Cloud MotoE Racing Team") {
      backgroundClass += " aruba";
    } else if (team.teamName === "LCR Honda") {
      backgroundClass += " lcr";
    } else if (team.teamName === "Red Bull GASGAS Tech3") {
      backgroundClass += " gasgas";
    } else if (team.teamName === "Repsol Honda Team") {
      backgroundClass += " repsol";
    } else if (team.teamName === "ELF Marc VDS Racing Team") {
      backgroundClass += " elf";
    } else if (team.teamName === "Fantic Racing") {
      backgroundClass += " fantic";
    } else if (team.teamName === "Italtrans Racing Team") {
      backgroundClass += " italtrans";
    } else if (team.teamName === "KLINT Forward Factory Team") {
      backgroundClass += " klint";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "OnlyFans American Racing Team") {
      backgroundClass += " onlyfans";
    } else if (team.teamName === "Preicanos Racing Team") {
      backgroundClass += " preicanos";
    } else if (team.teamName === "QJMOTOR Gresini Moto2™") {
      backgroundClass += " qjmotor";
    } else if (team.teamName === "Red Bull KTM Ajo") {
      backgroundClass += " red-bull";
    } else if (team.teamName === "RW Racing GP") {
      backgroundClass += " rw";
    } else if (team.teamName === "SpeedUp Racing") {
      backgroundClass += " speed";
    } else if (team.teamName === "Yamaha VR46 Master Camp Team") {
      backgroundClass += " yamaha";
    } else if (team.teamName === "CIP Green Power") {
      backgroundClass += " cip";
    } else if (team.teamName === "Kopron Rivacold Snipers Team") {
      backgroundClass += " kopron";
    } else if (team.teamName === "Leopard Racing") {
      backgroundClass += " leopard";
    } else if (team.teamName === "Liqui Moly Husqvarna Intact GP") {
      backgroundClass += " liqui";
    } else if (team.teamName === "MLav Racing") {
      backgroundClass += " mlav";
    } else if (team.teamName === "MTA Team") {
      backgroundClass += " mta";
    } else if (team.teamName === "SIC58 Squadra Corse") {
      backgroundClass += " sic58";
    } else if (team.teamName === "Axxis-MSI") {
      backgroundClass += " axxis";
    } else if (team.teamName === "Felo Gresini MotoE") {
      backgroundClass += " felo";
    } else if (team.teamName === "LCR E-Team") {
      backgroundClass += " lcr-e";
    } else if (team.teamName === "Ongetta SIC58 Squadra Corse") {
      backgroundClass += " ongetta";
    } else if (team.teamName === "Openbank Aspar Team") {
      backgroundClass += " openBank";
    } else if (team.teamName === "Tech3 E-Racing") {
      backgroundClass += " tech3";
    }

    link.innerHTML = `
<div class="teams-list__background">
  <div class="${backgroundClass}">
  </div>
  <div class="teams-list__background-name">${team.backgroundName}
  </div>
  <div class="teams-list__background-gradient"></div>
</div>

<div class="teams-list__image-container">
  <div class="teams-list__image js-image">
    <div class="team-image-container">
      <div class="team-image">
        <div style="" class="js-lazy-load u-observed lazy-image-wrapper ">
          <picture class=" picture">
            <img src="${team.motoImg}"  class="img undefined picture__img ">
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="teams-list__info-container">
  <div class="teams-list__info-name">${team.teamName}</div>                        
  <div class="teams-list__riders-container">
    <div class="teams-list__riders-name">
      ${team.riderName1}
    </div>
    <div class="teams-list__riders-name">
     ${team.riderName2}
    </div>
  </div>
</div>
   
 `;

    teamList4.appendChild(link);
  });
});
