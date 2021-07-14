import { useEffect, useState, useRef } from 'react'
import {  RouterProps } from 'react-router-dom'
import { Page, Vocabulary } from '../../type/api.type'
import vocabularyApi from '../../api/vocabulary'
import VocabularyItem from './vocabularyItem'

/* ui part ... */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import ScriptMenu from './scriptMenu'

/* style part ... */
import style from '../../sass/vocabulary.module.sass'
import '../../sass/textTieldOverride.sass'


const PageMain = (props: RouterProps) => {
    // console.log('page', props)
    const page = props.history.location.state as Page
    const [ vocabularyList, setVocabularyList ] = useState<Vocabulary[]>([])
    const [ vocabulary, setVocabulary ] = useState('')
    const [ hideMode, setHideMode ] = useState(false)
    const [ scriptName, setScriptName ] = useState<string>('the big bang theory')
    // const inputEl = useRef<any>(null)
    const [ inputEl, setInputEl ] = useState<any>(undefined)


    useEffect(()=> {
        getVocabularyList()
    }, [])

    const  getVocabularyList = async() => {
        const res = await vocabularyApi.list(page.id as number)
        setVocabularyList(res.data)
    }

    const inputUpdate = (e: any) => {
        setInputEl(e)
        const val = e.target.value
        setVocabulary(val)
    }

    const addClick = async() => {
        try {
            const pageId = page.id as number
            const res = await vocabularyApi.add(vocabulary, pageId)
            getVocabularyList()
            inputEl.target.value = ''
        } catch(e) {

        }
    }

    const keyUp = (e: any) => {
        // console.log(e)
        if(e.key === 'Enter') {
            addClick()
        }
    }

    const modeChange = () => {
        setHideMode(!hideMode)
    }

    const scriptNameUpdate = (name: string) => {
        setScriptName(name)
        console.log('name', name)
    }

    return (
        <div onKeyUp={keyUp} className={style.vocabularyContainer}>

            <div className={style.title}>{page.name}</div>
            <div className={style.modeWrapper}>
                <Switch
                    checked={hideMode}
                    onChange={modeChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
          
            </div>
            <div className={style.scriptMenu}>
                <ScriptMenu title={scriptName} update={scriptNameUpdate}></ScriptMenu>
            </div>
            <div className={style.addWrapper}>
                <TextField  color='secondary' onChange={inputUpdate} id="add-page" label="new page"/>
                <Button variant="contained" color='secondary' onClick={addClick}>add</Button>
            </div>
            <div>
                {vocabularyList.map((item, index)=> {
                    return <VocabularyItem key={index} scriptName={scriptName} mode={hideMode} vocabulary={item} getVocabularyList={getVocabularyList}></VocabularyItem>
                })}
                
            </div>
        </div>
    )
}

export default PageMain