    import React from "react";
import {Tilt} from "react-tilt";
const Logo = () => {
    return (
      <div className=' center ma4 mt0 '>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3 f-6 ">
            👺
           </div>
      </Tilt>
      </div>
    );
}
export default Logo;