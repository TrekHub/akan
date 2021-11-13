const btnSubmit = document.getElementById('submit')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')


btnSubmit.addEventListener('click', () => {




    maleArr = [' ', 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    femaleArr = [' ', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    actualDay = parseInt(day.value)
    actualMonth = parseInt(month.value)
    fullYear = year.value
    yearArr = fullYear.match(/.{1,2}/g);
    century = parseInt(yearArr[0]);
    actualYear = parseInt(yearArr[1]);
    const male = true;
    weekDay = parseInt((((century / 4) - 2 * century - 1) + ((5 * actualYear / 4)) + ((26 * (actualMonth + 1) / 10)) + actualDay) % 7)



    if (male) {
        console.log(maleArr[weekDay]);
    } else {
        console.log(femaleArr[weekDay]);
    }

    console.log(`My BirthDay is ${day.value}-${month.value}-${year.value}`);

})