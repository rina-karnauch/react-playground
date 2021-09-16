import './ExpenseAdder.css'
import ExpenseItem from "./ExpenseItem";

function ExpenseAdder(props) {
    return (
        <div className="expense-adder">
            <div className="adder-title">
                add new expense
            </div>
            <form>
                <label>Title</label>
                <input type="text"/> <br/>

                <label>Amount</label>
                <input type='number'
                       min='0.01'
                       step='0.01'/> <br/>

                <label>Date</label>
                <input type='date'
                       min='2019-01-01'
                       max='2022-12-31'
                /> <br/>
            </form>
        </div>
    );
}


export default ExpenseAdder;