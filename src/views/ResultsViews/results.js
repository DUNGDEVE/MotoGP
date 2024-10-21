document.addEventListener('DOMContentLoaded', async () => {
    // Chọn các phần tử dropdown
    const yearSelect = document.querySelector('.primary-filter__filter-select--year');
    const typeSelect = document.querySelector('.primary-filter__filter-select--type');
    const eventSelect = document.querySelector('.primary-filter__filter-select--event');
    const categorySelect = document.querySelector('.primary-filter__filter-select--cat');
    const sessionSelect = document.querySelector('.primary-filter__filter-select--session');
    const resultList = document.getElementById('resultList'); // Bảng kết quả

    // Hàm lấy dữ liệu từ API
    const fetchData = async (url, method = 'GET', data = null) => {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            if (data) {
                options.body = JSON.stringify(data);
            }
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    };

    // Hàm thêm dữ liệu vào các dropdown
    const loadData = async () => {
        try {
            // Thêm các option cho năm
            const years = ['2024', '2023', '2022', '2021', '2020'];
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });

            // Thêm các option cho loại (type)
            const types = [
                { value: 'GP', text: 'Grands Prix' },
                { value: 'ALL', text: 'All Events' }
            ];
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type.value;
                option.textContent = type.text;
                typeSelect.appendChild(option);
            });

            // Lấy dữ liệu sự kiện
            const events = await fetchData('http://localhost:3000/api/result/event');
            if (events) {
                events.forEach(event => {
                    const option = document.createElement('option');
                    option.value = event.id; // Sử dụng id từ API
                    option.textContent = event.name; // Sử dụng name từ API
                    eventSelect.appendChild(option);
                });
            }

            // Lấy dữ liệu thể loại (category)
            const categories = await fetchData('http://localhost:3000/api/result/category');
            if (categories) {
                categories.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id; // Sử dụng id từ API
                    option.textContent = category.name; // Sử dụng name từ API
                    categorySelect.appendChild(option);
                });
            }

            // Lấy dữ liệu session
            const sessions = await fetchData('http://localhost:3000/api/result/session');
            if (sessions) {
                sessions.forEach(session => {
                    const option = document.createElement('option');
                    option.value = session.id; // Sử dụng id từ API
                    option.textContent = session.name; // Sử dụng name từ API
                    sessionSelect.appendChild(option);
                });
            }
        } catch (error) {
            console.error('Error loading dropdown data:', error);
        }
    };

    // Hàm fetch và hiển thị kết quả
    const fetchAndRenderResults = async () => {
        // Sử dụng giá trị từ dropdown để lấy dữ liệu
        const selectedYear = yearSelect.value;
        const selectedType = typeSelect.value;
        const selectedEvent = eventSelect.value;
        const selectedCategory = categorySelect.value;
        const selectedSession = sessionSelect.value;

        // Tạo URL endpoint
        const url = `http://localhost:3000/api/result/filter`;

        // Dữ liệu để gửi trong body của yêu cầu POST
        const filterData = {
            year: selectedYear,    // Sử dụng giá trị đã chọn từ dropdown
            event: selectedEvent,   // Sử dụng giá trị đã chọn từ dropdown
            category: selectedCategory, // Sử dụng giá trị đã chọn từ dropdown
            session: selectedSession // Sử dụng giá trị đã chọn từ dropdown
        };

        try {
            const results = await fetchData(url, 'POST', filterData); // Sử dụng phương thức POST
            if (results) {
                renderResults(results);
            } else {
                alert('Có lỗi xảy ra khi tải dữ liệu kết quả.');
            }
        } catch (error) {
            console.error('Error fetching results:', error);
            alert('Có lỗi xảy ra khi tải dữ liệu kết quả.');
        }
    };

    // Hàm hiển thị kết quả vào bảng
    const renderResults = (results) => {
        resultList.innerHTML = ''; // Xóa nội dung cũ

        if (results.length === 0) {
            const noDataRow = document.createElement('tr');
            noDataRow.innerHTML = `
                <td colspan="5" class="results-table__cell results-table__cell--no-data">Không tìm thấy kết quả.</td>
            `;
            resultList.appendChild(noDataRow);
            return;
        }

        results.forEach(result => {
            const row = document.createElement('tr');
            row.className = "results-table__body-row";

            // Thêm class cho các đội cụ thể
            const teamClasses = {
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
                "Aprilia Racing": "aprilia"
            };

            if (teamClasses[result.teamName]) {
                row.classList.add(teamClasses[result.teamName]);
            }

            // Cập nhật HTML cho dòng kết quả
            row.innerHTML = `
                <td class="results-table__body-cell results-table__body-cell--pos">${result.pos}</td>
                <td class="results-table__body-cell results-table__body-cell--points u-hide-tablet">${result.point}</td>
                <td class="results-table__body-cell results-table__body-cell--rider">
                    <div class="results-table__rider-details">
                        <div class="rider-image-container">
                            <div class="rider-image">
                                <div class="u-observed lazy-image-wrapper">
                                    <picture class="picture">
                                        <img class="img undefined picture__img" src="${result.riderImg}" alt="${result.lastName}" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div class="results-table__rider-name-wrapper u-hide-tablet">
                            <div class="results-table__rider-name">
                                <span class="results-table__body-cell results-table__body-cell--number">${result.bikeNumber}</span>
                                <span class="results-table__body-cell results-table__body-cell--full-name">
                                    <a class="results-table__rider-link">
                                        <span class="results-table__first-name">${result.firstName}</span> ${result.lastName}
                                    </a>
                                </span>
                            </div>
                            <img class="results-table__body-cell-flag" src="${result.flag}" alt="Flag of rider's country">
                        </div>
                    </div>
                </td>
                <td class="results-table__body-cell results-table__body-cell--team u-hide-tablet">${result.teamName}</td>
                <td class="results-table__body-cell results-table__body-cell--time u-hide-tablet">${result.time || 'N/A'}</td>
            `;

            resultList.appendChild(row);
        });
    };

    // Thêm sự kiện khi người dùng thay đổi bất kỳ dropdown nào
    const addEventListeners = () => {
        yearSelect.addEventListener('change', () => fetchAndRenderResults());
        typeSelect.addEventListener('change', () => fetchAndRenderResults());
        eventSelect.addEventListener('change', () => fetchAndRenderResults());
        categorySelect.addEventListener('change', () => fetchAndRenderResults());
        sessionSelect.addEventListener('change', () => fetchAndRenderResults());
    };

    // Khởi tạo
    await loadData();
    fetchAndRenderResults(); // Gọi hàm này để lọc kết quả ngay khi tải trang
    addEventListeners();
});
