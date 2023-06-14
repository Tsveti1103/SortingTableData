import { useEffect, useState } from "react";

export default function useFetcherCustom(response, resData, dep = [], state = [],) {
    const [data, setData] = useState(state);
    useEffect(() => {
        response(resData)
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.log(error);
            })

    }, dep);
    return [data, setData]
}
