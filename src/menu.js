function Menu() {
    const menu = document.createElement("div")
    const s1 = document.createElement("section")
    
    const h1 = document.createElement("h4")
    h1.textContent = "BreakFast Menu"
    const a1 = document.createElement("li")
    a1.textContent = "Toast Bread & Tea/Coffee"
    const a2 = document.createElement("li")
    a2.textContent = "Toast Bread & Omelette "
    const a3 = document.createElement("li")
    a3.textContent = "Pap & Moi Moi/ Bean Cake"

    s1.append(h1, a1, a2, a3)

    const s2 = document.createElement("section")
    
    const h2 = document.createElement("h4")
    h2.textContent = "Lunch Menu"
    const b1 = document.createElement("li")
    b1.textContent = "Eba & Egusi"
    const b2 = document.createElement("li")
    b2.textContent = "Fufu & Egusi"
    const b3 = document.createElement("li")
    b3.textContent = "Amala & Ewedu"

    s2.append(h2, b1, b2, b3)

    const s3 = document.createElement("section")
    
    const h3 = document.createElement("h4")
    h3.textContent = "Dinner Menu"
    const c1 = document.createElement("li")
    c1.textContent = "Jollof Rice, Salad & Chicken"
    const c2 = document.createElement("li")
    c2.textContent = "Spaghetti"
    const c3 = document.createElement("li")
    c3.textContent = "Spaghetti"

    s3.append(h3, c1, c2, c3)

    menu.append(s1, s2, s3)
    menu.setAttribute("class", "menu")
}

export default Menu;