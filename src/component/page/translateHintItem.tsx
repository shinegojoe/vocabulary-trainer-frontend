

interface IProps {
  word: string
}

const TranslateHintItem = (props: IProps) => {
  return (
    <div>
      {props.word}
    </div>
  )
}

export default TranslateHintItem