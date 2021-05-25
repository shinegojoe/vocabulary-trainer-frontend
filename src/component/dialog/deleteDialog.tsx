import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import style from '../../sass/dialog/delete.module.sass'


interface IProps {
    close: Function
    ok: Function
    isOpen: boolean
}
const DeleteDialog = (props: IProps) => {
    // const handleClose = () => {
    //     props.closeDelete()
    // }
    const okClick = async() => {
        props.ok()
    }

    const cancelClick = () => {
        props.close()
    }



    // console.log('style', style)
    return (
        <div className={style.xxContainer}>
            <Dialog  open={props.isOpen}>
                <DialogTitle>Set backup account</DialogTitle>
                <div className={style.btnWrapper}>
                    <Button onClick={cancelClick}>cancel</Button>
                    <Button onClick={okClick}>ok</Button>
                </div>
        
            </Dialog>

        </div>
    )
}

export default DeleteDialog