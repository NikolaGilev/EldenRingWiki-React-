import Quest from "./Quest";
import {Link} from "react-router-dom";

const QuestLines = ({quests, onDelete, onMarkDone, onAdd, showAdd}) => {
    return (
        <div className='rounded-3'>

            {/*<Link  to='addQuest' className='w-100 btn btn-dark  fw-bold'>Add Quest</Link>*/}

            <button className={`w-100 btn fw-bold ${showAdd ? "btn-danger" : "btn-secondary"}`} onClick={onAdd}>{showAdd ? 'Close' : 'Add Quest'}</button>

            {quests.map((quest, index) => (
                <Quest key={index} quest={quest} onDelete={onDelete} onMarkDone={onMarkDone} />
            ))}

        </div>

    );
}

export default QuestLines;