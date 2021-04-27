import textApi from '../api/text'
import Button from '@material-ui/core/Button'
import style from '../sass/scriptItem.module.sass'


const ScriptItem = (props: any) => {

  const addClick = async() => {
    const res = await textApi.add(props.vid, props.text)
    console.log(res)
    props.refreshTextList()
  }

  return (
    <div className={style.scriptItemWrapper}>
      <div>{props.text}</div>
      <Button onClick={addClick} color="secondary">add</Button>

    </div>
  )
}

export default ScriptItem