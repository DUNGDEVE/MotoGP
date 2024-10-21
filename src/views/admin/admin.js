import { fetchTeam, addTeam, updateTeam, deleteTeam } from '../api/team.js'
import { fetchRider, addRider, updateRider, deleteRider } from '../api/rider.js'



const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const textNavs = $$('.nav-link')
const breadcrumb = $('.breadcrumb-item.active')
const table = $('.table')
const thead = $('.table> thead')
const tbody = $('.table> tbody')
const modalAdd = $('.modal-add')
const addButton = $('.add-button')
const modalFooter = $('.modal-footer')

if (localStorage.getItem("username") != 'admin') {
    window.location.href = "/source/main.html";
}


textNavs.forEach(async (textNav) => {
    textNav.addEventListener('click', async function (event) {
        event.preventDefault()
        // Remove the 'active' class from all tab links
        if ($('.nav-link.active')) {
            $('.nav-link.active').classList.remove('active');
        }
        // Add the 'active' class to the clicked tab link
        this.classList.add('active');
        breadcrumb.innerHTML = this.textContent;

        $('.navbar-toggler').click()
        let func

        addButton.style.display = 'block'

        switch (this.textContent) {
            case 'Team':
                await fetchTeamTable()
                modalAdd.innerHTML = ''
                func = showTeamAddModal
                break;
            case 'Rider':
                await fetchRiderTable()
                modalAdd.innerHTML = ''
                func = showRiderAddModal
                break;
            default:
        }

        addButton.addEventListener("click", async (e) => {
            func()
        })
    });
})

//Team 
const fetchTeamTable = async () => {
    try {
        let data = await fetchTeam();

        console.log(data)
        if (data.length == 0) {
            thead.innerHTML = ``
            tbody.innerHTML = ``
            return
        };

        thead.innerHTML = `
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Rider1</th>
            <th scope="col">Rider2</th>
            </tr>
        `

        tbody.innerHTML = ''
        data.forEach((el, index) => {
            tbody.innerHTML += `
              <tr class="${el.team_id}">
                <th scope="row">${index + 1}</th>
                <td>${el.teamName}</td>
                <td><img src="${el.motoImg}" class="flag"/></td>
                <td>${el.team_type}</td>
                <td>${el.riderName1}</td>
                <td>${el.riderName2}</td>
                <td>
                    <button type="button" class="btn btn-outline-info edit-button">Edit</button>
                    <button type="button" class="btn btn-outline-danger " data-bs-toggle="modal" data-bs-target="#delete${el.team_id}">Delete</button>
                </td>
                <div class="modal fade modal-update" id="${el.team_id}" tabindex="-1" ></div>
                <div class="modal fade modal-delete" tabindex="-1" id="delete${el.team_id}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Confirm Delete!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>You want to confirm delete this ?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger delete-button" id="${el.team_id}" data-bs-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
              </tr>
            `
        })

        const editButton = $$('.edit-button')
        const deleteButton = $$('.delete-button')

        data.forEach((el, index) => {
            editButton[index].addEventListener("click", () => {
                showTeamUpdateModal(el)
            });

            deleteButton[index].addEventListener("click", async (e) => {
                await deleteTeam({ id: el.team_id })
                await fetchTeamTable();

            })
        })

    } catch (error) {
        console.error(error)
    }
}

