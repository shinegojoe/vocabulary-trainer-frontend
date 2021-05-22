import { useState, useEffect } from 'react'
import { Vocabulary, Script, Text } from '../../type/api.type'
import vocabularyApi from '../../api/vocabulary'
import scriptApi from '../../api/script'
import textApi from '../../api/text'

/* ui part ... */
import ScriptItem from './scriptItem'
import TextItem from './textItem'
import DeleteDialog from '../dialog/deleteDialog'
import EditDialog from '../dialog/editDialog'
import Button from '@material-ui/core/Button'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditIcon from '@material-ui/icons/Edit'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import IconButton from '@material-ui/core/IconButton'
import style from '../../sass/vocabulary.module.sass'

interface IProps {
    vocabulary: Vocabulary
    getVocabularyList: Function
}
const VocabularyItem = (props: IProps) => {
    const vId = props.vocabulary.id as number
    
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDelOpen, setIsDelOpen] = useState(false)
    const [ scriptList, setScriptList ] = useState<Script[]>([])
    const [ textList, setTextList ] = useState<Text[]>([])

    useEffect(()=> {
        getTextList()
    }, [props.vocabulary])

    const getTextList = async() => {
        const vId = props.vocabulary.id as number
        const res = await textApi.getText(vId)
        // console.log('textList', res)
        setTextList(res.data)
    }

    const editClick = () => {
        setIsEditOpen(true)
    }

    const closeEdit = () => {
        setIsEditOpen(false)
    }

    const editVocabulary = async(text: string) => {
        console.log(text)
        try {
            const id = props.vocabulary.id as number
            const res = await vocabularyApi.update(id, text)
            closeEdit()
            props.getVocabularyList()
        } catch(e) {

        }
        
    }

    const deleteClick = () => {
        setIsDelOpen(true)
    }

    const closeDelete = () => {
        setIsDelOpen(false)
    }

    const deleteVocabulary = async() => {
        try {
            const res = await vocabularyApi.del(vId)
            closeDelete()
            props.getVocabularyList()
        } catch(e) {

        }
    }

    const getScriptClick = async() => {
        try {
            const res = await scriptApi.getScript('the big bang theory', props.vocabulary.vocabulary)
            setScriptList(res.data)
        } catch(e) {

        }
    }
    
    return (
        <div>
            <div  className={style.vocabularyItemWrapper}>
                <div className={style.textWrapper}>
                    {props.vocabulary.vocabulary}
                </div>
                <div className='actionWeapper'>
                    <IconButton onClick={editClick}>
                        <EditIcon></EditIcon>
                    </IconButton>
                    <IconButton onClick={deleteClick}>
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                    </IconButton>
                    <IconButton onClick={getScriptClick}>
                        <TextFieldsIcon></TextFieldsIcon>
                    </IconButton>
                    <IconButton>
                        <PlayCircleFilledIcon></PlayCircleFilledIcon>
                    </IconButton>
                </div>

            </div>
            <div>
                {textList.map((item, index)=> {
                    return <TextItem key={index} text={item} getTextList={getTextList}></TextItem>
                })}
            </div>
          
          
            <div>
                {scriptList.map((item, index)=> {
                    return <ScriptItem key={index} script={item} vId={vId} getTextList={getTextList}></ScriptItem>
                })}
            </div>
            <DeleteDialog close={closeDelete} ok={deleteVocabulary} isOpen={isDelOpen}></DeleteDialog>
            <EditDialog close={closeEdit} ok={editVocabulary} isOpen={isEditOpen}></EditDialog>
        </div>
    )
}

export default VocabularyItem