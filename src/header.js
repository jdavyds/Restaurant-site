import Menu from "./menu"
import Contact from "./contact"
import Reservation from "./reservation"
import Home from "./home"


export function Header() {
        
        const content = document.getElementById("content")
        const header = document.createElement("header")
        
        const left = document.createElement("nav")
        
        
        const welcome = document.createElement("a")
        welcome.textContent = "Welcome"
        welcome.setAttribute("class", "active")
        
        const menu = document.createElement("a")
        menu.textContent = "Menu"
        menu.addEventListener("click", () => {
            menu.setAttribute("class", "active")
            reservation.removeAttribute("class", "active")
            contact.removeAttribute("class", "active")
            welcome.removeAttribute("class", "active")
            
        })
        
        const logo = document.createElement("h3")
        logo.textContent = "JDAVYDZ"
        
        const right = document.createElement("nav")
        
        const reservation = document.createElement("a")
        reservation.textContent = "Reservation"
        reservation.addEventListener("click", () => {
            reservation.setAttribute("class", "active")
            menu.removeAttribute("class", "active")
            contact.removeAttribute("class", "active")
            welcome.removeAttribute("class", "active")
            
        })
        const contact = document.createElement("a")
        contact.textContent = "Contact Us"
        contact.addEventListener("click", () => {
            contact.setAttribute("class", "active")
            menu.removeAttribute("class", "active")
            reservation.removeAttribute("class", "active")
            welcome.removeAttribute("class", "active")

        })
        
        left.append(welcome, menu)
        right.append(reservation, contact)
        header.append(left, logo, right)
        
        content.append(header)
    }

