import React, { useEffect, useState } from "react";
import { axiosInstance } from "../Utils/axioInstance";

const useAPIFetch = ({ url }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const fetchAPI = async () => {
        try {
            const response = await axiosInstance.get(url);
            setData(response.data);

        } catch (error) {
            console.log(error)
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        fetchAPI();
    }, [url])
    return { loading, error, data };
};

export default useAPIFetch;
