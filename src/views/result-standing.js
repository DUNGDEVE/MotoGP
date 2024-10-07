document.addEventListener("DOMContentLoaded", function () {
  const results = [
    {
      pos: 1,
      point: 25,
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/02/19/986b0e12-1db0-49d8-ae13-fd556286237a/93_Marc_MarquezFullbodyGresini.png?height=300&width=200",
      bikeNumber: 93,
      firstName: "M.",
      LastName: "Marquez",
      flag: "https://static-files.motogp.pulselive.com/assets/flags/es.svg",
      teamName: "Gresini Racing MotoGP",
      time: "41:52.083",
    },
  ];

  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ""; //xoa noi dung hien tai

  results.forEach((result) => {
    const row = document.createElement("tr");
    row.className = "results-table__body-row";

    if (result.teamName === "Gresini Racing MotoGP") {
      row.classList.add("gresini");
    } else if (result.teamName === "Ducati Lenovo Team") {
      row.classList.add("ducati");
    } else if (result.teamName === "Red Bull KTM Factory Racing") {
      row.classList.add("red-bull");
    } else if (result.teamName === "Pertamina Enduro VR46 Racing Team") {
      row.classList.add("pertamina");
    } else if (result.teamName === "Monster Energy Yamaha MotoGP Team") {
      row.classList.add("monster");
    } else if (result.teamName === "Trackhouse Racing") {
      row.classList.add("trackhouse");
    } else if (result.teamName === "CASTROL Honda LCR") {
      row.classList.add("castrol");
    } else if (result.teamName === "IDEMITSU Honda LCR") {
      row.classList.add("idemitsu");
    } else if (result.teamName === "HRC Test Team") {
      row.classList.add("hrc");
    } else if (result.teamName === "Prima Pramac Racing") {
      row.classList.add("prima");
    } else if (result.teamName === "Aprilia Racing") {
      row.classList.add("aprilia");
    }

    row.innerHTML = `
    <td class="results-table__body-cell results-table__body-cell--pos">${result.pos} </td>
    <td
    class="results-table__body-cell results-table__body-cell--points u-hide-tablet"
  >
    ${result.point}
  </td>
  <td class="results-table__body-cell results-table__body-cell--rider">
   <div class="results-table__rider-details">
    <div class="rider-image-container">
     <div class="rider-image">
      <div class=" u-observed lazy-image-wrapper ">
       <picture class="picture">
         <img class="img undefined picture__img" src="${result.riderImg}" alt="${result.LastName}" />
       </picture>
      </div>
     </div>
    </div>

     <div class="results-table__rider-name-wrapper u-hide-tablet">
       <div class="results-table__rider-name">
         <span class="results-table__body-cell results-table__body-cell--number"> ${result.bikeNumber}
         </span>
         <span class="results-table__body-cell results-table__body-cell--full-name">
           <a class="results-table__rider-link">
             <span class="results-table__first-name"> ${result.firstName}</span>
             ${result.LastName}
           </a>
         </span>
       </div>
       <img class="results-table__body-cell-flag" src="${result.flag}">
     </div>
   </div>
  </td>

  <td class="results-table__body-cell results-table__body-cell--team u-hide-tablet">${result.teamName}</td>
  <td class="results-table__body-cell results-table__body-cell--time u-hide-tablet">${result.time} </td>
    `;
    resultList.appendChild(row);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const standings = [
    {
      pos: 1,
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/03/07/2b32c79b-826b-4371-b357-3504438f4973/89-Jorge-Martin-Official-Rider_DSC9358.png?height=300&width=200",
      bikeNumber: 89,
      firstName: "J.",
      LastName: "Martin",
      teamName: "Prima Pramac Racing",
      flag: "https://static-files.motogp.pulselive.com/assets/flags/es.svg",
      point: 341,
    },
  ];

  const standingList = document.getElementById("standingList");
  standingList.innerHTML = "";

  standings.forEach((standing) => {
    const row = document.createElement("tr");
    row.className = "standings-table__body-row";

    if (standing.teamName === "Gresini Racing MotoGP") {
      row.classList.add("gresini");
    } else if (standing.teamName === "Ducati Lenovo Team") {
      row.classList.add("ducati");
    } else if (standing.teamName === "Red Bull KTM Factory Racing") {
      row.classList.add("red-bull");
    } else if (standing.teamName === "Pertamina Enduro VR46 Racing Team") {
      row.classList.add("pertamina");
    } else if (standing.teamName === "Monster Energy Yamaha MotoGP Team") {
      row.classList.add("monster");
    } else if (standing.teamName === "Trackhouse Racing") {
      row.classList.add("trackhouse");
    } else if (standing.teamName === "CASTROL Honda LCR") {
      row.classList.add("castrol");
    } else if (standing.teamName === "IDEMITSU Honda LCR") {
      row.classList.add("idemitsu");
    } else if (standing.teamName === "HRC Test Team") {
      row.classList.add("hrc");
    } else if (standing.teamName === "Prima Pramac Racing") {
      row.classList.add("prima");
    } else if (standing.teamName === "Aprilia Racing") {
      row.classList.add("aprilia");
    }

    row.innerHTML = `
    <td class="standings-table__body-cell standings-table__body-cell--pos">${standing.pos}</td>
    <td class="standings-table__body-cell standings-table__body-cell--rider">
      <div class="standings-table__rider-details">
        <div class="rider-image-container">
          <div class="rider-image">
            <div class="u-observed lazy-image-wrapper ">
              <picture class="picture">
                <img class="img undefined picture__img " src="${standing.riderImg}" alt="${standing.LastName}"/>
              </picture>
            </div>
          </div>
        </div>

        <div class="standings-table__rider-name-wrapper u-hide-tablet">
          <div class="standings-table__rider-name">
            <span class="standings-table__body-cell standings-table__body-cell--number">
            ${standing.bikeNumber}
            </span>
            <span class="standings-table__body-cell standings-table__body-cell--full-name">
              <a class="standings-table__rider-link">
                <span class="standings-table__first-name">
                ${standing.firstName}
                </span>
                ${standing.LastName}
              </a>
            </span>
          </div> 

          <img class="standings-table__body-cell-flag" src="${standing.flag}"/>
        </div> 
      </div>
    </td>

    <td class="standings-table__body-cell standings-table__body-cell--team u-hide-tablet">
    ${standing.teamName}
    </td>

    <td class="standings-table__body-cell standings-table__body-cell--points">
    ${standing.point}
    </td>
    `;
    standingList.appendChild(row);
  });
});
