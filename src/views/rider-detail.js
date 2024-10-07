//lay thong tin tu nguoi dung local Storage
const riderDetails = JSON.parse(localStorage.getItem("riderDetails"));

if (riderDetails) {
  const rider = document.getElementById("riderDetails");
  let backgroundClass = "rider-hero__background-team-colour";
  if (riderDetails.teamName === "Gresini Racing MotoGP") {
    backgroundClass += " gresini";
  } else if (riderDetails.teamName === "Ducati Lenovo Team") {
    backgroundClass += " ducati";
  } else if (riderDetails.teamName === "Red Bull KTM Factory Racing") {
    backgroundClass += " red-bull";
  } else if (riderDetails.teamName === "Pertamina Enduro VR46 Racing Team") {
    backgroundClass += " pertamina";
  } else if (riderDetails.teamName === "Monster Energy Yamaha MotoGP Team") {
    backgroundClass += " monster";
  } else if (riderDetails.teamName === "Trackhouse Racing") {
    backgroundClass += " trackhouse";
  } else if (riderDetails.teamName === "CASTROL Honda LCR") {
    backgroundClass += " castrol";
  } else if (riderDetails.teamName === "IDEMITSU Honda LCR") {
    backgroundClass += " idemitsu";
  } else if (riderDetails.teamName === "HRC Test Team") {
    backgroundClass += " hrc";
  } else if (riderDetails.teamName === "Prima Pramac Racing") {
    backgroundClass += " prima";
  } else if (riderDetails.teamName === "Aprilia Racing") {
    backgroundClass += " aprilia";
  } else if (riderDetails.teamName === "MT Helmets - MSI") {
    backgroundClass += " mt";
  } else if (riderDetails.teamName === "Honda Team Asia") {
    backgroundClass += " honda";
  } else if (riderDetails.teamName === "Dynavolt Intact GP MotoE") {
    backgroundClass += " dynavolt";
  } else if (riderDetails.teamName === "CFMOTO Aspar Team") {
    backgroundClass += " cfmoto";
  } else if (riderDetails.teamName === "BOE Motorsports") {
    backgroundClass += " boe";
  } else if (riderDetails.teamName === "Aruba Cloud MotoE Racing Team") {
    backgroundClass += " aruba";
  } else if (riderDetails.teamName === "LCR Honda") {
    backgroundClass += " lcr";
  } else if (riderDetails.teamName === "Red Bull GASGAS Tech3") {
    backgroundClass += " gasgas";
  } else if (riderDetails.teamName === "Repsol Honda Team") {
    backgroundClass += " repsol";
  } else if (riderDetails.teamName === "ELF Marc VDS Racing Team") {
    backgroundClass += " elf";
  } else if (riderDetails.teamName === "Fantic Racing") {
    backgroundClass += " fantic";
  } else if (riderDetails.teamName === "Italtrans Racing Team") {
    backgroundClass += " italtrans";
  } else if (riderDetails.teamName === "KLINT Forward Factory Team") {
    backgroundClass += " klint";
  } else if (riderDetails.teamName === "Liqui Moly Husqvarna Intact GP") {
    backgroundClass += " liqui";
  } else if (riderDetails.teamName === "OnlyFans American Racing Team") {
    backgroundClass += " onlyfans";
  } else if (riderDetails.teamName === "Preicanos Racing Team") {
    backgroundClass += " preicanos";
  } else if (riderDetails.teamName === "QJMOTOR Gresini Moto2™") {
    backgroundClass += " qjmotor";
  } else if (riderDetails.teamName === "Red Bull KTM Ajo") {
    backgroundClass += " red-bull";
  } else if (riderDetails.teamName === "RW Racing GP") {
    backgroundClass += " rw";
  } else if (riderDetails.teamName === "SpeedUp Racing") {
    backgroundClass += " speed";
  } else if (riderDetails.teamName === "Yamaha VR46 Master Camp Team") {
    backgroundClass += " yamaha";
  } else if (riderDetails.teamName === "CIP Green Power") {
    backgroundClass += " cip";
  } else if (riderDetails.teamName === "Kopron Rivacold Snipers Team") {
    backgroundClass += " kopron";
  } else if (riderDetails.teamName === "Leopard Racing") {
    backgroundClass += " leopard";
  } else if (riderDetails.teamName === "Liqui Moly Husqvarna Intact GP") {
    backgroundClass += " liqui";
  } else if (riderDetails.teamName === "MLav Racing") {
    backgroundClass += " mlav";
  } else if (riderDetails.teamName === "MTA Team") {
    backgroundClass += " mta";
  } else if (riderDetails.teamName === "SIC58 Squadra Corse") {
    backgroundClass += " sic58";
  } else if (riderDetails.teamName === "Axxis-MSI") {
    backgroundClass += " axxis";
  } else if (riderDetails.teamName === "Felo Gresini MotoE") {
    backgroundClass += " felo";
  } else if (riderDetails.teamName === "LCR E-Team") {
    backgroundClass += " lcr-e";
  } else if (riderDetails.teamName === "Ongetta SIC58 Squadra Corse") {
    backgroundClass += " ongetta";
  } else if (riderDetails.teamName === "Openbank Aspar Team") {
    backgroundClass += " openBank";
  } else if (riderDetails.teamName === "Tech3 E-Racing") {
    backgroundClass += " tech3";
  }

  document.getElementById("riderDetails").innerHTML = `
  <div class="rider-hero">
    <div class="rider-hero__container">
      <a id="backRiderBtn" class="rider-hero__back-button">
        <i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>        
        ALL RIDERS
      </a>

      <div class="rider-hero__background">
        <div class="${backgroundClass}"></div>
        <div class="rider-hero__background-info">
          <div class="rider-hero__background-initials">
          ${riderDetails.backgroundName}
          </div>
          <div class="rider-hero__background-name">
          ${riderDetails.lastName}</div>
        </div>

        <div class="rider-hero__background-gradient"></div>

        <div class="rider-hero__background-image">
          <div class="rider-image-container">
            <div class="rider-image">
              <div class="u-observed lazy-image-wrapper">
                <picture class="picture">
                  <img class="img undefined picture__img" src="${riderDetails.riderImg}"/>
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div class="rider-hero__background-image-gradient">
        </div>
      </div>

      <div class="rider-hero__info-container">
        <span class="rider-hero__info-hashtag">
        ${riderDetails.riderHashtag}
        </span>
        <span class="rider-hero__info-name">
        ${riderDetails.firstName} ${riderDetails.lastName}
        </span>
        <div class="rider-hero__details-container">
          <span class="rider-hero__details-country">
            <div class="rider-hero__flag-container">
              <img class="rider-hero__details-flag" src="${riderDetails.flagImg}"/>
            </div>
            ${riderDetails.countryName}
          </span>
          <span class="rider-hero__details-team">
          ${riderDetails.teamName}
          </span>
        </div>
        <a class="rider-hero__shop-now-button">
          <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
          Shop Now
        </a>
        <div class="rider-hero__current-season-container">
          <div class="rider-hero__current-season-title">
            Current Season
          </div>

          <div class="rider-hero__current-season-stats-container">
            <div class="rider-hero__current-season-stats-stat">
              <span class="rider-hero__current-season-stats-title">Position</span>
              <span class="rider-hero__current-season-stats-value">${riderDetails.currentPos}</span>
            </div>
            <div class="rider-hero__current-season-stats-stat">
              <span class="rider-hero__current-season-stats-title">Points</span>
              <span class="rider-hero__current-season-stats-value">${riderDetails.currentPoint}</span>
            </div>
            <div class="rider-hero__current-season-stats-stat">
              <span class="rider-hero__current-season-stats-title">Victories</span>
              <span class="rider-hero__current-season-stats-value">${riderDetails.currentVic}</span>
            </div>
          </div>

          <a id="backResultStandingBtn" class="rider-hero__results-and-standings-button">  
             Results & Standings	
             <i class="fa-regular fa-chevron-right" style="color: #ffffff;"></i>
          </a>

          <div class="rider-hero__teammate-container">
            <a class="rider-hero__teammate-profile">
              <div class="rider-hero__teammate">
                <div class="rider-hero__teammate-image-container">
                  <div class="rider-image-container">
                    <div class="rider-image">
                      <div class="u-observed lazy-image-wrapper">
                        <picture class=" picture">
                          <img class="img undefined picture__img" src="${riderDetails.teammateImg}"/>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rider-hero__teammate-details">
                  <span class="rider-hero__teammate-title">Teammate</span>
                  <span class="rider-hero__teammate-name">
                  ${riderDetails.teammateName}
                  </span>
                </div>
                <i class="fa-regular fa-chevron-right" style="color: #ffffff;"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="profile-tabs">
    <div class="tabs widget-outer-spacing">
      <ul class="tabs__list tabs__list--center">
        <li class="tabs__item">
          <button id="tab-overview" class="tabs__link is-active">
            <span class="tabs__link-text">Overview</span>
          </button>
        </li>
        <li class="tabs__item">
          <button id="tab-overview" class="tabs__link">
            <span class="tabs__link-text">News</span>
          </button>
        </li>
         <li class="tabs__item">
          <button id="tab-overview" class="tabs__link">
            <span class="tabs__link-text">Video</span>
          </button>
        </li>
      </ul>
    </div>

    <div id="tab-content-overview" class="tabs__tab-content tabs__tab-content--grey">
      <div class="rider-stats">
        <div class="rider-stats__header">
          <header class="widget-header  widget-header--no-cta ">
            <h2 class="widget-header__title">Rider Stats</h2>
          </header>
          <div class="rider-stats__supplier"></div>
        </div>

        <div class="rider-stats__container">
          <div class="rider-stats__menu-container">
            <button class="rider-stats__menu-button active">
            total</button>
            <button class="rider-stats__menu-button">MotoGP™</button>
            <button class="rider-stats__menu-button">Moto2™</button>
            <button class="rider-stats__menu-button">Moto3™</button>
          </div>

          <div class="rider-stats__stats-container rider-stats__stats-container--tablet">
            <div class="rider-stats__stats-stat">
              <span class="rider-stats__stats-stat-title">WORLD CHAMPIONSHIPS</span>
              <span class="rider-stats__stats-stat-value">${riderDetails.totalWorldCham}</span>
            </div>
            <div class="rider-stats__stats-stat">
              <span class="rider-stats__stats-stat-title">Victories</span>
              <span class="rider-stats__stats-stat-value">${riderDetails.totalVic}</span>
            </div>
            <div class="rider-stats__stats-stat">
              <span class="rider-stats__stats-stat-title">Podiums</span>
              <span class="rider-stats__stats-stat-value">${riderDetails.totalPod}</span>
            </div>
            <div class="rider-stats__stats-stat">
              <span class="rider-stats__stats-stat-title">Poles</span>
              <span class="rider-stats__stats-stat-value">${riderDetails.totalPole}</span>
            </div>
             <div class="rider-stats__stats-stat">
              <span class="rider-stats__stats-stat-title">Races</span>
              <span class="rider-stats__stats-stat-value">${riderDetails.totalRace}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}
