
import * as constants from "../componets/constants"
import apiActions from "../api/api-actions"
import artist from "../componets/artist"

export default {
    setupMain
}


function setupMain(){
    apiActions.getRequest(constants.artistURL, artist.displayArtistIndex)
}
