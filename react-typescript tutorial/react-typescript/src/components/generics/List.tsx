import { useState } from 'react';

//<T> is convention for generics
type ListProps <T>= {


    items: T[]
    onClick: (value:T) => void

}

export const List = <T extends {}> ({items,onClick}: ListProps<T>) => {

    const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

    const handleClick = (item: T) =>{
        onClick(item);
        setClickCounts( prevCounts => ({
            ...prevCounts,
            [item as unknown as string] : (prevCounts[item as unknown as string] || 0) + 1
        }))
    }
    return ( 
        <div> 
            <h2> List of Items</h2>
            {items.map((item,index) => {
                return(
                    <div key = {index} onClick = {() => handleClick(item)}>
                        {item as unknown as string}: {clickCounts[item as unknown as string] || 0}
                    </div>
                )
            })}
        </div>
    )
}