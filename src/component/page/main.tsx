import { useEffect,  useState } from 'react'
import {  RouterProps } from 'react-router-dom'
import { Page, Vocabulary } from '../../type/api.type'
import vocabularyApi from '../../api/vocabulary'
import VocabularyItem from './vocabularyItem'

/* ui part ... */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import style from '../../sass/vocabulary.module.sass'



const PageMain = (props: RouterProps) => {
    console.log('page', props)
    const page = props.history.location.state as Page
    const [ vocabularyList, setVocabularyList ] = useState<Vocabulary[]>([])
    const [ vocabulary, setVocabulary ] = useState('')

    useEffect(()=> {
        getVocabularyList()
    }, [])

    const  getVocabularyList = async() => {
        const res = await vocabularyApi.list(page.id as number)
        setVocabularyList(res.data)
    }

    const inputUpdate = (e: any) => {
        const val = e.target.value
        setVocabulary(val)
    }

    const addClick = async() => {
        try {
            const pageId = page.id as number
            const res = await vocabularyApi.add(vocabulary, pageId)
            getVocabularyList()
        } catch(e) {

        }
    }

    return (
        <div className={style.vocabularyContainer}>
            page
            {page.id}
            <div className={style.vocabularyItemWrapper}>
                <TextField color='secondary' onChange={inputUpdate} id="add-page" label="new page"/>
                <Button color='secondary' onClick={addClick}>add</Button>
            </div>
            <div>
                {vocabularyList.map((item, index)=> {
                    return <VocabularyItem key={index} vocabulary={item} getVocabularyList={getVocabularyList}></VocabularyItem>
                })}
                
            </div>
        </div>
    )
}

export default PageMain