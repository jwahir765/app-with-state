export default function Profile({ imgLink, name, onDelete }) {

    function styleName(name) {
        return name.toUpperCase();
    }

    return (
        <>
            <div>
                <img src={imgLink} />
                <p>Name: {styleName(name)}</p>
                <button onClick={onDelete}>Delete</button>
            </div>
        </>
    )
}