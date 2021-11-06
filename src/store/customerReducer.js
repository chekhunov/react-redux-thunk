
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

const defaultState = {
    customers: []
}

//редюсер получения списка клиенто ви добавления
export const customerReducer = (state = defaultState, action) => {
    //будем отслеживать тип проброшенного action
    // и по дефолту возвращаем состояние
      switch(action.type) {
        case ADD_MANY_CUSTOMERS:
          //сначала разварачиваем массив из стейта потом разварачиваем массив payload который прилетел 
          return {...state, customers: [...state.customers, ...action.payload]}

        case ADD_CUSTOMER:
          //тут мы должны получиь текущее состояние 
          //денег на счету и добавить то что прилетело в action 
          //и все это прибавить к состоянию старому
          return {...state, customers: [...state.customers, action.payload]} //через action будем передавать обьект и плюсовать к старому состоянию
          
        case REMOVE_CUSTOMER:
          return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default: 
            return state
      }
  }

  //создадим action creator который будет возвращать обьект
  // данном случае нам не надо думать о создании обьекта о передачи в него типа 
  //просто вызываем функцию
  export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
  export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
  export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});