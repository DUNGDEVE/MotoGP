let calendarData = null;  // Biến toàn cục để lưu trữ dữ liệu sau khi gọi API

document.addEventListener('DOMContentLoaded', function () {
	console.log("Trang đã tải xong. Bắt đầu gọi API...");

	// Gọi API chỉ một lần khi trang được tải
	fetch('http://localhost:3000/api/calendar')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log("Dữ liệu nhận được từ API:", data);
			calendarData = data;  // Lưu dữ liệu vào biến toàn cục
			renderCalendar(data);  // Hiển thị dữ liệu MotoGP mặc định khi trang tải
		})
		.catch(error => {
			console.error('Lỗi khi gọi API:', error);
			// alert('Có lỗi xảy ra khi tải dữ liệu. Vui lòng kiểm tra console để biết thêm chi tiết.');
		});
});

// Hàm hiển thị dữ liệu vào danh sách đội
function renderCalendar(calendar) {
	const wrap = document.getElementsByClassName('wrap-calendar');
	const GrandPrix = document.getElementById('GrandPrix');
	const AllEvents = document.getElementById('AllEvents');
	GrandPrix.innerHTML = ``;
	AllEvents.innerHTML = ``;

	if (!wrap) {
		console.error('Không tìm thấy phần tử #teamList trong HTML.');
		return;
	}
	console.log("Bắt đầu render danh sách đội...");

	let month;

	calendarData.forEach((c, index) => {
		const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];
		const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		var startDate = new Date(c.start_date);
		var endDate = new Date(c.end_date);

		if (c.event_type == 'Grands Prix') {
			if (c.event_month !== month) {
				GrandPrix.innerHTML += `
				<div class="calendar-listings__month active ">
					<div class="calendar-listings__month-title">${monthNames[c.event_month - 1]}</div>
				`
			}

			GrandPrix.innerHTML += `
            <ul class="calendar-listings__month-listings">
              <li class="calendar-listing__event-container calendar-listing__event-container--finished">
                <a class="calendar-listing__event">
                  <div class="calendar-listing__status-container">
                    <div class="calendar-listing__status-type">GP${index + 1}</div>
                    <div class="calendar-listing__status-bar">
                      <div class="calendar-listing__status-icon"></div>
                      <div class="calendar-listing__status-text">
					  ${c.status}
                      </div>
                    </div>
                  </div>
                  <div class="calendar-listing__information">
                    <div class="calendar-listing__details">
                      <div class="calendar-listing__date-container">
                        <div class="calendar-listing__date-start-container">
                          <div class="calendar-listing__date-start-day">
                            ${startDate.getDate()}
                          </div>
                          <div class="calendar-listing__date-start-month">
                            ${monthNamesShort[c.event_month]}
                          </div>
                        </div>
                        <div class="calendar-listing__date-end-container">
                          <div class="calendar-listing__date-end-day">
							${endDate.getDate()}

						  </div>
                          <div class="calendar-listing__date-end-month">
							${monthNamesShort[c.event_month]}
                          </div>
                        </div>
                      </div>
                      <div class="calendar-listing__title">
							${c.event_name}
                        <div class="calendar-listing__location-container calendar-listing__location-container--desktop">
                          <div class="calendar-listing__location-flag">
                            <img class="calendar-listing_flag"
                              src="${c.flagImg}" alt="QA flag"
                              loading="lazy" />
                          </div>
                          <div class="calendar-listing__location-track-name">
                            ${c.circuit_name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        `;
		} else if (c.event_type == 'All Event') {
			if (c.event_month !== month) {
				AllEvents.innerHTML += `
				<div class="calendar-listings__month active ">
					<div class="calendar-listings__month-title">${monthNames[c.event_month - 1]}</div>
				`
			}

			AllEvents.innerHTML += `
            <ul class="calendar-listings__month-listings">
              <li class="calendar-listing__event-container calendar-listing__event-container--finished">
                <a class="calendar-listing__event">
                  <div class="calendar-listing__status-container">
                    <div class="calendar-listing__status-type">GP${index + 1}</div>
                    <div class="calendar-listing__status-bar">
                      <div class="calendar-listing__status-icon"></div>
                      <div class="calendar-listing__status-text">
					  ${c.status}
                      </div>
                    </div>
                  </div>
                  <div class="calendar-listing__information">
                    <div class="calendar-listing__details">
                      <div class="calendar-listing__date-container">
                        <div class="calendar-listing__date-start-container">
                          <div class="calendar-listing__date-start-day">
                            ${startDate.getDate()}
                          </div>
                          <div class="calendar-listing__date-start-month">
                            ${monthNamesShort[c.event_month]}
                          </div>
                        </div>
                        <div class="calendar-listing__date-end-container">
                          <div class="calendar-listing__date-end-day">
							${endDate.getDate()}

						  </div>
                          <div class="calendar-listing__date-end-month">
							${monthNamesShort[c.event_month]}
                          </div>
                        </div>
                      </div>
                      <div class="calendar-listing__title">
							${c.event_name}
                        <div class="calendar-listing__location-container calendar-listing__location-container--desktop">
                          <div class="calendar-listing__location-flag">
                            <img class="calendar-listing_flag"
                              src="${c.flagImg}" alt="QA flag"
                              loading="lazy" />
                          </div>
                          <div class="calendar-listing__location-track-name">
                            ${c.circuit_name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        `;
		}

	});

}





