import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import thunk from 'redux-thunk'

//и после устанавливаем и скачиваем расширение для хрома redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'

//он параметром принимает обьект 
// мы его создали для обьединения редюсеров
const rootReducer = combineReducers ({
    //так будет называться кешь редюсер
    cash: cashReducer,
    customers: customerReducer
})

//передаем rootReducer параметром в стор
//applyMiddleware подключаем thunk
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))