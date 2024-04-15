import { useEffect, useState } from 'react';

type Expenses = {
  id: number;
  name: string;
  cost: number;
};

const getExpenses = async (): Promise<Expenses[]> => {
  const res = await fetch('http://localhost:3001/api/expenses');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const response = await res.json();
  return response;
};

const ExpenseAPI = () => {
  const [expense, setExpense] = useState<Expenses[]>();

  const fetchExpense = async () => {
    try {
      const fetchedExpense = await getExpenses();
      setExpense(fetchedExpense);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  if (!expense) {
    return <p>Loading...</p>;
  }

  return (
    <div className='m-10'>
      <div className='mb-4'>
        <strong className='py-4 flex'>Hello my beautiful expenses list</strong>
        <ul>
          {expense.map(exp => (
            <li key={exp.id} className='border-b-2 border-black text-nowrap'>
              {exp.name} - {exp.cost} kr.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseAPI;
