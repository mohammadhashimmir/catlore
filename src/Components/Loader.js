import { PropagateLoader } from "react-spinners";
function Loader() {
    return (
        <div className="has-text-centered" style={{ marginTop: "40vh" }}>
            <PropagateLoader size={10} />
        </div>
    )
};
export default Loader;