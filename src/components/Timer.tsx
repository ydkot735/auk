import { useState, useEffect } from 'react';
import './Timer.sass'

function Timer() {
    const [isRunning, setRunningStatus] = useState(false);
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    function handleTimer() {
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
        setRunningStatus(!isRunning);
    }

    function startTimer() {
        const id = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else if (minutes > 0) {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    return 59;
                } else {
                    stopTimer();
                    return 0;
                }
            });
        }, 1000);
        setIntervalId(id);
    }

    function stopTimer() {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    function TimerPlus() {
        setMinutes(prevState => prevState + 1)
    }

    function TimerMinus() {
        if (minutes > 0) { setMinutes(prevState => prevState - 1) }
    }

    function ResetTimer() {
        setMinutes(10)
        setSeconds(0)
    }


    return (
        <div className='timer'>
            <div className='timer__time'>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
            <button onClick={handleTimer} className='timer__mainButton button'>
                {isRunning ? 'Стоп' : 'Старт'}
            </button>
            <div className='timer__controll'>
                <button className='timer__controll__plusButton button' onClick={TimerPlus}>+1 min</button>
                <button className='timer__controll__minusButton button' onClick={TimerMinus}>-1 min</button>
                <button className='timer__controll__resetButton button' onClick={ResetTimer}>Сброс</button>
            </div>
        </div>
    );
}
export { Timer };
