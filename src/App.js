import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Quest from "./components/Quests/Quest";
import QuestLines from "./components/Quests/QuestLines";
import {useEffect, useState} from "react";
import AddQuest from "./components/Quests/AddQuest";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Characters from "./components/Character/Characters";
import Vagabond from "./components/Character/Vagabond";
import MapHome from "./components/Map/MapHome";
import RestAtGrace from "./components/RestAtGrace";
import GameLore from "./components/GameLore";
import QuestInfo from "./components/Quests/QuestInfo";

const App = () => {
    const [showQuestForm, setShowQuestForm] = useState(false);
    const [quests, setQuests] = useState([
        {
            id: 2,
            name: "First Quest",
            completed: true,
            desc: "Lorem ipsum Lorem ipsum...",
            steps: {
                step1: [
                    "go to place 1",
                    "talk to NPC#1",
                    "touch altar"
                ],
                step2: [
                    "go to place 2",
                    "talk to NPC#2",
                    "clear dungeon #1",
                    "kill boss #1"
                ],
                step3: "rest at grace #2"
            }
        }
        ,
        {
            id: 3,
            name: "First Quest",
            completed: true,
            desc: "Lorem ipsum Lorem ipsum...",
            steps: {
                step1: [
                    "go to place 1",
                    "talk to NPC#1",
                    "touch altar"
                ],
                step2: [
                    "go to place 2",
                    "talk to NPC#2",
                    "clear dungeon #1",
                    "kill boss #1"
                ],
                step3: "rest at grace #2"
            }
        },
        {
            id: 4,
            name: "First Quest",
            completed: true,
            desc: "Lorem ipsum Lorem ipsum...",
            steps: {
                step1: [
                    "go to place 1",
                    "talk to NPC#1",
                    "touch altar"
                ],
                step2: [
                    "go to place 2",
                    "talk to NPC#2",
                    "clear dungeon #1",
                    "kill boss #1"
                ],
                step3: "rest at grace #2"
            }
        }

    ]);
    const [currQuest, setCurrQuest] = useState([{
        id: 1,
        name: "First Quest",
        completed: true,
        desc: "Lorem ipsum Lorem ipsum...",
        steps: {
            step1: [
                "go to place 1",
                "talk to NPC#1",
                "touch altar"
            ],
            step2: [
                "go to place 2",
                "talk to NPC#2",
                "clear dungeon #1",
                "kill boss #1"
            ],
            step3: "rest at grace #2"
        }
    }]);

    // useEffect(() => {
    //     const getQuests = async () => {
    //         const questsFromServer = await fetchQuests()
    //         setQuests(questsFromServer)
    //     }
    //
    //     getQuests()
    // }, [])

    // const fetchQuests = async () => {
    //     const res = await fetch('http://localhost:5000/quests')
    //     const data = await res.json()
    //
    //     return data
    // }
    //
    // const fetchQuest = async (id) => {
    //     const res = await fetch(`http://localhost:5000/quests/${id}`)
    //     const data = await res.json()
    //
    //     return data
    // }


    const deleteQuest = async (id) => {
        // await fetch(`http://localhost:5000/quests/${id}`,
        //     {
        //         method: 'DELETE'
        //     })

        setQuests(quests.filter(q => q.id !== id))
    }

    const addQuest = async (quest) => {
        // const res = await fetch('http://localhost:5000/quests', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(quest)
        // })
        // const data = await res.json()

        const id = Math.floor(Math.random()*10000)+1;
        const newQuest = {id, ...quest}
        setQuests([...quests, newQuest])
    }

    const changeStatustQuest = async (id) => {
        // const toChange = await fetchQuest(id)
        // const updQuest = {...toChange, completed: !toChange.completed}
        //
        // const res = await fetch(`http://localhost:5000/quests/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updQuest)
        // })
        //
        // const data = await res.json()

        setQuests(quests.map((q) => q.id === id ? {...q, completed: !q.completed} : q))
    }


    return (
        <Router>
            <div style={{
                minHeight: '1200px',
                backgroundImage:
                    `url('https://preview.redd.it/l8z75w0hqms71.jpg?auto=webp&s=a64ded289cbd548426f09ec24037ff09555f38e3')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Navbar/>

                <div className='container  p-4' style={{background: '#1d1d1b'}}>
                    <Routes>
                        <Route path='/EldenRingWiki-React-' element={<Home/>}/>

                        {/*<Route path='/quests/addQuest' element={<AddQuest onAdd={addQuest}/>}/>*/}
                        {/*<Route path={`/quests/guideForQuest/:id`}*/}
                        {/*       element={<QuestInfo currQuest={currQuest} onMarkDone={changeStatustQuest}/>}*/}
                        {/*/>*/}

                        <Route path='EldenRingWiki-React-/quests'
                               element={<>
                                   <QuestLines onDelete={deleteQuest} quests={quests}
                                               onMarkDone={changeStatustQuest}
                                               onAdd={() => setShowQuestForm(!showQuestForm)}
                                               showAdd={showQuestForm}/>
                                   {showQuestForm && <AddQuest onAdd={addQuest}/>}

                               </>
                               }
                        />

                        <Route path='EldenRingWiki-React-/ChooseCharacterList' element={<Characters/>}/>
                        <Route path='EldenRingWiki-React-/ChooseCharacterList/VagabondCharacter' element={<Vagabond/>}/>
                        <Route path='EldenRingWiki-React-/mapLocations' element={<MapHome/>}/>
                        <Route path='EldenRingWiki-React-/RestAtGrace' element={<RestAtGrace/>}/>
                        <Route path='EldenRingWiki-React-/GameLore' element={<GameLore/>}/>

                    </Routes>

                </div>
            </div>
            <Footer/>
        </Router>

    );
}


export default App;

