import { Fragment } from "react";
import { useState, useEffect, useRef } from 'react';
import { BiDownArrowCircle } from 'react-icons/bi';
import WAVES  from 'vanta/dist/vanta.waves.min';
export const LpMv = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x256fa8,
              shininess: 19.00
            }))
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    
    return (
    <Fragment>
        <div className="p-lp_mv--container" ref={vantaRef}>
            <p className="p-lp_mv--container_txt">
                <span className="p-lp_mv--container_txt--big">CASPF</span>portfolio site
            </p>
            <div className="p-lp_mv--container_scrolls">
                <BiDownArrowCircle size="2rem" />
                <span className="p-lp_mv--container_scrolls--txt">scroll</span>
            </div>
        </div>
    </Fragment>
    );
};