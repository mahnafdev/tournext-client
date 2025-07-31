import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:5100",
	// baseURL: "https://tournext-server.vercel.app",
	withCredentials: true,
});
export default apiClient;
