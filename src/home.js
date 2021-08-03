function Home() {

    const intro = document.createElement("p")
    intro.textContent = "Dishes MAde From Heavens Kitchen"
    const home = document.createElement("div")

    home.setAttribute("class", "home")
    home.append(intro)
}
export default Home;