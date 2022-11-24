import { useEffect, useState } from "react";

//create a analogic clock
const Watch = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
        clearInterval(timerID);
        };
    });
    
    const tick = () => {
        setDate(new Date());
    };
    
    return (
        <div className="watch">
        <div className="watch__time">
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="watch__date">
            {date.toLocaleDateString([], {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            })}
        </div>
        </div>
    );
    };

export default Watch;
