import { increase, decrease } from '../store/counter'

const CounterButtons = ({add, nadd}: any) => {

    return(
        <div>
            <button onClick={nadd}>-</button>
            <button onClick={add}>+</button>
        </div>
    )
}

export default CounterButtons;