import React from 'react'
import {useDispatch, useSelector }from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncActions/customers'

function App() {
//изменяем состояние с помощью useDispatch
const dispatch = useDispatch()

//для получения используем useSelector и из этого
//состояния получаем нужную переменную
const cash = useSelector(state => state.cash.cash)
const customers= useSelector(state => state.customers.customers)

const addCash = (cash) => {
  //вызываем диспатч в первое константа что делать 
  // второе сколько денег положить на счет
  dispatch ({type: "ADD_CASH", payload: cash})
}

const getCash = (cash) => {
  dispatch ({type: "GET_CASH", payload: cash})
}

const addCustomer = (name) => {
//в нашем случае передаем обьект пользователя в action
  const customer = {
    name,
    id: Date.now(), //уникальный id будем получать из текущего времени
  }

  //подключаем с customerReducer addCustomerAction(customer)
  dispatch(addCustomerAction(customer))
}

const removeCustomer = (customer) => {
  dispatch (removeCustomerAction(customer.id))
}

console.log(cash)
console.log(customers)

  return (
    <div className="App">
      <div className="cash">
        {cash}
      </div>
      <div className="buttons">
        <button onClick={()=> addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={()=> getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={()=> addCustomer(prompt())}>Добавлять клиента</button>
        <button onClick={()=> dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>

      {customers ? <div>
        {customers.map((customer)=> <div key={customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</div> )}
      </div> : <div>no clients</div>}
    </div>
  );
}

export default App;
