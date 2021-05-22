import { useState } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


interface IProps {
    isOpen: boolean
    ok: Function
    close: Function
}

const EditDialog = (props: IProps) => {
    const [ text, setText ] = useState('')

    const textFieldUpdate = (e: any) => {
        const val = e.target.value
        setText(val)
    }

    const okClick = () => {
        props.ok(text)
    }

    const cancelClick = () => {
        props.close()
    }

    return (
        <div>
        <Dialog open={props.isOpen}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <TextField onChange={textFieldUpdate}></TextField>
            <div>
                <Button onClick={cancelClick}>cancel</Button>
                <Button onClick={okClick}>ok</Button>
            </div>
        </Dialog>
        </div>
    )
}

export default EditDialog