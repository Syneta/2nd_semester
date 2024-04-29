import React, { useContext, useState } from 'react'
import { ExpenseType, api } from './api'
import { AdminRightsContext, AdminRightsProvider, AdminContextType, useAdminRights } from './AdminRightsContext'

const AdminToggleButton = () => {
  const { toggleValue } = useContext(AdminRightsContext);
  return <button onClick={toggleValue}>Toggle Admin Rights </button>
}

const HeaderComponent = () => {
  return (
    <div>
      <p>
        To Delete Expenses press button:
      </p>
      <AdminToggleButton />
    </div>
  )
}

const Expenses = () => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const [expenses, setExpenses] = useState<ExpenseType[]>([])
  const [newExpense, setNewExpense] = useState<ExpenseType>({ id: 0, name: '', cost: 0 })

  const toggleValue = () => {
    setShowButton((b) => !b); // Toggle the boolean value
  };

  const fetchExpenses = async () => {
    try {
      const fetchedExpenses = await api.getExpenses()
      setExpenses(fetchedExpenses)
    } catch (error) {
      console.error('Error fetching expenses:', error)
    }
  }

  const handleAddExpense = async () => {
    try {
      const expenseToAdd: ExpenseType = {
        id: Date.now(),
        name: newExpense.name,
        cost: newExpense.cost,
      }

      await api.postExpenses(expenseToAdd)

      await fetchExpenses()

      setNewExpense({ id: 0, name: '', cost: 0 })
    } catch (error) {
      console.error('Error adding expense:', error)
    }
  }

  const handleDeleteExpense = async (expenseId: number) => {
    try {
      await api.deleteExpense(expenseId)

      await fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error)
    }
  };

  return (
    <div className='p-10 flex flex-col gap-3'>
      <div className='gap-2 p-3 flex flex-col w-min bg-gray-200 pb-3'>
        <strong>Add Expense form</strong>
        <input
          type='text'
          placeholder='Expense name'
          className='border'
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type='number'
          placeholder='Expense cost'
          className='border'
          value={newExpense.cost}
          onChange={(e) => setNewExpense({ ...newExpense, cost: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddExpense} className='bg-green-300 text-nowrap'>Add Expense</button>
      </div>
      <div className='gap-2 flex flex-col border-black border-2 p-4'>
        <strong>Expense List:</strong>
        {expenses.map((expense) => (
          <div key={expense.id} className='w-2/3 h-min border flex items-center gap-2 px-2'>
            <p onClick={() => {
              handleDeleteExpense(expense.id)
              console.log('deleted: ', expense.id)
            }}
              className='text-2xl flex justify-end align-top text-red-600 '>X</p>
            <ul>
              <li>
                {expense.name}: {expense.cost} kr.
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expenses;