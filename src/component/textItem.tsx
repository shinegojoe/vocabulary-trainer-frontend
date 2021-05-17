import textApi from '../api/text'
import soundApi from '../api/sound'
import Button from '@material-ui/core/Button'
import style from '../sass/textItem.module.sass'


const TextItem = (props: any) => {

  const delClick = async() => {
    console.log('id', props.id)
    const res = await textApi.del(props.id)
    console.log('del res', res)
    props.refreshTextList()
  } 

  const play = async()=> {
    const res = await soundApi.playSound(props.text)
    // console.log(res)
    const blob = new Blob([res], {type: 'audio/ogg'})
    const audio = new Audio();
    audio.src = URL.createObjectURL(blob);
    audio.load()
    audio.play()
  }

  return (
    <div className={style.textItemWrapper}>
      <div>{props.text}</div>
      <Button onClick={delClick}>del</Button>
      <Button onClick={play}>play</Button>
    </div>
  )
}

export default TextItem