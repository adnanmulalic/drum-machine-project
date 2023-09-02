import { useState } from "react";
import DrumPad from "./DrumPad";
import "./DrumPadContainer.css";
import Display from "./Display";
import { notes } from "./AudioSource";
import { useEffect } from "react";

export default function DrumPadContainer() {
    const [noteName, setNoteName] = useState("");
    const getNoteName = (e) => {
        if (e.target.className === "drum-pad" ) {
            setNoteName(notes[e.target.id[0].toLowerCase()].note)
        }
    }
    useEffect(() => {
        const noteKeyPress = (event) => {
            document.querySelectorAll(".drum-pad").forEach(key =>{
                if (event.key === key.id[0].toLowerCase()) {
                    document.querySelector(`#${key.id[0]}`).play();
                    setNoteName(notes[event.key].note)
                } else if (event.key === key.id[0]) {
                    document.querySelector(`#${key.id[0]}`).play();
                    setNoteName(notes[event.key.toLowerCase()].note)
                }
            })
        }
        document.addEventListener("keydown", noteKeyPress);
    }, []);

    return (
        <>
        <Display noteName={noteName}/>
        <div onClick={getNoteName} id="drum-pad-container">
            <DrumPad drumKey={"Q"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
            <DrumPad drumKey={"W"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
            <DrumPad drumKey={"E"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
            <DrumPad drumKey={"A"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
            <DrumPad drumKey={"S"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
            <DrumPad drumKey={"D"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
            <DrumPad drumKey={"Z"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
            <DrumPad drumKey={"X"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
            <DrumPad drumKey={"C"} audioSource= "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
        </div>
        </>
    )

    
}