const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    const files = document.getElementById("files");
    console.log(files.value);
    const formData = new FormData();                // create new FormData obj

    for(let i=0; i<files.files.length; i++){        // append all files onto formData obj
        formData.append("image", files.files[i]);
    }

    fetch("http://localhost:8000/uploads", {
        method: "POST",
        body: formData

    }).then((res)=>{
        console.log(res);
    })
    .catch((err)=> console.log("Error: ", err));
    
}
