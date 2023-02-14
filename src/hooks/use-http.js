import React, { useCallback, useState } from "react"

const useHttp = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                headers: requestConfig.headers ? requestConfig.headers : {},
            })

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json()

            applyData(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setLoading(false)
    }, [])
    return {
        loading,
        error,
        sendRequest,
    }
}

export default useHttp