let dataProject = []

function addProject(event) {
    event.preventDefault ();
    
    let name = document.getElementById("input-name-project").value;
    let startDate = document.getElementById("input-start-date").value;
    let endDate = document.getElementById("input-end-date").value;
    let description = document.getElementById("input-description").value;
    let techno = document.getElementsByClassName("techno").value;
    let image = document.getElementById("input-image").value;

    image = URL.createObjectURL(image[0]);

    let project = {
        name,
        startDate,
        endDate,
        description,
        techno,
        image,
    }

    dataProject.push(project);
    console.log(dataProject);

    renderProject();
}

function renderProject() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < dataProject.length; index++) {
        console.log(dataProject[index]);

        document.getElementById("contents").innerHTML += `
        <div class="list-card">
            <img src="${dataProject[index].image}" alt="">
            <a class="title-card" href=""> ${dataProject[index].name}</a>
            <div class="date">
                ${dataProject[index].startDate} - ${dataProject[index].endDate}
            </div>
            <p>
            ${dataProject[index].description}
            </p>
            <div class="logo-techno">
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-vuejs"></i>
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="btn-action">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-delete">Delete Post</button>
            </div>
        </div>`

    }
}