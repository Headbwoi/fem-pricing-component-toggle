const main = document.getElementById("mainEl"),
    checkBtn = document.getElementById("check"),
    para1 = document.getElementById("price-one"),
    para2 = document.getElementById("price-two"),
    para3 =document.getElementById("price-three")

    checkBtn.addEventListener("click", () => {
        if(!main.classList.contains("active")){
            main.classList.add("active")
            para1.innerHTML = `&dollar;199.99`
            para2.innerHTML = `&dollar;249.99`
            para3.innerHTML = `&dollar;399.99`
        }else{
            main.classList.remove("active")
            para1.innerHTML = `&dollar;19.99`
            para2.innerHTML = `&dollar;24.99`
            para3.innerHTML = `&dollar;39.99`
        }
    })
