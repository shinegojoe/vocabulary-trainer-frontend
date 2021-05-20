import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PageItem from './pageItem'
import style from '../sass/page.module.sass'

const Home = () => {
    const [ testData, setTestData] = useState([1, 2, 4, 5, 6])

    const inputUpdate = () => {

    }

    const addClick = () => {

    }

    return (
        <div className={style.pageContainer}>
            <div className={style.addWrapper}>
                <TextField color='secondary' onChange={inputUpdate} id="add-page" label="new page"/>
                <Button color='secondary' onClick={addClick}>add</Button>
            </div>
            <div className={style.pageWrapper}>
                {testData.map((item, index)=> {
                    return <PageItem key={index} index={index} ></PageItem>
                })}
            </div>
        </div>
    )
}

export default Home

