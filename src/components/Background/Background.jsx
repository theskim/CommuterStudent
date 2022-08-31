import { setSideBar } from '../..';
import { useDispatch } from 'react-redux';

const Background = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="custom-background" onClick={() => dispatch(setSideBar(false))}>
            {props.children}
        </div>
    );
}

export default Background;