import React from 'react'

const Rainbow = (WrappedComponent) =>{
    const color = ['red', 'blue', 'yellow', 'orange', "green", "pink"];
    const randomcolor = color[Math.floor(Math.random() * 5)];
    const className = randomcolor + '-text';
    return(props) => {
        return(
            <div className={className} >
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;