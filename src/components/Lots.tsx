import { useEffect, useState } from "react";
import './Lots.sass';

interface Lot {
    item: string;
    sum: number;
}

let example = [
    { item: "Item1", sum: 1000 },
    { item: "Item2", sum: 10212 },
    { item: "Item3", sum: 2000 },
    { item: "Item4", sum: 3000 },
    { item: "Item5", sum: 4000 },
    { item: "Item6", sum: 5000 },
    { item: "Item7", sum: 7000 },
]


function Lots() {
    const [lots, setLots] = useState<Lot[]>(example);
    const [filtered, SetFiltered] = useState<Lot[]>([])
    const [item, setItem] = useState("");
    const [sum, setSum] = useState("");


    useEffect(() => {
        if (lots.length > 0) {
            let sortedList = [...lots].sort((a, b) => b.sum - a.sum)
            SetFiltered(sortedList)
        }
    }, [lots])

    function handleAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (item && sum) {
            setLots([...lots, { item: item, sum: parseFloat(sum) }]);
            setItem("");
            setSum("");
        }
    }



    return (
        <div className="lots">
            <form onSubmit={handleAdd} className="lots__form">
                <input
                    type="text"
                    className="lots__input"
                    onChange={e => setItem(e.target.value)}
                    placeholder="Позиция"
                />
                <input
                    type="number"
                    className="lots__input"
                    onChange={e => setSum(e.target.value)}
                    placeholder="Сумма"
                />
                <button className="lots__addButton">Добавить</button>
            </form>
            <div className="lots__list">
                {filtered.map((lot) => (
                    <div key={lot.item} className="lots__listItem">
                        <div className="lots__list__itemName">{lot.item}</div>
                        <div className="lots__list__itemSum">{lot.sum}</div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export { Lots };

