document.addEventListener("DOMContentLoaded", async () => {
    // Lấy team_id từ URL
    const params = new URLSearchParams(window.location.search);
    const teamId = params.get("team_id"); // Lấy giá trị team_id từ URL
    const riderDetailsContainer = document.getElementById("riderDetails"); // Giữ nguyên ID để tái sử dụng CSS

    if (teamId) {
        try {
            const response = await fetch(`http://localhost:3000/api/teams/${teamId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch team details");
            }

            const teamDetails = await response.json();

            // Kiểm tra xem dữ liệu có đầy đủ không
            if (teamDetails) {
                const backgroundClass = getBackgroundClass(teamDetails.teamName);

                // Cập nhật tiêu đề trang
                document.title = `${teamDetails.teamName} - MotoGP`;

                // Xử lý thông tin các rider trong team
                const ridersHTML = teamDetails.riders.map(rider => `
                    <a class="rider-hero__teammate-profile" href="/src/views/RiderDetailViews/rider-detail.html?rider_id=${rider.riderId}">
                        <div class="rider-hero__teammate">
                            <div class="rider-hero__teammate-image-container">
                                <div class="rider-image-container">
                                    <div class="rider-image">
                                        <div class="u-observed lazy-image-wrapper">
                                            <picture class="picture">
                                                <img class="img undefined picture__img" src="${rider.img}" alt="${rider.name}" />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="rider-hero__teammate-details">
                                <span class="rider-hero__teammate-title">${rider.hashtag}</span>
                                <span class="rider-hero__teammate-name">${rider.name || "N/A"}</span>
                            </div>
                            <i class="fa-regular fa-chevron-right" style="color: #ffffff;"></i>
                        </div>
                    </a>
                `).join('');

                riderDetailsContainer.innerHTML = `
    <div class="rider-hero">
        <div class="rider-hero__container">
            <a id="backRiderBtn" class="rider-hero__back-button" href="/src/views/TeamViews/teams.html">
                <i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>
                ALL TEAMS
            </a>

            <div class="rider-hero__background">
                <div class="${backgroundClass}"></div>
                <div class="rider-hero__background-info">
                    <div class="rider-hero__background-name" style="margin-top: 3rem;font-size: 300px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">${teamDetails.teamName}</div>
                </div>
                <div class="rider-hero__background-gradient"></div>
                <div class="rider-hero__background-image">
                    <div class="rider-image-container">
                        <div class="rider-image">
                            <div class="u-observed lazy-image-wrapper">
                                <picture class="picture">
                                    <img style="max-width: 43%"class="img undefined picture__img" src="${teamDetails.motoImg}" alt="${teamDetails.teamName}" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rider-hero__background-image-gradient"></div>
            </div>

            <div class="rider-hero__info-container">
                <span class="rider-hero__info-hashtag">${teamDetails.teamHashtag || ''}</span>
                <span class="rider-hero__info-name">${teamDetails.teamName}</span>
                <div class="rider-hero__current-season-container">
                    <div class="rider-hero__current-season-title">Team Riders</div>
                    <div class="rider-hero__teammate-container">
                        ${ridersHTML}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

                // Gọi hàm setupTabs để cấu hình các tab sau khi thêm nội dung vào DOM
                setupTabs();
            }
        } catch (error) {
            console.error("Error fetching team details:", error);
            riderDetailsContainer.innerHTML = `<p>Error loading team details.</p>`;
        }
    } else {
        riderDetailsContainer.innerHTML = `<p>No team selected.</p>`;
    }
});

// Hàm để lấy class cho background dựa trên teamName
function getBackgroundClass(teamName) {
    const teamClasses = {
        "Gresini Racing MotoGP": "gresini",
        "Ducati Lenovo Team": "ducati",
        "Red Bull KTM Factory Racing": "red-bull",
        "Pertamina Enduro VR46 Racing Team": "pertamina",
        "Monster Energy Yamaha MotoGP™": "monster",
        "Trackhouse Racing": "trackhouse",
        "CASTROL Honda LCR": "castrol",
        "IDEMITSU Honda LCR": "idemitsu",
        "HRC Test Team": "hrc",
        "Prima Pramac Racing": "prima",
        "Aprilia Racing": "aprilia",
        "MT Helmets - MSI": "mt",
        "Honda Team Asia": "honda",
        "Dynavolt Intact GP MotoE": "dynavolt",
        "CFMOTO Aspar Team": "cfmoto",
        "BOE Motorsports": "boe",
        "Aruba Cloud MotoE Racing Team": "aruba",
        "LCR Honda": "lcr",
        "Red Bull GASGAS Tech3": "gasgas",
        "Repsol Honda Team": "repsol",
        "ELF Marc VDS Racing Team": "elf",
        "Fantic Racing": "fantic",
        "Italtrans Racing Team": "italtrans",
        "KLINT Forward Factory Team": "klint",
        "Liqui Moly Husqvarna Intact GP": "liqui",
        "OnlyFans American Racing Team": "onlyfans",
        "Preicanos Racing Team": "preicanos",
        "QJMOTOR Gresini Moto2™": "qjmotor",
        "Red Bull KTM Ajo": "red-bull",
        "RW Racing GP": "rw",
        "SpeedUp Racing": "speed",
        "Yamaha VR46 Master Camp Team": "yamaha",
        "CIP Green Power": "cip",
        "Kopron Rivacold Snipers Team": "kopron",
        "Leopard Racing": "leopard",
        "MLav Racing": "mlav",
        "MTA Team": "mta",
        "SIC58 Squadra Corse": "sic58",
        "Axxis-MSI": "axxis",
        "Felo Gresini MotoE": "felo",
        "LCR E-Team": "lcr-e",
        "Ongetta SIC58 Squadra Corse": "ongetta",
        "Openbank Aspar Team": "openBank",
        "Tech3 E-Racing": "tech3",
        "IDEMITSU Honda Team Asia": "ihta",
        "FleetSafe Honda - MLav Racing": "fhmr"
        // Thêm các đội khác tại đây...
    };

    return teamClasses[teamName] || "rider-hero__background-team-colour"; // Giá trị mặc định nếu không tìm thấy
}

// Hàm để chuyển đổi giữa các tab
function setupTabs() {
    const tabs = document.querySelectorAll('.tabs__link');
    const tabContents = document.querySelectorAll('.tabs__tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Xóa lớp 'is-active' từ tất cả các tab
            tabs.forEach(t => t.classList.remove('is-active'));
            // Thêm lớp 'is-active' cho tab hiện tại
            tab.classList.add('is-active');

            // Ẩn tất cả các nội dung tab
            tabContents.forEach(content => content.style.display = 'none');

            // Hiển thị nội dung tương ứng với tab được chọn
            const target = tab.id.replace('tab-', 'tab-content-');
            const activeContent = document.getElementById(target);
            if (activeContent) {
                activeContent.style.display = 'block';
            }
        });
    });

    // Hiển thị tab đầu tiên mặc định
    if (tabContents.length > 0) {
        tabContents.forEach(content => content.style.display = 'none');
        tabContents[0].style.display = 'block';
    }
}
