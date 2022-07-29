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
                    <h3 id="artist">
                        ${al.artist.name}
                    </h3>
                    <button class="deleteButton" id="delete-${al.id}">${al.id} Delete </button>
                    <button class="editButton" id="edit-${al.id}"> Edit </button>
                    <button class="artistButton" id="gp-${al.id}"> Add Artist </button>
                </div>
            `
        }).join("")}
   </section> `;
   setupAlbumIndex();
}

function setupAlbumIndex(){
    
    // grab create
    const create = document.getElementById("create");
    //create funtionality
    create.addEventListener("click", displayAlbumCreate);
    // grab delete
    const deleteBtns = Array.from(document.getElementsByClassName("deleteButton"));
    //delete functionality
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("-")[1];
            apiActions.deleteRequest(constants.albumURL + id, displayAlbumIndex);
        });
    });

    // grab edit
    const editBtns = Array.from(document.getElementsByClassName("editButton"));
    // edit functionality
    editBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("-")[1];
            apiActions.getRequest(constants.albumURL + id, displayAlbumEdit);
        });
    });

    // grab ar buttons
    const artistBtns = Array.from(document.getElementsByClassName("artistButton"));
    // add ar button functionality
    artistBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let id = btn.id.split("-")[1];
            apiActions.getRequest(constants.artistURL, (artist) => {
                console.log(artist);
                artist.displayArtistCreate(artist, id);
            })
        });
    });

}

function displayAlbumCreate() {
constants.mainContent.innerHTML = `
    <button id="backButton"> Back </button>
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
        <h4>
            Artist:
        </h4>
        <input type="text" id="alArtist">
        <button id="submitButton">submit</button>
    </section>
    `;
setupAlbumCreate();
}

function setupAlbumCreate(){
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
            RecordLabel: document.getElementById("alRecordLabel").value,
            // Artist: document.getElementById("alArtist").value,
            ArtistId: 1
        }
        console.log(newAl);
        apiActions.postRequest(constants.albumURL, displayAlbumIndex, newAl);
    })
}

function displayAlbumEdit(album) {
    constants.mainContent.innerHTML = `
    <button id="backButton"> Back </button>
    <h1>
        Edit
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
        <h4>
            Artist:
        </h4>
        <input type="text" id="alArtist">
        <button ="submitButton">Submit</button>
    </section>
    `;
        document.getElementById("alTitle").value = album.Title;
        document.getElementById("alRecordLabel").value = album.RecordLabel;
        document.getElementById("alArtist").value = album.Artist;
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
            RecordLabel: document.getElementById("alRecordLabel").value,
            Artist: []
        }
        console.log(editedAl);
        apiActions.putRequest(constants.albumURL, displayAlbumIndex, editedAl, document.getElementById("alId").value);
    });
}