const showTeamUpdateModal = async (el) => {

    document.getElementById(`${el.team_id}`).innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Team</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row ">
                        <div class="row ">
                            <div class="col-md-6">
                                <label class="form-label">Title</label>
                                <input type="text" class="form-control c-name" value="${el.teamName}">
                            </div>
                             <div class="col-md-6">
                                <label class="form-label">Image</label>
                                <input type="text" class="form-control c-image" value="${el.motoImg}">
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-6">
                                <label class="form-label">Category</label>
                                <select class="form-select select-category c-category">
                                    <option value="MotoGP™">MotoGP</option>
                                    <option value="Moto2™">Moto2</option>
                                    <option value="Moto3™">Moto3</option>
                                    <option value="MotoE™">MotoE</option>
                                </select>
                            </div>
                        </div>
						<div class="row ">
                            <div class="col-md-6">
                                <label class="form-label">Rider1</label>
                                <input type="text" class="form-control c-rider1" value="${el.riderName1}">
                            </div>
                             <div class="col-md-6">
                                <label class="form-label">Rider2</label>
                                <input type="text" class="form-control c-rider2" value="${el.riderName2}">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-info save-data">Save changes</button>
                </div>
                </div>
            </div>
            `
    const options = $$('.select-category option')
    for (let i = 0; i < options.length; i++) {
        if (options[i].value == `${el.team_type}`) {
            options[i].selected = true;
        }
    }

    const modal = new bootstrap.Modal(document.getElementById(`${el.team_id}`));
    if (document.getElementById(`${el.team_id}`).classList.contains('modal-update')) modal.show()

    const saveData = $('.save-data')
    saveData.addEventListener("click", async (e) => {
        let isUpdate = await updateTeam({
            team_id: el.team_id,
            teamName: $('.c-name').value,
            backgroundName: $('.c-name').value,
            motoImg: $('.c-image').value,
            team_type: $('.select-category').value,
            riderName1: $('.c-rider1').value,
            riderName2: $('.c-rider2').value
        });

        if (isUpdate) {
            alert('Data updated successfully')
            await fetchTeamTable()
            modal.hide();
        } else {
            alert('Data updated failed')
        }
    });
}

const showTeamAddModal = async () => {
    modalAdd.innerHTML = `
        <form class="row ">
            <div class="row ">
                <div class="col-md-6">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control c-name">
                </div>
                    <div class="col-md-6">
                    <label class="form-label">Image</label>
                    <input type="text" class="form-control c-image" >
                </div>
            </div>
            <div class="row ">
                <div class="col-md-6">
                    <label class="form-label">Category</label>
                    <select class="form-select select-category c-category">
                        
                        <option value="MotoGP™">MotoGP</option>
                        <option value="Moto2™">Moto2</option>
                        <option value="Moto3™">Moto3</option>
                        <option value="MotoE™">MotoE</option>
                    </select>
                </div>
                    <div class="row ">
                            <div class="col-md-6">
                                <label class="form-label">Rider1</label>
                                <input type="text" class="form-control c-rider1" >
                            </div>
                             <div class="col-md-6">
                                <label class="form-label">Rider2</label>
                                <input type="text" class="form-control c-rider2" >
                            </div>
                        </div>
            </div>
        </form>
                `
    modalFooter.innerHTML = `<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-info add-data-team" data-bs-dismiss="modal">Save</button>`
    const addData = $('.add-data-team')
    if (addData) addData.addEventListener("click", handleAddTeam);
}

const handleAddTeam = async (e) => {
    let isAdd = await addTeam({
        teamName: $('.c-name').value,
        backgroundName: $('.c-name').value,
        motoImg: $('.c-image').value,
        team_type: $('.select-category').value,
        riderName1: $('.c-rider1').value,
        riderName2: $('.c-rider2').value
    });

    if (isAdd) {
        alert('Data added successfully')
        await fetchTeamTable()
    } else {
        alert('Data added failed')
    }
}


// rider
const fetchRiderTable = async (category) => {
    try {
        let data

        data = await fetchRider();
        if (data.length == 0) {
            thead.innerHTML = ``
            tbody.innerHTML = ``
            return
        };

        console.log(data)

        thead.innerHTML = `
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Hashtag</th>
            <th scope="col">Category</th>
            <th scope="col">Team</th>
            <th scope="col">Country</th>
            </tr>
        `

        tbody.innerHTML = ''
        data.forEach((el, index) => {
            tbody.innerHTML += `
              <tr class="${el.rider_id}">
                <th scope="row">${index + 1}</th>
                <td>${el.firstName} ${el.lastName}</td>
                <td><img src="${el.riderImg}" class="flag"/></td>
                <td>${el.riderHashtag}</td>
                <td>${el.rider_type}</td>
                <td>${el.teamName}</td>
                <td>${el.countryName}</td>
                <td>
                    <button type="button" class="btn btn-outline-info edit-button">Edit</button>
                    <button type="button" class="btn btn-outline-danger " data-bs-toggle="modal" data-bs-target="#delete${el.rider_id}">Delete</button>
                </td>
                <div class="modal fade modal-update" id="${el.rider_id}" tabindex="-1" ></div>
                <div class="modal fade modal-delete" tabindex="-1" id="delete${el.rider_id}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Confirm Delete!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>You want to confirm delete this ?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger delete-button" id="${el.rider_id}" data-bs-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
              </tr>
            `
        })

        const editButton = $$('.edit-button')
        const deleteButton = $$('.delete-button')

        data.forEach((el, index) => {
            editButton[index].addEventListener("click", () => {
                showRiderUpdateModal(el)
            });

            deleteButton[index].addEventListener("click", async (e) => {
                await deleteRider(el.rider_id)
                await fetchRiderTable();
            })
        })

    } catch (error) {
        console.log(error)
    }
}

