let newImages = document.querySelector("#container");
let count = 17;

function addNewImages() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        for (let i = 0; i <= 4; i++) {
            if (count <= 65) {
                let section = document.createElement("section")
                let a = document.createElement("a")
                a.href = "./assets/img/bg" + count + ".jpg"
                let img = document.createElement("img")
                img.src = "./assets/img/bg" + count + ".jpg"
                a.appendChild(img)
                section.appendChild(a)
                newImages.appendChild(section)
                count++;
            }
        }
    }
}

window.addEventListener("scroll", addNewImages);