import {FaAngleDoubleDown, FaAngleDoubleUp, FaTimes} from 'react-icons/fa'
import {Link} from "react-router-dom";
import QuestInfo from "./QuestInfo";
import {useState,useCallback} from "react"

const Quest = ({quest, onDelete, onMarkDone}) => {
    const [hasRender, setRender] = useState(false);
    const onShow = (() => setRender(!hasRender) );

    return (
        <>
            <div className={`container mt-5 p-4 pb-5 rounded-3 text-white ${quest.completed ? 'bg-success' : 'bg-danger'}`}>
                <FaTimes
                    style={{color: 'red', cursor: 'pointer', float: 'right'}}
                    onClick={() => onDelete(quest.id)}/>

                <h1 >{quest.name}</h1>
                <p>{quest.desc}</p>
                <h3 onClick={() => onMarkDone(quest.id)} style={{cursor: 'pointer', float: 'right'}}
                    className='text-white'>{quest.completed ? <span>&#10003; </span> : 'Ongoing...'}</h3>

                {!hasRender ? <FaAngleDoubleDown style={{color: 'white', cursor: 'pointer'}} onClick={onShow}/>:
                <FaAngleDoubleUp style={{color: 'white', cursor: 'pointer'}} onClick={onShow}/>}
                {hasRender && <QuestInfo currQuest={quest}/>}


            </div>

        </>
    );
}

export default Quest;