export default function ActivatePanel() {

    function activate(){
        console.log('check')
        const panel = document.querySelector("#panel")
        panel.style.display = "block"
        setTimeout(() => {
        // panel.style.display = "none"
        }, 6000);
    }
    return (
        <div><button id="button-panel" className="button-pagination" onClick={activate}>Filtres</button></div>
    )
}