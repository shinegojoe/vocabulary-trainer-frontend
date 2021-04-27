import textApi from '../api/text'
import Button from '@material-ui/core/Button'
import style from '../sass/textItem.module.sass'


const TextItem = (props: any) => {

  const delClick = async() => {
    console.log('id', props.id)
    const res = await textApi.del(props.id)
    console.log('del res', res)
    props.refreshTextList()
  } 
  return (
    <div className={style.textItemWrapper}>
      <div>{props.text}</div>
      <Button onClick={delClick}>del</Button>
    </div>
  )
}

export default TextItem