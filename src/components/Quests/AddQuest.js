import {useState} from "react";

const AddQuest = ({onAdd}) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [completed, setCompleted] = useState(false)
    const [step, setStep] = useState({stepName: '', stepInfo: ''});
    const [steps, setSteps] = useState({step})


    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !desc) {
            alert('Please add a name and desc')
            return
        }

        onAdd({name, desc, completed, steps})

        setName('')
        setDesc('')
        setCompleted(false)
        setStep({stepName: '', stepInfo: ''})
        setSteps({...steps, step})
    }

    return (
        <form id='form' className='container form bg-dark p-4 rounded-3' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Quest Name: </label>
                <input
                    type='text'
                    placeholder='Add Quest Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description: </label>
                <input
                    type='text'
                    placeholder='Add Description'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>

            <div className='form-control' id='temp'>
                <label>Step1: </label>
                <input
                    type='text'
                    placeholder='Add Step Name'
                    value={step}
                    onChange={(e) => setStep({stepName: e.target.value})}
                />
                <label>Step1 Description: </label>
                <input
                    type='text'
                    placeholder='Add Step Description'
                    value={step}
                    onChange={(e) => setStep({stepInfo: e.target.value})}
                />
                <hr/>

                <label>Step2: </label>
                <input
                    type='text'
                    placeholder='Add Step Name'
                    value={step}
                    onChange={(e) => setStep({stepName: e.target.value})}
                />
                <label>Step2 Description: </label>
                <input
                    type='text'
                    placeholder='Add Step Description'
                    value={step}
                    onChange={(e) => setStep({stepInfo: e.target.value})}
                />
                    <hr/>

                <label>Step3: </label>
                <input
                    type='text'
                    placeholder='Add Step Name'
                    value={step}
                    onChange={(e) => setStep({stepName: e.target.value})}
                />
                <label>Step3 Description: </label>
                <input
                    type='text'
                    placeholder='Add Step Description'
                    value={step}
                    onChange={(e) => setStep({stepInfo: e.target.value})}
                />


            </div>


            <input type='submit' value='Save Task' className='btn btn-secondary btn-block btn-lg'/>
        </form>

    );
}


export default AddQuest;