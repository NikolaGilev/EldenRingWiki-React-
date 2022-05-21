import React from 'react';
import Map from "./Map";

const MapHome = () => {
    return (
        <div>
            <img
                src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/the_lands_between_map_elden_ring_wiki_guide_3840px.jpg?v=1648140602316"
                alt="/"
                className="mb-5"
                style={{width: '50%', height: '50%', marginLeft: '25%'}}/>
            <div className="row mb-5 text-white ">
                <Map mapName="FRINGEFOLK HERO'S GRAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/fringefolk_heros_grave_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="MURKWATER CAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/murkwater_cave_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="STRANDED GRAVEYARD"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/stranded_graveyard_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="HIGHROAD CAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/highroad_cave_location_map_elden_ring_wiki_guide_300px.jpg'/>
            </div>

            <div className="row mb-5 text-white">
                <Map mapName="STORMHILL SHACK"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/stormhill_shack_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="DIVINE TOWER OF LIMGRAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/divine_tower_of_limgrave_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="WARMASTER'S SHACK"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/warmasters_shack_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="HIGHROAD CAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/highroad_cave_location_map_elden_ring_wiki_guide_300px.jpg'/>
            </div>


            <div className="row mb-5 text-white">
                <Map mapName="MURKWATER CAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/murkwater_cave_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="WARMASTER'S SHACK"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/warmasters_shack_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="HIGHROAD CAVE"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/highroad_cave_location_map_elden_ring_wiki_guide_300px.jpg'/>
                <Map mapName="MINOR ERDTREE (MISTWOOD)"
                     imgSrc='https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor_erdtree_mistwood_map_elden_ring_wiki_guide_300px.jpg'/>
            </div>


            <div className="row mb-5 text-white"><h1>...</h1></div>
        </div>
    );
};

export default MapHome;

