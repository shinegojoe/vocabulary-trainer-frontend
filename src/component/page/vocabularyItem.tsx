import { useState, useEffect } from "react";
import { Vocabulary, Script, Text } from "../../type/api.type";
import vocabularyApi from "../../api/vocabulary";
import scriptApi from "../../api/script";
import textApi from "../../api/text";
import soundApi from "../../api/sound";

/* ui part ... */
import ScriptItem from "./scriptItem";
import TextItem from "./textItem";
import DeleteDialog from "../dialog/deleteDialog";
import EditDialog from "../dialog/editDialog";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

import style from "../../sass/vocabulary.module.sass";

interface IProps {
  vocabulary: Vocabulary;
  getVocabularyList: Function;
  mode: boolean;
  scriptName: string
}
const VocabularyItem = (props: IProps) => {
  const vId = props.vocabulary.id as number
  const checked = props.vocabulary.checked ===0 ? false : true 

  // console.log('cxxxx', checked)

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDelOpen, setIsDelOpen] = useState(false)
  const [scriptList, setScriptList] = useState<Script[]>([])
  const [textList, setTextList] = useState<Text[]>([])
  const [isCloseOn, setIsCloseOn] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  useEffect(() => {
    getTextList();
  }, [props.vocabulary]);

  const getTextList = async () => {
    const vId = props.vocabulary.id as number;
    const res = await textApi.getText(vId);
    // console.log('textList', res)
    setTextList(res.data);
  };

  const editClick = () => {
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const editVocabulary = async (text: string) => {
    console.log(text);
    try {
      const id = props.vocabulary.id as number;
      const res = await vocabularyApi.update(id, text);
      closeEdit();
      props.getVocabularyList();
    } catch (e) {}
  };

  const deleteClick = () => {
    setIsDelOpen(true);
  };

  const closeDelete = () => {
    setIsDelOpen(false);
  };

  const deleteVocabulary = async () => {
    try {
      const res = await vocabularyApi.del(vId);
      closeDelete();
      props.getVocabularyList();
    } catch (e) {}
  };

  const getScriptClick = async () => {
    // const name = 'the big bang theory'
    // const name = 'friends'
    try {
      const res = await scriptApi.getScript(
        props.scriptName,
        props.vocabulary.vocabulary
      );
      setScriptList(res.data);
      setIsCloseOn(true);
    } catch (e) {}
  };

  const playSound = async () => {
    const res = await soundApi.playSound(props.vocabulary.vocabulary);
    // console.log(res);
    const blob = new Blob([res], { type: "audio/ogg" });
    // console.log("bbb", blob);
    const audio = new Audio();
    audio.src = URL.createObjectURL(blob);
    audio.load();
    audio.play();
  };

  const close = () => {
    setScriptList([]);
    setIsCloseOn(false);
  };

  const modeUpdate = async() => {
    // console.log('upup')
    const res = await vocabularyApi.checkedUpdate(!isChecked, vId)
    setIsChecked(!isChecked)
  }

  const checkState = () => {
    if(props.mode) {
      if(!isChecked) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }

  return (
    <div>
      {checkState() && <div>
        <div className={style.vocabularyItemWrapper}>
          <div className={style.switchWrapper}>
            <Switch checked={isChecked} onClick={modeUpdate}></Switch>
          </div>
          <div className={style.textWrapper}>{props.vocabulary.vocabulary}</div>
          <div className="actionWeapper">
            <IconButton onClick={editClick}>
              <EditIcon></EditIcon>
            </IconButton>
            <IconButton onClick={deleteClick}>
              <DeleteOutlineIcon></DeleteOutlineIcon>
            </IconButton>
            <IconButton onClick={getScriptClick}>
              <TextFieldsIcon></TextFieldsIcon>
            </IconButton>
            <IconButton onClick={playSound}>
              <PlayCircleFilledIcon></PlayCircleFilledIcon>
            </IconButton>
          </div>
        </div>
        <div>
          {textList.map((item, index) => {
            return (
              <TextItem
                key={index}
                text={item}
                getTextList={getTextList}
              ></TextItem>
            );
          })}
        </div>

        <div>
          {scriptList.map((item, index) => {
            return (
              <ScriptItem
                key={index}
                script={item}
                vId={vId}
                getTextList={getTextList}
              ></ScriptItem>
            );
          })}
        </div>
        <div className={style.scriptCloseBtn}>
          {isCloseOn && (
            <Button color="secondary" variant="contained" onClick={close}>
              close
            </Button>
          )}
        </div>
        <DeleteDialog
          close={closeDelete}
          ok={deleteVocabulary}
          isOpen={isDelOpen}
        ></DeleteDialog>
        <EditDialog
          close={closeEdit}
          ok={editVocabulary}
          isOpen={isEditOpen}
        ></EditDialog>
      </div>}
      
    </div>
  );
};

export default VocabularyItem;
