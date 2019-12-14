import tipo from '../actions/tipo';

const initialState = {
    test:"hola Mundo",
    fecha: new Date()
}

export default (state=initialState, action) => {
    // Retorna un estado
    // console.log('Testreducer');
    // console.log(state)
    // console.log(initialState)
    // console.log(action);
    switch(action.type) {
        case tipo.UPDATE_FECHA:
            return Object.assign({},state,{
                fecha: action.payload
            });
            // break;
        default:
            return state;
            // break;
    }
}