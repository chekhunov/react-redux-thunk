//дефолтное состояние  state
const defaultState = {
    cash: 0,
  }

//получить состояние getState
//изменить состояние dispatch и подписаться на изменение состояний

//принимает состояние и action - это js обьект у 
//которого должно быть поле тайп по которому мы будем определять
//как состояние будет изменяться и также в action можно передать 
//любое количество данных чаще всего по payload
export const cashReducer = (state = defaultState, action) => {
    //будем отслеживать тип проброшенного action
    // и по дефолту возвращаем состояние
      switch(action.type) {
        case "ADD_CASH":
          //тут мы должны получиь текущее состояние 
          //денег на счету и добавить то что прилетело в action 
          //и все это прибавить к состоянию старому
          return {...state, cash: state.cash + action.payload}
          
        case "GET_CASH":
          return {...state, cash: state.cash - action.payload}
        default: 
        return state
      }
  }