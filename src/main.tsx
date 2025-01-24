import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<StarRating onClick={(s) => console.log(s)} />);
