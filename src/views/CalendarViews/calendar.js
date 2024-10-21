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
      renderCalendar('GrandPrix');  // Hiển thị dữ liệu Grands Prix khi trang tải
    })
    .catch(error => {
      console.error('Lỗi khi gọi API:', error);
    });
});

// Hàm hiển thị dữ liệu vào danh sách sự kiện
function renderCalendar(type) {
  const GrandPrix = document.getElementById('GrandPrix');
  const AllEvents = document.getElementById('AllEvents');
  GrandPrix.innerHTML = ``;
  AllEvents.innerHTML = ``;

  console.log("Bắt đầu render danh sách sự kiện...");

  // Lọc sự kiện theo loại
  const filteredGP = calendarData.filter(c => c.event_type === 'Grands Prix');
  const filteredAE = calendarData.filter(c => c.event_type === 'All Event');

  if (type === 'GrandPrix') {
    // Hiển thị sự kiện Grands Prix
    if (filteredGP.length === 0) {
      GrandPrix.innerHTML = `<p>Không có sự kiện Grands Prix.</p>`;
    } else {
      renderEventList(filteredGP, GrandPrix);
    }
    // Ẩn All Events
    AllEvents.classList.add('in-active');
    AllEvents.classList.remove('active');
    GrandPrix.classList.remove('in-active');
    GrandPrix.classList.add('active');
  } else {
    // Hiển thị sự kiện All Event
    if (filteredAE.length === 0) {
      AllEvents.innerHTML = `<p>Không có sự kiện All Event.</p>`;
    } else {
      renderEventList(filteredAE, AllEvents);
    }
    // Ẩn Grands Prix
    GrandPrix.classList.add('in-active');
    GrandPrix.classList.remove('active');
    AllEvents.classList.remove('in-active');
    AllEvents.classList.add('active');
  }
}

function renderEventList(events, container) {
  // Sắp xếp các sự kiện theo tháng và ngày
  events.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

  let currentMonth = null;
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  events.forEach((c, index) => {
    const startDate = new Date(c.start_date);
    const endDate = new Date(c.end_date);

    // Lấy tháng từ startDate và endDate
    const eventStartMonth = getMonth(startDate);
    const eventEndMonth = getMonth(endDate);

    if (eventStartMonth !== currentMonth) {
      currentMonth = eventStartMonth;
      container.innerHTML += `
        <div class="calendar-listings__month active ${monthNamesShort[eventStartMonth].toLowerCase()}">
          <div class="calendar-listings__month-title">${monthNames[eventStartMonth]}</div>
          <ul class="calendar-listings__month-listings" style="list-style: none; padding: 0; margin: 0;">
      `;
    }

    container.innerHTML += `
  <li class="calendar-listing__event-container calendar-listing__event-container--finished" style="list-style: none;">
    <a class="calendar-listing__event">
      <div class="calendar-listing__status-container">
        <div class="calendar-listing__status-type">GP${index + 1}</div>
        <div class="calendar-listing__status-bar">
          <div class="calendar-listing__status-icon"></div>
          <div class="calendar-listing__status-text">${c.status}</div>
        </div>
      </div>
      <div class="calendar-listing__information">
        <div class="calendar-listing__details">
          <div class="calendar-listing__date-container">
            <div class="calendar-listing__date-start-container">
              <div class="calendar-listing__date-start-day">${startDate.getDate()}</div>
              <div class="calendar-listing__date-start-month">${monthNamesShort[eventStartMonth]}</div>
            </div>
            <div class="calendar-listing__date-end-container">
              <div class="calendar-listing__date-end-day">${endDate.getDate()}</div>
              <div class="calendar-listing__date-end-month">${monthNamesShort[eventEndMonth]}</div>
            </div>
          </div>
          <div class="calendar-listing__title">
            ${c.event_name}
            <div class="calendar-listing__location-container calendar-listing__location-container--desktop">
              <div class="calendar-listing__location-flag">
                <img class="calendar-listing_flag" src="${c.flagImg}" alt="${c.country} flag" loading="lazy" />
              </div>
              <div class="calendar-listing__location-track-name">${c.circuit_name}</div>
            </div>
          </div>
        </div>
        <!-- Add a container for the circuit image -->
        <div class="calendar-listing__circuit-image">
          <img src="${c.circuit_image_url}" alt="Circuit image" style="max-width: 100%; height: auto;" />
        </div>
      </div>
    </a>
  </li>
`;

    if (eventStartMonth !== currentMonth) {
      container.innerHTML += `
          </ul>
        </div>
      `;
    }
  });

  // Đóng thẻ ul và div nếu còn mở
  if (currentMonth !== null) {
    container.innerHTML += `</ul></div>`;
  }
}

function showCalendar(section, button) {
  // Hiển thị phần tương ứng
  renderCalendar(section);

  // Cập nhật trạng thái nút
  document.querySelectorAll('.calendar-listings__event-toggle-btn').forEach((btn) => {
    btn.classList.remove('active-btn');
  });
  button.classList.add('active-btn');
}

function getMonth(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return date.getMonth(); // Trả về giá trị tháng (0-11)
}
