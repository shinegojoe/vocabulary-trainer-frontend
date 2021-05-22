import { Script } from '../../type/api.type'
import textApi from '../../api/text'
import Button from '@material-ui/core/Button'
import style from '../../sass/scriptItem.module.sass'

interface IProps {
    script: Script
    vId: number
    getTextList: Function
}

const ScriptItem = (props: IProps) => {

    const addClick = async() => {
        const res = await textApi.add(props.vId, props.script.text)
        props.getTextList()

    }

    return (
        <div className={style.scriptItemWrapper}>
            <div> {props.script.text}</div>
            <div><Button onClick={addClick}>add</Button></div>
        </div>
    )
}   

export default ScriptItem