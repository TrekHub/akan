const btnSubmit = document.getElementById('submit')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const gender = document.getElementById('gender')
const akan = document.getElementById('body')
const modalHeader = document.getElementById('modal-header')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')



btnSubmit.addEventListener('click', (e) => {

    e.preventDefault()
    maleArr = [ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    femaleArr = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    arrDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    actualDay = parseInt(day.value)
    actualMonth = parseInt(month.value)
    fullYear = year.value
    generateName()
})





function generateName() {
    const birthDate = `${month.value}-${day.value}-${year.value}`
    const weekDay = new Date(birthDate).getDay()
    

    if (gender.value == 'male') {
        akanName = maleArr[weekDay]
    } else {
        akanName = femaleArr[weekDay]
    }

    modalHeader.innerHTML = `<h5 class="modal-title">${fname.value}  ${lname.value}</h5> `
    akan.innerHTML = `<p class="fs-4">You were born on <strong class="text-success">${arrDays[weekDay]}</strong>.  Your Akan Name is <strong class="text-success">${akanName}</strong></p>`

}