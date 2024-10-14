import { useParams } from "react-router"

function BookContainer() {
    const { bookId } = useParams()
    return(
        <div style={{width: '200px', height: '200px', margin: '20px', border: '1px solid black'}}>{bookId}</div>
    )
}

export default BookContainer