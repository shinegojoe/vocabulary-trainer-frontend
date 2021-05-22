
import { useEffect, useState } from 'react'
import vocabularyApi from '../api/vocabulary'
import VocabularyItem from './vocabularyItem'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import style from '../sass/main.module.sass'


function Main() {
    const [dataList, setDataList] = useState<any>([])
    const [word, setWord] = useState('')

    useEffect(() => {
        const res = getVocabulary()

    }, [])

    const getVocabulary = async () => {
        const res = await vocabularyApi.get()
        console.log(res)
        setDataList(res)
        return res
    }

    const inputUpdate = (e: any) => {
        // console.log(e.target.value)
        setWord(e.target.value)
    }

    const addClick = async () => {
        // const res = await vocabularyApi.add(word)
        // console.log(res)
        // const res2 = await getVocabulary()
    }

 

    const refreshVocabulary = () => {
        getVocabulary()
    }

    return (
        <div className={style.mainLayout}>
            <div className={style.addItemWrapper}>
                <TextField onChange={inputUpdate} id="add-vocabulary" label="add" />
                <Button onClick={addClick}>add</Button>
            </div>
            <div>
                {dataList.map((item: any, index: number) => {
                    return <VocabularyItem
                        key={index}
                        refreshVocabulary={refreshVocabulary}
                        vocabulary={item.vocabulary}
                        checked={item.checked}
                        vid={item.id}>
                    </VocabularyItem>
                })}
            </div>
        </div>
    );
}

export default Main
