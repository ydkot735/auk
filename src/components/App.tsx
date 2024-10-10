import './App.sass'
import { Lots } from './Lots.tsx'
import { Timer } from './Timer'

function App(){
    
    return(<>
    <main className="main">
        <Lots />
        <Timer />
    </main>
    </>)
}

export {App}