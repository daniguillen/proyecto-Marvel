import { TYPE } from "../accion/Favoritos";



export function crudReducer (state, action) {

    switch (action.type) {
        case TYPE.ADD_FAVORITO:{

        }
        case TYPE.DELETE_FAVORITO:{
            
        }
        case TYPE.DELETE_ALL_FAVORITO:{
            
        }  
          
    
        default:
            return state;
    }


}