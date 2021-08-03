function Reservation() {
    const reservation = document.createElement("div")
    
    const section = document.createElement("section")
    const h1 = document.createElement("h1")
    h1.textContent = "RESERVATIONS"

    const para = document.createElement("p")
    para.textContent = "We accept a limited number of reservations up to one a month in advance for parties of up to ten guests"

    section.append(h1, para)

    reservation.append(section)
    reservation.setAttribute("class", "reservation")
}

export default Reservation;