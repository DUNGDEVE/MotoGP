
let header = document.querySelector('.main-nav');

header.innerHTML = `
     <div class="main-nav__desktop-top-nav">
    <div class="global-top-nav">
      <div class="global-top-nav__container">
        <ul class="global-top-nav__menu-list">
          <li class="global-top-nav__item" style="order: 1">
            <a class="global-top-nav__link">#RacingForTheFuture</a>
          </li>
          <li class="global-top-nav__item" style="order: 2">
            <a class="global-top-nav__link">Tickets</a>
          </li>
          <li class="global-top-nav__item" style="order: 3">
            <a class="global-top-nav__link">Hospitality</a>
          </li>
          <li class="global-top-nav__item" style="order: 4">
            <a class="global-top-nav__link">Experiences</a>
          </li>
          <li class="global-top-nav__item" style="order: 5">
            <a class="global-top-nav__link">Store</a>
          </li>
          <li class="global-top-nav__item" style="order: 6">
            <a class="global-top-nav__link">Authentics</a>
          </li>
        </ul>
        <ul class="global-top-nav__subcription-list">
          <li class="global-top-nav__item timingpass">
            <a class="global-top-nav__link external-link timingpass">
              MotoGP™TIMINGPASS
            </a>
          </li>
          <li class="global-top-nav__item videopass">
            <a class="global-top-nav__link videopass"> MotoGP™VIDEOPASS </a>
          </li>
        </ul>
        <span class="global-top-nav__subscribe-container">
          <a class="global-top-nav__subscribe-btn">Subscribe</a>
        </span>
        <div class="global-top-nav__fim">
          <a class="global-top-nav__fim-logo"></a>
        </div>
      </div>
    </div>
  </div>

  <div class="main-nav__container">
    <div class="main-nav__wrapper">
      <div class="main-nav__content">
        <button class="main-nav__overlay-menu-btn">
          <svg class=" " aria-hidden="true">
            <i class="fa-solid fa-bars" style="color: #ffffff"></i>
          </svg>
        </button>
        <a
          id="navigateBtnHomePage"
          class="main-nav__logo-75"
          href="/src/views/index.html"
        ></a>
        <div class="main-nav__menu-container">
          <ul class="main-nav__menu-list">
            <li class="main-nav__item" id="navigateBtnCalendar">
              <a
                class="main-nav__link"
                href="/src/views/CalendarViews/calendar.html"
              >
                Calendar
              </a>
            </li>
            <li class="main-nav__item" id="navigateBtnResults&Standings">
              <a
                class="main-nav__link"
                href="/src/views/ResultsViews/results.html"
              >
                Results & Standings
              </a>
            </li>
            <li class="main-nav__item" id="navigateBtnRiders&Teams">
              <a
                class="main-nav__link"
                href="/src/views/RiderViews/riders.html"
              >
                Riders & Teams
              </a>
            </li>

            <li class="main-nav__item">
              <a
                class="main-nav__link"
                href="https://www.motogp.com/en/videopass"
                target="_blank"
              >
                VideoPass
              </a>
            </li>
            <li class="main-nav__item">
              <a
                class="main-nav__link"
                href="https://www.motogp.com/en/videos"
                target="_blank"
              >
                Videos
              </a>
            </li>
            <li class="main-nav__item">
              <a
                class="main-nav__link"
                href="https://www.motogp.com/en/news"
                target="_blank"
              >
                News
              </a>
            </li>
          </ul>
        </div>
        <div class="sso sso--main-bar">
          
        </div>
      </div>
    </div>
  </div>
`

let username = document.querySelector('.sso--main-bar');

if (localStorage.getItem('username')) {
	username.innerHTML = `
		<a class="sso__login-btn" href="/src/views/login.html">${localStorage.getItem('username')}</a>
               <div class="logout"> <i class="fa-solid fa-helmet-un" style="color: #ffffff"></i> </div>
                                `
	let logout = document.querySelector('.logout');
	logout.addEventListener('click', () => {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		location.reload()
	})

} else {
	username.innerHTML = `
        <a class="sso__login-btn" href="/src/views/login.html">Login</a>
          <a class="sso__register-btn" href="/src/views/login.html">
            <span class="sso__register-btn-text sso__register-btn-text--bold"
              >Register</span
            >
            <div class="sso__picture">
              <svg class="icon" aria-hidden="true">
                <i class="fa-solid fa-helmet-un" style="color: #ffffff"></i>
              </svg>
            </div>
          </a>`
}

let list = document.querySelector('.main-nav__menu-list');
console.log(list)


if (localStorage.getItem('username') == 'admin') {
	console.log('a')
	list.innerHTML += ` <li class="main-nav__item    ">
                
                <a class="main-nav__link    "
                    href="/src/views/admin/admin.html"
                >
                    Admin Page
                </a>
        </li>`
}