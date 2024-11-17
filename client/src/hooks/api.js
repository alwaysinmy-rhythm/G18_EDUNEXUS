import API from "../utils/api";

// Create a custom hook for easy access to GET and POST
const useAPI = () => {
	const GET = async (url, params = {}, signal = null) => {
		try {
			const response = await API.get(url, { params, signal });
			return response;
		} catch (error) {
			return error;
		}
	};

	const POST = async (url, data = {}, params = {}, signal = null) => {
		try {
			const response = await API.post(url, data, { params, signal });
			return response;
		} catch (error) {
			return error;
		}
	};

	return { GET, POST };
};

export default useAPI;
