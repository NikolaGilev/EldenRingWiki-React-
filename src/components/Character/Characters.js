import CharCard from "./CharCard";

const Characters = () => {
    return (
            <div className="row mb-5 ">
                <CharCard imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/vagabond_class_elden_ring_wiki_guide_270px.png'
                soulLvl={9} vigor={15} dex={13} mind={10} int={9} end={11} faith={9} str={14} arcane={7}
                          btnRedirectLink='VagabondCharacter'/>
                <CharCard imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandit_class_elden_ring_wiki_guide_270px.png'
                          soulLvl={9} vigor={15} dex={13} mind={10} int={9} end={11} faith={9} str={14} arcane={7}
                          btnRedirectLink='/#'/>
                <CharCard imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologer_class_elden_ring_wiki_guide_270px.png'
                          soulLvl={9} vigor={15} dex={13} mind={10} int={9} end={11} faith={9} str={14} arcane={7}
                          btnRedirectLink='/#'/>
                <CharCard imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/hero_class_elden_ring_wiki_guide_270px.png'
                          soulLvl={9} vigor={15} dex={13} mind={10} int={9} end={11} faith={9} str={14} arcane={7}
                          btnRedirectLink='/#'/>
            </div>


    );
}

export default Characters;