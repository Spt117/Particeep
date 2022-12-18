export default function ActivatePanel() {
    //fonction pour
    function activate() {
        const panel = document.querySelector("#panel");
        panel.style.display = "block";
        setTimeout(() => {
            panel.style.display = "none";
        }, 6000);
    }
    return (
        <div>
            <button className="button-header" onClick={activate}>
                Filtres
            </button>
        </div>
    );
}
