export default function Loader({ fadeOut }) {
    return (
        <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
            <div className="loader">
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
            </div>
        </div>
    )
}