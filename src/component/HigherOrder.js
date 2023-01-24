import React from 'react'

const HigherOrder = () => {
    const [userData, setUserData] = useState([])
    const selecter = useSelector((state) => state.PassData)
    const data = useParams() //for to get the data from the query 

    useEffect(() => {
        // filter used for to get the same product from the selecter that match the id
        const check = selecter.filter((value) => {
            return value.id === Number(data.id)
        })
        setUserData(check)
    }, [data.id])
    return (
        <div>HigherOrder</div>
    )
}

export default HigherOrder