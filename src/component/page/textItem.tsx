import { useState } from 'react'
import { Text } from '../../type/api.type'
import Button from '@material-ui/core/Button'
import textApi from '../../api/text'
import soundApi from '../../api/sound'
import translateApi from '../../api/translate'
import { useDispatch, useSelector } from 'react-redux'
import translateAction from '../../action/translateStyle.action'


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import IconButton from '@material-ui/core/IconButton'
import style from '../../sass/textItem.module.sass'
import mainStyle from '../../sass/main.module.sass'


interface IProps {
    text: Text
    getTextList: Function
}

const TextItem = (props: IProps) => {
    const tt = {
        backgroundColor: 'red',
        width: '10px',
        height: '10px',
        top: 0,
        left: 100

    }
    const dispatch = useDispatch()

    const [ hintStyle, setHintStyle] = useState(tt)

    const removeClick = async() => {
        const id = props.text.id as number
        try {
            const res = await textApi.del(id)
            props.getTextList()
        } catch(e) {

        }
    }

    const playSound = async() => {
        const res = await soundApi.playSound(textFilter(props.text.text))
        console.log(res)
        const blob = new Blob([res], {type: 'audio/ogg'})
        console.log('bbb', blob)
        const audio = new Audio()
        audio.src = URL.createObjectURL(blob)
        audio.load()
        audio.play()
    }

    const textFilter = (text: string)=> {
        const re = /’/g
        let res = text.replace(re, '\'')
        // const x = /./g
        // res = res.replace(x, '.')
        return res
    }

    const mUp = async(e: any) => {
        console.log('e', e)
        

      
        const selection = window.getSelection()
        const text = selection?.toString()

        if(text === undefined) {
            return
        }

        if(text === '') {
            return
        }

        const textList = text.split(' ')
        if(textList.length === 1) {
            const res = await translateApi.translate(text)
            console.log(res.data.text)
            // const action = {
            //     type: 'test',
            //     x: e.clientX,
            //     y: e.clientY,
            //     word: res.data.text
            // }
            const x = e.clientX
            const y = e.clientY
            const word = res.data.text
            const action = translateAction.translateHintUpdate(x, y, word)
            dispatch(action)
        }
        

    }

    const mouseLeave = () => {
        console.log('leave')
        const action = translateAction.isShow(false)
        dispatch(action)
    }

    

    return (
        <div className={style.textItemWrapper}>
            <div className={style.sentenceWrapper}>
                <div onMouseUp={mUp} onMouseLeave={mouseLeave}>{textFilter(props.text.text)}</div>
                <div>
                    <IconButton onClick={playSound}>
                        <PlayCircleFilledIcon></PlayCircleFilledIcon>
                    </IconButton>
                </div>
            </div>
            <div>
                <Button onClick={removeClick}>remove</Button>
            </div>
        </div>
    )
}

export default TextItem