import apiActions from "../api/api-actions";
import * as constants from "../componets/constants";
import album from "../componets/album";

export default {
    displayArtistIndex,
}

function displayArtistIndex(artist) {
    constants.mainContent.innerHTML =`
    <button id="create"> Create New Artist </button>
    <section id="artistContainer">
        ${artist.map((ar) => {
            return `
                <div class="artistCard">
                    <h2 id="artistName">
                        ${ar.name}
                    </h2>
                    <h3 id="album">
                        ${ar.album}
                    </h3>
                    <h3 id="age">
                        ${ar.age}
                    </h3>
                    <h3 id="recordLabel">
                        ${ar.recordLabel}
                    </h3>
                    <h3 id="hometown">
                        ${ar.hometown}
                    </h3>
                    <button class="deleteButton" id="delete-${ar.id}"> Delete </button>
                    <button class="editButton" id="edit-${ar.id}"> Edit </button>
                </div>
            `
        }).join("")}
   </section> `;
}

function setupArtistIndex(){
    // grab create
    const create = document.getElementById("create");
    //create funtionality
    create.addEventListener("click", displayArtistCreate);
    // grab delete
    const deleteBtns = Array.from(document.getElementsByClassName("deleteButton"));
    //delete functionality
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("_")[1];
            apiActions.deleteRequest(constants.artistURL + id, displayArtistIndex);
        });
    });

    // grab edit
    const editBtns = Array.from(document.getElementsByClassName("editButton"));
    // edit functionality
    editBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("_")[1];
            apiActions.getRequest(constants.artistURL + id, displayArtistEdit);
        });
    });
}

function displayArtistCreate() {
    constants.mainContent.innerHTML = `
    <button id="backbutton". Back </button>
    <h1>
        Create
    </h1>
    <section id="createForm">
    <h2 id="artistName">
        Name:
    </h2>
    <h3 id="album">
        Album:
    </h3>
    <h3 id="age">
        Age:
    </h3>
    <h3 id="recordLabel">
        Record Label:
    </h3>
    <h3 id="hometown">
        Hometown:
    </h3>
    </section>
    `;
setupArtistCreat();
}

function setupArtistCreat(){
    // grab back button
    let backBtn = document.getElementById("backButton");
    //back button functionality
    backBtn.addEventListener("click", () => {
        apiActions.getRequest(constants.artistURL, displayArtistIndex);
    })

    let submitBtn = document.getElementById("submitButton");
    submitBtn.addEventListener("click", () => {
        let newAr = {
            Name: document.getElementById("arName").value,
            Album: [],
            Age: document.getElementById("arAge").value,
            RecordLabel: document.getElementById("arRecordLabel").value,
            Hometown: document.getElementById("arHometown").value,
        }
        console.log(newAr);
        apiActions.postRequest(constants.artistURL, displayArtistIndex, newAr);
    })
}

function displayArtistEdit(artist) {
    constants.mainContent.innerHTML = `
    <button id="backbutton". Back </button>
    <h1>
        Create
    </h1>
    <section id="createForm">
    <h2 id="artistName">
        Name:
    </h2>
    <h3 id="album">
        Album:
    </h3>
    <h3 id="age">
        Age:
    </h3>
    <h3 id="recordLabel">
        Record Label:
    </h3>
    <h3 id="hometown">
        Hometown:
    </h3>
    </section>
    `;
        document.getElementById("arName").value = artist.Name;
    setupAlbumEdit();
}

function setupAlbumEdit(){
    // grab back button
    let backBtn = document.getElementById("backButton");
    //back button functionality
    backBtn.addEventListener("click", () => {
        apiActions.getRequest(constants.artistURL, displayArtistIndex);
    });

    let submitBtn = document.getElementById("submitButton");
    submitBtn.addEventListener("click", () => {
        let editedAr = {
            Name: document.getElementById("arName").value,
            Album: [],
            Age: document.getElementById("arAge").value,
            RecordLabel: document.getElementById("arRecordLabel").value,
            Hometown: document.getElementById("arHometown").value,
        }
        console.log(editedAr);
        apiActions.putRequest(constants.artistURL, displayArtistIndex, editedAr, document.getElementById("arId").value);
    });
}