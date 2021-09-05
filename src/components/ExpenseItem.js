import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className="expense-card">
            <h2>{props.title}</h2>
            <div className="expense-card-description">
                <div className="expense-card-date">{props.date.toDateString()}</div>
                <div className="expense-card-price">{props.amount + "$"}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;