// TODO: add code here

let windowLoaded = window.addEventListener("load", function () {
    //this.console.log("Window loaded");
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json[0].firstName)
            const div = document.getElementById("container");
            for(let item in json){
                console.log(item)
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[item].firstName} ${json[item].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[item].hoursInSpace}</li>
                                    <li>Active: ${json[item].active}</li>
                                    <li>Skills: ${json[item].skills}</li>
                                </ul>
                        </div>
                        <img class="avatar" src="${json[item].picture}">
                    </div>
                `;
            };

            console.log(json);
        });
        //console.log(response);
    });
})