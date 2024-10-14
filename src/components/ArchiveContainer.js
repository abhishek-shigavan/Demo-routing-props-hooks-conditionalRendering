import React, { useEffect } from 'react';
import Card from './Card';
import HOCCard from './HOCCard';

const ArchiveContainer = () => {
    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count++
            console.log(count);
            
        },1000)

        return clearInterval(timer)
    }, [])

    const list = [
        {title: "abc", quantity: 5},
        {title: "abc", quantity: 12},  
        {title: "abc", quantity: 13},
        {title: "abc", quantity: 12},
        {title: "abc", quantity: 10}
    ]
    

    return (
        <div>
        <h1>Archive Component</h1>
        {/* {list.map(ele => <HOCCard Component={<Card noteDetails={ele}/>}/>)} */}
                {list.map(ele => <Card noteDetails={ele}/>)}

        </div>
    );
};

export default ArchiveContainer;