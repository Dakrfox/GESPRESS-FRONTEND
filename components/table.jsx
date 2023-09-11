import React from 'react'
import Avatar from 'react-avatar';

export default function TableComponent(props){
    return (

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Title</th>
        <th>Type</th>
        <th>Amount</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
                <Avatar size='40' round={true} color="#22c55e" name="Salary" />
            </div>
            <div>
              <div className="font-bold">Salary</div>
              <div className="text-sm opacity-50">Pizzelopers</div>
            </div>
          </div>
        </td>
        <td>
          
          
          <span className="badge border-green-500 text-green-500">Income</span>
        </td>
        <td>+300.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
          
            <div className="avatar">
                <Avatar size='40' round={true} color="#ef4444" name="Bills" />
            </div>
            
            <div>
              <div className="font-bold">Bills</div>
              <div className="text-sm opacity-50">Home Services</div>
            </div>
          </div>
        </td>
        <td>
          
          <span className="badge border-red-500 text-red-500">Expense</span>
        </td>
        <td>-150.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <Avatar size='40' round={true} color="#a855f7" name="New Car" />
            </div>
            <div>
              <div className="font-bold">New Car</div>
              <div className="text-sm opacity-50">Mercedez-benz</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge border-purple-500 text-purple-500">Saving Goals</span>
        </td>
        <td>↓100.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <Avatar size='40' round={true} color="#a855f7" name="A P" />
            </div>
            <div>
              <div className="font-bold">Internal Trasaction</div>
              <div className="text-sm opacity-50">adjust price</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge border-purple-500 text-purple-500">Saving Goals</span>
        </td>
        <td>↑50.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        {/* row 1 */}
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <Avatar size='40' round={true} color="#22c55e" name="Salary" />

            </div>
            <div>
              <div className="font-bold">Salary</div>
              <div className="text-sm opacity-50">Pizzelopers</div>
            </div>
          </div>
        </td>
        <td>
          
          
          <span className="badge border-green-500 text-green-500">Income</span>
        </td>
        <td>+300.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <Avatar size='40' round={true} color="#ef4444" name="Bills" />
            </div>
            <div>
              <div className="font-bold">Bills</div>
              <div className="text-sm opacity-50">Home Services</div>
            </div>
          </div>
        </td>
        <td>
          
          <span className="badge border-red-500 text-red-500">Expense</span>
        </td>
        <td>-150.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <Avatar size='40' round={true} color="#a855f7" name="New Car" />
            </div>
            <div>
              <div className="font-bold">New Car</div>
              <div className="text-sm opacity-50">Mercedez-benz</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge border-purple-500 text-purple-500">Saving Goals</span>
        </td>
        <td>↓100.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <Avatar size='40' round={true} color="#a855f7" name="A P" />
            </div>
            <div>
              <div className="font-bold">Internal Trasaction</div>
              <div className="text-sm opacity-50">adjust price</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge border-purple-500 text-purple-500">Saving Goals</span>
        </td>
        <td>↑50.00 USD</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Total Incomes (USD) = 500 USD</th>
        <th>Total Expenses (USD) = -300 USD</th>
        <th>Total Saving Goals (USD) = 100 USD</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    );
}