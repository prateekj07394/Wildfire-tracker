export default function LocationInfoBox({ info }) {
    return (
        <div className="location-info-box">
            <h2>Event Location Info</h2>
            <h4>ID : {info.id}</h4>
            <h4>Title : {info.title}</h4>
        </div>
    )
}