const showRiderUpdateModal = async (el) => {

    document.getElementById(`${el.rider_id}`).innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Rider</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row ">
            <div class="row ">
                <div class="col-md-4">
                    <label class="form-label">Frist Name</label>
                    <input type="text" class="form-control c-firstname" value=${el.firstName}>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control c-lastname" value=${el.lastName}>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Hashtag</label>
                    <input type="text" class="form-control c-hashtag" value=${el.riderHashtag}>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="form-label">Category</label>
                    <select class="form-select select-category c-category">
                        <option value="MotoGP™">MotoGP™</option>
                        <option value="Moto2™">Moto2™</option>
                        <option value="Moto3™">Moto3™</option>
                        <option value="MotoE™">MotoE™</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Team</label>
                    <select class="form-select select-team c-team">
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <label class="form-label">Image</label>
                    <input type="text" class="form-control c-image" value=${el.riderImg}>
                </div>
                 <div class="col-md-4">
                    <label class="form-label">Point</label>
                    <input type="text" class="form-control c-point" value="0" disabled value=${el.point}>
                </div>
            </div>
        </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-info save-data">Save changes</button>
                </div>
                </div>
            </div>
           
            `


    const selectTeam = $$('.select-team');
    let dataTeam = await fetchTeam();
    dataTeam.forEach((e, index) => {
        selectTeam.forEach(s => {
            s.innerHTML += `
                <option value="${e.team_id}">${e.teamName}</option>
            `
        })
    })


    const optionCategory = $$('.select-category option')
    for (let i = 0; i < optionCategory.length; i++) {
        if (optionCategory[i].value == `${el.rider_type}`) {
            optionCategory[i].selected = true;
        }
    }

    const optionTeams = $$('.select-team option')
    for (let i = 0; i < optionTeams.length; i++) {
        if (optionTeams[i].value == `${el.team_id}`) {
            optionTeams[i].selected = true;
        }
    }

    const modal = new bootstrap.Modal(document.getElementById(`${el.rider_id}`));
    if (document.getElementById(`${el.rider_id}`).classList.contains('modal-update')) modal.show()

    const saveData = $('.save-data')
    saveData.addEventListener("click", async (e) => {
        let isUpdate = await updateRider({
            rider_id: el.rider_id,
            firstname: $('.c-firstname').value,
            lastname: $('.c-lastname').value,
            riderHashtag: $('.c-hashtag').value,
            rider_type: $('.c-category').value,
            team_id: $('.c-team').value,
            riderImg: $('.c-image').value,
        });

        if (isUpdate) {
            alert('Data updated successfully')
            await fetchRiderTable()
            modal.hide();
        } else {
            alert('Data updated failed')
        }
    });
}

const showRiderAddModal = async () => {
    modalAdd.innerHTML = `
        <form class="row ">
            <div class="col-md-4">
                    <label class="form-label">Frist Name</label>
                    <input type="text" class="form-control c-firstname" >
                </div>
                <div class="col-md-4">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control c-lastname" >
                </div>
                <div class="col-md-4">
                    <label class="form-label">Hashtag</label>
                    <input type="text" class="form-control c-hashtag">
                </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="form-label">Category</label>
                    <select class="form-select select-category c-category">
                        <option value="MotoGP">MotoGP</option>
                        <option value="Moto2">Moto2</option>
                        <option value="Moto3">Moto3</option>
                        <option value="MotoE">MotoE</option>
                    </select>
                </div>
                 <div class="col-md-4">
                    <label class="form-label">Team</label>
                    <select class="form-select select-team c-team">
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <label class="form-label">Image</label>
                    <input type="text" class="form-control c-image" >
                </div>
                 <div class="col-md-4">
                    <label class="form-label">Point</label>
                    <input type="text" class="form-control c-point" value="0" disabled >
                </div>
            </div>
        </form>
               

            `
    modalFooter.innerHTML = `<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-info add-data-rider" data-bs-dismiss="modal">Save</button>`



    const selectTeam = $$('.select-team');
    let dataTeam = await fetchTeam();
    dataTeam.forEach((e, index) => {
        selectTeam.forEach(s => {
            s.innerHTML += `
                <option value="${e.team_id}">${e.teamName}</option>
            `
        })
    })

    const addData = $('.add-data-rider')
    if (addData) addData.addEventListener("click", handleAddRider);
}

const handleAddRider = async (e) => {
    let isAdd = await addRider({
        firstname: $('.c-firstname').value,
        lastname: $('.c-lastname').value,
        riderHashtag: $('.c-hashtag').value,
        rider_type: $('.c-category').value,
        team_id: $('.c-team').value,
        riderImg: $('.c-image').value,
    });

    if (isAdd) {
        alert('Data added successfully')
        await fetchRiderTable()
        // modal.hide();
    } else {
        alert('Data added failed')
    }
}

// start 
await fetchTeamTable()
modalAdd.innerHTML = ''
addButton.addEventListener("click", async (e) => {
    showTeamAddModal()
})