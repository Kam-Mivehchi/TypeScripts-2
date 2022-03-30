import React, { useState } from 'react'
import axios from 'axios'
import Table from '../components/table'

const HighScore = () => {
    const [highscores, setHighscores] = useState([])

    const getScores = () => {
        axios.get('/api/highscores', {})
            .then((response) => {
                console.log(response.data)
                let scores = response.data
                return scores
            }).then((scores) => {
                setHighscores(scores)
            })
    }

    React.useEffect(() => getScores(), []);

    const column = [
        { heading: 'Username', value: 'User.username' },
        { heading: 'Score', value: 'score' },
    ]


    return (
        <div className="App">
            <Table data={highscores} column={column} />

        </div>
    )
}

export default HighScore