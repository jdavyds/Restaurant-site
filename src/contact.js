function Contact() {
    const contact = document.createElement("div")
    const section = document.createElement("section")

    const h1 = document.createElement("h1")
    h1.textContent = "CONTACT US"
    const p1 = document.createElement("li")
    p1.textContent = "Twitter: @jdavydz"
    const p2 = document.createElement("li")
    p2.textContent = "Instagram: @jdavyds"
    const p3 = document.createElement("li")
    p3.textContent = "LinkedIn: @jdavids"
    const p4 = document.createElement("li")
    p4.textContent = "Mail: slimjdavids@gmail.com"
    const p5 = document.createElement("p")
    p5.textContent = "Address: C close, 311 road off 3rd Avenue, Festac Town"

    const h3 = document.createElement("h3")
    h3.textContent = "Walk In and Experience Heaven"


    section.append(h1, p1, p2, p3, p4, p5, h3)


    contact.append(section)
    contact.setAttribute("class", "contact")
}
export default Contact;