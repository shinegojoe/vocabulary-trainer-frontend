import { useState, useEffect } from 'react'
import { Vocabulary } from '../../type/api.type'
import vocabularyApi from '../../api/vocabulary'

/* ui part ... */
import DeleteDialog from '../dialog/deleteDialog'
import EditDialog from '../dialog/editDialog'
import Button from '@material-ui/core/Button'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import IconButton from '@material-ui/core/IconButton'
import style from '../../sass/vocabulary.module.sass'
import { CachedTwoTone } from '@material-ui/icons'

interface IProps {
    vocabulary: Vocabulary
    getVocabularyList: Function
}
const VocabularyItem = (props: IProps) => {
    
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDelOpen, setIsDelOpen] = useState(false)

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
            const vId = props.vocabulary.id as number
            const res = await vocabularyApi.del(vId)
            closeDelete()
            props.getVocabularyList()
        } catch(e) {

        }
       
    }
    
    return (
        <div className={style.vocabularyItemWrapper}>
            <div>
                {props.vocabulary.vocabulary}
            </div>
            <Button onClick={editClick}>edit</Button>
            <Button onClick={deleteClick}>delete</Button>
            <Button>get sentence</Button>
            <IconButton>
                <PlayCircleFilledIcon></PlayCircleFilledIcon>
            </IconButton>
            <DeleteDialog close={closeDelete} ok={deleteVocabulary} isOpen={isDelOpen}></DeleteDialog>
            <EditDialog close={closeEdit} ok={editVocabulary} isOpen={isEditOpen}></EditDialog>
        </div>
    )
}

export default VocabularyItem