import { useDispatch, useSelector } from "react-redux";
import { increment, decrement} from "./store/actions/action";

const Counter = () => {

//const count = useSelector((state => state.count));
const count = useSelector((state => state.counter.count));
const dispatch = useDispatch();
    return (
        <div>
        <h2>Count in Counter component: {count}</h2>
        <button className='text-white mt-4 text-lg bg-gray-500 p-4' onClick={() => dispatch(increment())}>
            INCREMENT
        </button><br/>
        <button className='text-white mt-4 text-lg bg-gray-500 p-4' onClick={() => dispatch(decrement())}>
            DECREMENT
        </button>
        </div>
    )

}

export default Counter;