import { Text } from '../../type/api.type'
import Button from '@material-ui/core/Button'
import textApi from '../../api/text'
import soundApi from '../../api/sound'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import IconButton from '@material-ui/core/IconButton'
import style from '../../sass/textItem.module.sass'


interface IProps {
    text: Text
    getTextList: Function
}

const TextItem = (props: IProps) => {

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

    return (
        <div className={style.textItemWrapper}>
            <div className={style.sentenceWrapper}>
                <div>{textFilter(props.text.text)}</div>
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