const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const two = document.getElementById('two');

const sub = document.getElementById('sub');
const lday = document.getElementById('lday')
const lmonth = document.getElementById('lmonth')
const lyear = document.getElementById('lyear')
const date = new Date();
let dayy = date.getDate();
let yearr = date.getFullYear() ;
let monthh = date.getMonth() + 1;

// console.log(dayy);
// console.log(yearr);
console.log(monthh);
year.max = yearr;
const daysChange = () => {
    const months = parseInt(document.getElementById('month').value);
    const days = parseInt(document.getElementById('day').value);
    const one = document.getElementById('one');

    let d = 31;

    if (months === 4 || months === 6 || months === 9 || months === 11) {
        d = 30;
    } else if (months === 2) {
        d = 28;
    }
    // let go = false;
    // switch (months) {
    //     case 4:
    //     case 6:
    //     case 9:
    //     case 11:
    //         if (days > 30) {
    //             alert('go');
               
    //         }
    //         break;
    //     default:
    //         if (days > d) {
    //             alert('back');
    //         }
    //         break;
    // }
 
        if (days > d || days <= 0) {
            one.innerText = 'must be a valid date';
            lday.classList.toggle('active')

        } else {
            one.innerText = '';
            lday.classList.remove('active')
        }
    
}
day.addEventListener('change', daysChange)
// day.addEventListener('blur', daysChange )
const monthChange = () => {
    const months = document.getElementById('month').value;
    const two = document.getElementById('two');
    if (months > 12 || months <= 0) {
        two.innerText = 'must be a valid month';
        lmonth.classList.toggle('active')

    } else {
        two.innerText = '';
        lmonth.classList.remove('active')
   }
}
month.addEventListener('change', monthChange)
const yearChange = () => {
    const years = document.getElementById('year').value;
    const three = document.getElementById('three');
    
   

   
    if (years > yearr || years <= 0) {
        three.innerText = 'must be a valid year';
        lyear.classList.toggle('active')

    } else {
        three.innerText = '';
        lyear.classList.remove('active')
   }
}
year.addEventListener('change', yearChange)

const subHandler = () => {
    const months = parseInt(document.getElementById('month').value);
    const days = parseInt(document.getElementById('day').value);
    const years = document.getElementById('year').value;
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const navOne = document.getElementById('navone');
    const navTwo = document.getElementById('navtwo');
    const navThree = document.getElementById('navthree');
    let d = 31;
    let a = false;
    let b = false;
    let c = false;
    const ddd = days;

    if (months === 4 || months === 6 || months === 9 || months === 11) {
        d = 30;
        if (days > d || days <= 0) {
            one.innerText = 'must be a valid date';
            lday.classList.toggle('active');
            a = false;


        } else {
            one.innerText = '';
            lday.classList.remove('active')
            a = true;

        }
    } else if (months === 2) {
        d = 28;
        if (days > d || days <= 0) {
            one.innerText = 'must be a valid date';
            lday.classList.toggle('active');
            a = false;


        } else {
            one.innerText = '';
            lday.classList.remove('active')
            a = true;

        }
    } else {
        d = 31;
        if (days > d || days <= 0) {
            one.innerText = 'must be a valid date';
            lday.classList.toggle('active');
            a = false;


        } else {
            one.innerText = '';
            lday.classList.remove('active')
            a = true;

        }
    }
  
    if (months > 12 || months <= 0) {
        two.innerText = 'must be a valid month';
        lmonth.classList.toggle('active');
        b = false
    } else {
        two.innerText = '';
        b = true
        lmonth.classList.remove('active')
    }
    if (years > yearr || years <= 0) {
        three.innerText = 'must be a valid year';
        lyear.classList.toggle('active');
       c = false

    } else {
        three.innerText = '';
        c = true
        lyear.classList.remove('active')
    }
   
    const dd = 12 - months;
    const mm = monthh + dd;
    const res = yearr - years;
    const res2 = monthh - months;
    console.log(res2);
    if (a && b && c) {
        if (months > monthh) {
            
            navOne.innerText = res - 1;
            if (days < dayy) {
                navThree.innerText = dayy - days;
                navTwo.innerText = mm;
            } else if (days === dayy) {
                navThree.innerText = 0;
                navTwo.innerText = mm;
            }
            else {
                const fin = d - days;
                navTwo.innerText = mm - 1;

                navThree.innerText = fin + dayy
            }
            
       
        } else if (months < monthh) {
           
            
            navOne.innerText = res;
            if (days < dayy) {
                navThree.innerText = dayy - days;
                navTwo.innerText = monthh - months ;
            } else if (days === dayy) {
                navThree.innerText = 0;
                navTwo.innerText = monthh - months ;
            }
            else {
                const fin = d - days;
                navTwo.innerText = monthh - months - 1;
                navThree.innerText = fin + dayy
            }


           
        } else {
            navTwo.innerText = months - monthh;
            navOne.innerText = res;
            if (days < dayy) {
                navThree.innerText = dayy - days;
            } else if (days === dayy) {
                navThree.innerText = 0
            }
            else {
                const fin = d - days;

                navThree.innerText = fin + dayy
            }
        }
    }
    // if (a && b && c) {
    //     if (days < dayy) {
    //         navThree.innerText = dayy - days;
    //     } else if (days === dayy) {
    //         navThree.innerText = 0
    //     }
    //     else {
    //         const fin = d - days;
        
    //         navThree.innerText = fin + dayy + 1
    //     }
    // }
}

sub.addEventListener('click', subHandler)