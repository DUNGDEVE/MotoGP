let standingsData = null; // Biến toàn cục để lưu trữ dữ liệu standings 

document.addEventListener('DOMContentLoaded', function () {
    console.log("Trang đã tải xong. Bắt đầu thiết lập sự kiện...");

    // Thiết lập sự kiện cho phần chọn năm và các loại championship
    const yearSelect = document.querySelector('.primary-filter__filter-select--year');
    const categorySelect = document.querySelector('.primary-filter__filter-select--cat');
    const championshipSelect = document.querySelector('.primary-filter__filter-select--championship');

    // Gọi API khi người dùng thay đổi lựa chọn
    yearSelect.addEventListener('change', fetchStandings);
    categorySelect.addEventListener('change', fetchStandings);
    championshipSelect.addEventListener('change', fetchStandings);

    // Gọi API khi trang được tải
    fetchStandings();
});

function fetchStandings() {
    const selectedYear = document.querySelector('.primary-filter__filter-select--year').value;
    const selectedCategory = document.querySelector('.primary-filter__filter-select--cat').value;
    const selectedChampionship = document.querySelector('.primary-filter__filter-select--championship').value;

    console.log(`Đang gọi API với Year: ${selectedYear}, Category: ${selectedCategory}, Championship: ${selectedChampionship}`);

    // Xác định loại API để gọi dựa trên lựa chọn của người dùng
    let apiUrl = '';

    if (selectedChampionship === 'championship-standings') {
        apiUrl = `http://localhost:3000/api/standings/riders?year=${selectedYear}&category=${selectedCategory}`;
    } else if (selectedChampionship === 'team-standings') {
        apiUrl = `http://localhost:3000/api/standings/teams?year=${selectedYear}&teamType=${selectedCategory}`;
    }

    // Gọi API để lấy standings
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dữ liệu nhận được từ API:", data);
            standingsData = data; // Lưu dữ liệu vào biến toàn cục
            renderStandings(data, selectedChampionship); // Gọi hàm hiển thị dữ liệu
        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
            alert('Có lỗi xảy ra khi tải dữ liệu. Vui lòng kiểm tra console để biết thêm chi tiết.');
        });
}

function renderStandings(data) {
    const riderStandings = document.getElementById('riderStandings');
    const teamStandings = document.getElementById('teamStandings');

    const championshipType = document.querySelector('.primary-filter__filter-select--championship').value;

    // Ẩn cả hai bảng trước khi hiển thị bảng phù hợp
    riderStandings.style.display = 'none';
    teamStandings.style.display = 'none';

    if (championshipType === 'championship-standings') {
        // Hiển thị bảng Riders' Championship
        riderStandings.style.display = 'table';

        const riderStandingList = document.getElementById('riderStandingList');
        riderStandingList.innerHTML = ''; // Xóa nội dung trước đó

        data.forEach(item => {
            const row = document.createElement('tr');
            row.className = "standings-table__body-row";

            row.innerHTML = `
                <td class="standings-table__body-cell standings-table__body-cell--pos">${item.pos}</td>
                <td class="standings-table__body-cell standings-table__body-cell--rider">
                    <div class="standings-table__rider-details">
                        <div class="rider-image-container">
                            <div class="rider-image">
                                <div class="u-observed lazy-image-wrapper">
                                    <picture class="picture">
                                        <img class="img undefined picture__img" src="${item.riderImg}" alt="${item.lastName}"/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div class="standings-table__rider-name-wrapper u-hide-tablet">
                            <div style="display: flex; align-items: center;">
                                <span class="standings-table__body-cell standings-table__body-cell--number" style="width: 30px; text-align: center;">
                                    ${item.bikeNumber}
                                </span>
                                <span class="standings-table__body-cell standings-table__body-cell--full-name" style="margin-left: 8px;">
                                    <a class="standings-table__rider-link">
                                        <span class="standings-table__first-name">${item.firstName}</span> ${item.lastName}
                                    </a>
                                </span>
                            </div>
                        </div> 
                    </div>
                </td>
                <td class="standings-table__body-cell standings-table__body-cell--team u-hide-tablet">
                    <img class="standings-table__body-cell-flag" src="${item.flag}"/>
                    ${item.teamName}
                </td>
                <td class="standings-table__body-cell standings-table__body-cell--points">
                    ${item.point}
                </td>
            `;
            riderStandingList.appendChild(row);
        });
    } else if (championshipType === 'team-standings') {
        // Hiển thị bảng Teams' Championship
        teamStandings.style.display = 'table';

        const teamStandingList = document.getElementById('teamStandingList');
        teamStandingList.innerHTML = ''; // Xóa nội dung trước đó

        data.forEach(item => {
            const row = document.createElement('tr');
            row.className = "standings-table__body-row";

            row.innerHTML = `
                <td class="standings-table__body-cell standings-table__body-cell--pos">${item.pos}</td>
                <td class="standings-table__body-cell standings-table__body-cell--team">
                    ${item.teamName}
                </td>
                <td class="standings-table__body-cell standings-table__body-cell--points">
                    ${item.totalPoints}
                </td>
            `;
            teamStandingList.appendChild(row);
        });
    }
}

