let teamsData = null;  // Biến toàn cục để lưu trữ dữ liệu sau khi gọi API

document.addEventListener('DOMContentLoaded', function () {
    console.log("Trang đã tải xong. Bắt đầu gọi API...");

    // Gọi API chỉ một lần khi trang được tải
    fetch('http://localhost:3000/api/teams')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dữ liệu nhận được từ API:", data);
            teamsData = data;  // Lưu dữ liệu vào biến toàn cục
            renderMotoGPTeams(data);  // Hiển thị dữ liệu MotoGP mặc định khi trang tải
        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
            alert('Có lỗi xảy ra khi tải dữ liệu. Vui lòng kiểm tra console để biết thêm chi tiết.');
        });
});

// Hàm hiển thị dữ liệu vào danh sách đội
function renderTeams(teams) {
    const teamList = document.getElementById('teamList');
    if (!teamList) {
        console.error('Không tìm thấy phần tử #teamList trong HTML.');
        return;
    }
    teamList.innerHTML = ''; // Xóa nội dung cũ của danh sách đội
    console.log("Bắt đầu render danh sách đội...");

    teams.forEach(team => {
        const link = document.createElement("a");
        link.className = "teams-list__team";
        link.href = `../TeamDetailViews/team-detail.html?team_id=${team.team_id}`; // Thêm liên kết tới trang chi tiết nếu cần

        let backgroundClass = "teams-list__background-team-colour";

        // Sử dụng switch-case hoặc object để quản lý các lớp màu nền đội dễ dàng hơn
        const teamBackgroundClasses = {
            "Gresini Racing MotoGP": "gresini",
            "Ducati Lenovo Team": "ducati",
            "Red Bull KTM Factory Racing": "red-bull",
            "Pertamina Enduro VR46 Racing Team": "pertamina",
            "Monster Energy Yamaha MotoGP Team": "monster",
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
            "Tech3 E-Racing": "tech3"
        };

        if (teamBackgroundClasses[team.teamName]) {
            backgroundClass += ` ${teamBackgroundClasses[team.teamName]}`;
        }

        link.innerHTML = `
            <div class="teams-list__background">
                <div class="${backgroundClass}"></div>
                <div class="teams-list__background-name">${team.backgroundName}</div>
                <div class="teams-list__background-gradient"></div>
            </div>
            
            <div class="teams-list__image-container">
                <div class="teams-list__image js-image">
                    <div class="team-image-container">
                        <div class="team-image">
                            <div class="js-lazy-load u-observed lazy-image-wrapper">
                                <picture class="picture">
                                    <img src="${team.motoImg}" alt="${team.teamName}" class="img picture__img">
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="teams-list__info-container">
                <div class="teams-list__info-name">${team.teamName}</div>                        
                <div class="teams-list__riders-container">
                    <div class="teams-list__riders-name">${team.riderName1}</div>
                    <div class="teams-list__riders-name">${team.riderName2}</div>
                </div>
            </div>
        `;

        teamList.appendChild(link);
    });

    console.log("Đã render xong danh sách đội với", teams.length, "đội.");
}

// Hàm lọc và hiển thị các đội thuộc MotoGP
function renderMotoGPTeams(teams) {
    const motoGPTeams = teams.filter(team => team.team_type === 'MotoGP™');
    renderTeams(motoGPTeams);
}

// Hàm lọc và hiển thị các đội thuộc Moto2
function renderMoto2Teams(teams) {
    const moto2Teams = teams.filter(team => team.team_type === 'Moto2™');
    renderTeams(moto2Teams);
}

// Hàm lọc và hiển thị các đội thuộc Moto3
function renderMoto3Teams(teams) {
    const moto3Teams = teams.filter(team => team.team_type === 'Moto3™');
    renderTeams(moto3Teams);
}

function renderMotoETeams(teams) {
    const motoETeams = teams.filter(team => team.team_type === 'MotoE™');
    renderTeams(motoETeams);
}
let currentActiveButton = null;

function showTeam(teamType, button) {
    // Bỏ class active-rider-btn cho tất cả các nút
    const buttons = document.querySelectorAll('.rider-grid__menu-item');
    buttons.forEach(btn => btn.classList.remove('active-rider-btn'));

    // Thêm class active-rider-btn cho nút hiện tại
    button.classList.add('active-rider-btn');

    if (teamsData) {
        // Lọc dữ liệu từ cache (teamsData) và hiển thị
        switch (teamType) {
            case 'moto1':
                renderMotoGPTeams(teamsData); // Hiển thị MotoGP
                break;
            case 'moto2':
                renderMoto2Teams(teamsData); // Hiển thị Moto2
                break;
            case 'moto3':
                renderMoto3Teams(teamsData); // Hiển thị Moto3
                break;
            case 'motoe':
                renderMotoETeams(teamsData);  // Hiển thị MotoE
                break;
            default:
                console.error('Loại đội đua không hợp lệ');
        }
    } else {
        console.error('Dữ liệu chưa được tải xong hoặc có lỗi xảy ra.');
    }
}


