import axios from "axios";

export default axios.create({
    headers: {
        Authorization: localStorage.getItem("token")
    }
});