import { Text } from '../../type/api.type'
import Button from '@material-ui/core/Button'
import textApi from '../../api/text'

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

    return (
        <div className={style.textItemWrapper}>
            <div className={style.sentenceWrapper}>
                <div>{props.text.text}</div>
                <div>
                    <IconButton>
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