let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector(".searchbutton");

btn.addEventListener("click",async () => {
    let state = document.querySelector("input").value;
    let colArr = await getColleges(state);

    let list = document.querySelector(".list");
    list.innerText = "";
    for (col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
    // show(colArr);
})

// function show(colArr){
    
// }

async function getColleges(state){
    try {
        let res = await axios.get(url + state);
        return res.data;
    } catch (error) {
        console.log("error is - ",error);
        return []
    }
}