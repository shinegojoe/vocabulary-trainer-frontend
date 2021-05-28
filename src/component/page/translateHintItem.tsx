import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import IconButton from '@material-ui/core/IconButton'

interface IProps {
  word: string
}

const TranslateHintItem = (props: IProps) => {
  return (
    <div>
      <div>{props.word}</div>
      {/* <IconButton>
        <PlayCircleFilledIcon></PlayCircleFilledIcon>
      </IconButton> */}
    </div>
  )
}

export default TranslateHintItem