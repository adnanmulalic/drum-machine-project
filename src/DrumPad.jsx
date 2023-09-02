export default function DrumPad({drumKey, doSomething, audioSource}) {
    function doSomething(event) {
        let note = event.target.id;
        document.querySelector(`#${note[0]}`).play();
    }
    return (
        <>
        <button onClick={doSomething} className="drum-pad" id={`${drumKey}-note`}>
            {drumKey}
            <audio className="clip" id={drumKey} name="audio" src={audioSource}></audio>
        </button>
        </> 
    )
}