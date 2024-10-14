import React from "react";

function HOCCard({Component}) {
    const {data } = Component.props
    

    return (
        <div style={{position: 'relative'}}>
            {Component}
            {data.quantity > 10 && <span style={{position: 'absolute', bottom: '40px', left: '40px'}}>Out Of Stack</span>}
        </div>
    )
}

export default HOCCard;