import {FaTimes} from 'react-icons/fa'

const QuestInfo = ({currQuest}) => {

    return (
        <>
            <div className='container bg-dark border-white p-4 mt-4 rounded-top'>
                <h1>Step 1:</h1>
                <h3>{currQuest.steps.step1[0]} </h3> <h3>{currQuest.steps.step1[1]} </h3>
                <h3>{currQuest.steps.step1[2]} </h3>
                <hr/>
                <h1>Step 2:</h1>
                <h3>{currQuest.steps.step2[0]} </h3> <h3>{currQuest.steps.step2[1]} </h3>
                <h3>{currQuest.steps.step2[2]}</h3> <h3>{currQuest.steps.step2[3]}</h3>
                <hr/>
                <h1>Step 3:</h1>
                <h3>{currQuest.steps.step3[0]} </h3>
            </div>
        </>
    );
}

export default QuestInfo;