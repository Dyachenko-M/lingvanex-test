const firstCard = document.getElementById('first-card')
const secondCard = document.getElementById('second-card')
const thirdCard = document.getElementById('third-card')

const travelBtn = document.getElementById('travel-btn')
const organizationBtn = document.getElementById('organization-btn')
const employeesBtn = document.getElementById('employees-btn')

travelBtn.onclick = () => {
    firstCard.classList.add('product-card__active')
    secondCard.classList.remove('product-card__active')
    thirdCard.classList.remove('product-card__active')

    secondCard.classList.add('product-card__scale')
    thirdCard.classList.add('product-card__second-scale')
    firstCard.classList.remove('product-card__scale','product-card__second-scale')

    travelBtn.classList.add('button-active')
    organizationBtn.classList.remove('button-active')
    employeesBtn.classList.remove('button-active')
}

organizationBtn.onclick = () => {
    secondCard.classList.add('product-card__active')
    firstCard.classList.remove('product-card__active')
    thirdCard.classList.remove('product-card__active')

    firstCard.classList.add('product-card__scale')
    thirdCard.classList.add('product-card__scale')
    secondCard.classList.remove('product-card__scale')

    travelBtn.classList.remove('button-active')
    organizationBtn.classList.add('button-active')
    employeesBtn.classList.remove('button-active')
}

employeesBtn.onclick = () => {
    thirdCard.classList.add('product-card__active')
    firstCard.classList.remove('product-card__active')
    secondCard.classList.remove('product-card__active')

    firstCard.classList.add('product-card__second-scale')
    secondCard.classList.add('product-card__scale')
    thirdCard.classList.remove('product-card__scale', 'product-card__second-scale')

    travelBtn.classList.remove('button-active')
    organizationBtn.classList.remove('button-active')
    employeesBtn.classList.add('button-active')
}

