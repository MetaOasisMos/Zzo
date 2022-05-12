import {useDraggable} from "react-use-draggable-scroll";
import {useRef} from "react";


const Scrollers = ({scroller_images}) => {
    const ref = useRef();
    const {events} = useDraggable(ref);

    return (
        <div className={'scroller'}
             ref={ref}   {...events}>
            {scroller_images.map((item) => {
                return (<img src={item} className={'scroller-img'}/>)
            })}
        </div>
    );
}

export default Scrollers;