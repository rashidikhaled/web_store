import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com/products",
});
api.interceptors.response.use(response => response.data, err => Promise.reject(err.message));

const getProducts = async () => {
    try {
        const response = await api.get();
        return response;    
    } catch (err) {
        console.log(err);
        return err;
    }

}
export { getProducts }



