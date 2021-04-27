import { useState, useEffect } from 'react'
import scriptApi from '../api/script'
import textApi from '../api/text'
import vocabularyApi from '../api/vocabulary'
import Button from '@material-ui/core/Button'
import ScriptItem from './scriptitem'
import Textitem from './textItem'
import style from '../sass/vocabulary.module.sass'
import Checkbox from '@material-ui/core/Checkbox'




const VocabularyItem = (props: any) => {
  console.log('ppp', props)
  const [scriptList, setScriptList] = useState([])
  const [textList, setTextList] = useState([])
  const [state, setState] = useState(false)

  useEffect(()=> {
    getTextList()
    setState(Boolean(props.checked))
  }, [])

  
  const getClick = async() => {
    const res = await scriptApi.getScript('the big bang theory', props.vocabulary)
    console.log(res)
    setScriptList(res.res)
  }

  const getTextList = async() => {
    const res = await textApi.getText(props.vid)
    setTextList(res)
  }

  const refreshTextList = () => {
    getTextList()
  }

  const checkboxHandler = async(e: any) => {
    // console.log('e', e.target.value)
    const res = await vocabularyApi.checkedUpdate(state, props.vid)
    console.log('check update', res)
    setState(!state)
    
  }

  const delClick = async() => {
    const res = await vocabularyApi.del(props.vid)
    props.refreshVocabulary()
  }

  return (
    <div className={style.vocabularyItemWrapper}>
      <div className={style.left}>
        <div className={style.vocabularyWrapper}>
          <Checkbox
            checked={state}
            onChange={checkboxHandler}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <div>{props.vocabulary}</div>
          <Button onClick={delClick}>del</Button>
        </div>
        <div>
          {textList.map((item: any, index: number)=> {
            return <Textitem
            key={index} 
            text={item.text} 
            refreshTextList={refreshTextList}
            id={item.id}>

            </Textitem>
          })}
        </div>
      </div>

      <div className={style.right}>
        <Button onClick={getClick}>get</Button>
        <div>{scriptList.map((item: any, index: number)=> {
          return <ScriptItem 
            key={index} 
            text={item.text} 
            vid={props.vid} 
            refreshTextList={refreshTextList}>
          </ScriptItem>
        })}</div>
      </div>
    </div>
  )
}

export default VocabularyItem