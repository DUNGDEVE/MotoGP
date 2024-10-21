let ridersData = null;  // Biến toàn cục để lưu trữ dữ liệu sau khi gọi API

document.addEventListener('DOMContentLoaded', function () {
    console.log("Trang đã tải xong. Bắt đầu gọi API...");

    // Gọi API chỉ một lần khi trang được tải
    fetch('http://localhost:3000/api/riders')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dữ liệu nhận được từ API:", data);
            ridersData = data;  // Lưu dữ liệu vào biến toàn cục
            renderRiders(data);  // Hiển thị dữ liệu riders mặc định khi trang tải

            // Gọi hàm showTeam để hiển thị riders theo loại mặc định (ví dụ, MotoGP)
            showTeam('moto1', document.querySelector('.rider-grid__menu-item'));
        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
            alert('Có lỗi xảy ra khi tải dữ liệu. Vui lòng kiểm tra console để biết thêm chi tiết.');
        });
});

// Hàm hiển thị dữ liệu vào danh sách riders
function renderRiders(riders) {
    const teamList = document.getElementById('teamList');
    if (!teamList) {
        console.error('Không tìm thấy phần tử #teamList trong HTML.');
        return;
    }
    teamList.innerHTML = ''; // Xóa nội dung cũ của danh sách riders
    console.log("Bắt đầu render danh sách riders...");

    riders.forEach(rider => {
        const link = document.createElement("a");
        link.className = "rider-list__rider";
        link.href = `../RiderDetailViews/rider-detail.html?rider_id=${rider.rider_id}`;


        let backgroundClass = "rider-list__background-team-colour";

        // Sử dụng object để quản lý các lớp màu nền đội dễ dàng hơn
        const teamBackgroundClasses = {
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
        };

        if (teamBackgroundClasses[rider.teamName]) {
            backgroundClass += ` ${teamBackgroundClasses[rider.teamName]}`;
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
                                <picture class="object-fit-cover-picture">
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
                            <img class="rider-list__details-flag" src="${rider.flagImg}" alt="${rider.countryName}"/>
                        </div>
                        ${rider.countryName}
                    </span>
                    <span class="rider-list__details-team">
                        ${rider.teamName}
                    </span>
                </div>
            </div>
        `;

        teamList.appendChild(link);
    });

    console.log(`Đã render xong danh sách riders với ${riders.length} riders.`);
}

// Hàm để hiển thị đội tương ứng khi người dùng nhấn nút
function showTeam(category, element) {
    // Xóa class active từ tất cả các nút
    document.querySelectorAll('.rider-grid__menu-item').forEach(function (btn) {
        btn.classList.remove('active-rider-btn');
    });

    // Thêm class active cho nút được chọn
    element.classList.add('active-rider-btn');

    // Xóa class active từ tất cả các phần tử hiện tại
    document.querySelectorAll('.active-rider').forEach(function (section) {
        section.classList.remove('active-rider');
    });

    // Thêm class active cho phần tử được chọn dựa trên category
    const selectedTeamSection = document.getElementById(`team-${category}`);
    if (selectedTeamSection) {
        selectedTeamSection.classList.add('active-rider');
    }

    // Lọc dữ liệu dựa trên category và render
    if (ridersData) {
        let filteredRiders;

        if (category === 'moto1') {
            filteredRiders = ridersData.filter(rider => rider.rider_type === 'MotoGP™');
        } else if (category === 'moto2') {
            filteredRiders = ridersData.filter(rider => rider.rider_type === 'Moto2™');
        } else if (category === 'moto3') {
            filteredRiders = ridersData.filter(rider => rider.rider_type === 'Moto3™');
        } else if (category === 'motoe') {
            filteredRiders = ridersData.filter(rider => rider.rider_type === 'MotoE™');
        } else {
            console.error('Loại đội đua không hợp lệ');
            return;
        }

        renderRiders(filteredRiders);
    } else {
        console.warn('Dữ liệu riders chưa được tải.');
    }
}
