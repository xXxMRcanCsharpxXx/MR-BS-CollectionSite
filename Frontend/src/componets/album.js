import apiActions from "../api/api-actions";
import * as constants from "../componets/constants";
import artist from "../componets/artist";

export default {
    displayAlbumIndex,
}

function displayAlbumIndex(album) {
    constants.mainContent.innerHTML =`
    <button id="create"> Create New Album </button>
    <section id="albumContainer">
        ${album.map((al) => {
            return `
                <div class="albumCard">
                    <h2 id="albumTitle">
                        ${al.title}
                    </h2>
                    <h3 id="recordLabel">
                        ${al.recordLabel}
                    </h3>
                    <button class="deleteButton" id="delete-${al.id}"> Delete </button>
                    <button class="editButton" id="edit-${al.id}"> Edit </button>
                    <button class="ArtistButton" id="gp-${al.id}"> Add Artist </button>
                </div>
            `
        }).join("")}
   </section> `;
}

function setupAlbumIndex(){
    // grab create
    const create = document.getElementById("create");
    //create funtionality
    create.addEventListener("click", displayAlbumIndex);
    // grab delete
    const deleteBtns = Array.from(document.getElementsByClassName("deleteButton"));
    //delete functionality
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("_")[1];
            apiActions.deleteRequest(constants.albumURL + id, displayAlbumIndex);
        });
    });

    // grab edit
    const editBtns = Array.from(document.getElementsByClassName("editButton"));
    // edit functionality
    editBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("_")[1];
            apiActions.getRequest(constants.albumURL + id, displayAlbumEdit);
        });
    });

    // grab ar buttons
    const artistBtns = Array.from(document.getElementsByClassName("artistButton"));
    // add ar button functionality
    artistBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("_")[1];
            apiActions.getRequest(constants.artistURL, (artist) => {
                console.log(artist);
                artist.displayArtistCreate(artist, id);
            })
        });
    });

}

function displayAlbumCreate() {
    constants.mainContent.innerHTML = `
    <button id="backbutton". Back </button>
    <h1>
        Create
    </h1>
    <section id="createForm">
        <h4>
            Title:
        </h4>
        <input type="text" id="alTitle">
        <h4>
            Record Label:
        </h4>
        <input type="text" id="alRecordLabel">
    </section>
    `;
setupAlbumCreat();
}

function setupAlbumCreat(){
    // grab back button
    let backBtn = document.getElementById("backButton");
    //back button functionality
    backBtn.addEventListener("click", () => {
        apiActions.getRequest(constants.albumURL, displayAlbumIndex);
    })

    let submitBtn = document.getElementById("submitButton");
    submitBtn.addEventListener("click", () => {
        let newAl = {
            Title: document.getElementById("alTitle").value,
            recordLabel: document.getElementById("alRecordLabel").value,
            Artist: []
        }
        console.log(newBg);
        apiActions.postRequest(constants.albumURL, displayAlbumIndex, newAl);
    })
}

function displayAlbumEdit(album) {
    constants.mainContent.innerHTML = `
    <button id="backbutton". Back </button>
    <h1>
        Create
    </h1>
    <section id="createForm">
        <h4>
            Title:
        </h4>
        <input type="text" id="alTitle">
        <h4>
            Record Label:
        </h4>
        <input type="text" id="alRecordLabel">
    </section>
    `;
        document.getElementById("alTitle").value = album.Title;
    setupAlbumEdit();
}

function setupAlbumEdit(){
    // grab back button
    let backBtn = document.getElementById("backButton");
    //back button functionality
    backBtn.addEventListener("click", () => {
        apiActions.getRequest(constants.albumURL, displayAlbumIndex);
    });

    let submitBtn = document.getElementById("submitButton");
    submitBtn.addEventListener("click", () => {
        let editedAl = {
            Title: document.getElementById("alTitle").value,
            recordLabel: document.getElementById("alRecordLabel").value,
            Artist: []
        }
        console.log(editedAl);
        apiActions.putRequest(constants.albumURL, displayAlbumIndex, editedAl, document.getElementById("alId").value);
    });
}