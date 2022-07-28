
import * as constants from "../componets/constants"
import apiActions from "../api/api-actions"
import artist from "../componets/artist"
import album from "../componets/album"

export default {
    setupMain
}


function setupMain(){
    apiActions.getRequest(constants.albumURL, album.displayAlbumIndex)
}
