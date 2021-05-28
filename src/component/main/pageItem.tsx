import { Page } from '../../type/api.type'
import pageApi from '../../api/page'
import style from '../../sass/page.module.sass'
import CloseIcon from '@material-ui/icons/Close'

interface IProps {
    page: Page
    index: number,
    getPages: Function
}

const PageItem = (props: IProps)=> {

    const getImg = () => {
        const i = props.index % 7
        return `img_${i+1}.jpg`
    }

    const delClick = async(e: any) => {
        console.log('dele')
        e.stopPropagation()

        const pageId = props.page.id as number
        const res = await pageApi.del(pageId)
        props.getPages()

    }
    return (
        <div className={style.pageItemWrapper}>
            <div className={style.imgWrapper}>
                <img src={getImg()}></img>
                <div className={style.pageName}>{props.page.name}</div>
                <div onClick={delClick} className={style.closeBtnWrapper}>
                    <CloseIcon></CloseIcon>
                </div>
            </div>
          
          
        </div>
    )
}

export default PageItem