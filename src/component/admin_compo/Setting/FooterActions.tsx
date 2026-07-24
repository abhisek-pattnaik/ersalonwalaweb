import "./FooterActions.css";

const FooterActions = () => {
    const handleDiscard = () => {
        console.log("Discard Changes");
    };

    const handleSave = () => {
        console.log("Save All Settings");
    };

    return (
        <div className="settings-footer">
            <button
                className="discard-btn"
                onClick={handleDiscard}
            >
                Discard Changes
            </button>

            <button
                className="save-btn"
                onClick={handleSave}
            >
                Save All Settings
            </button>
        </div>
    );
};

export default FooterActions;