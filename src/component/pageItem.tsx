import style from '../sass/page.module.sass'


const PageItem = (props: any)=> {

    const getImg = () => {
        const i = props.index % 7
        return `img_${i+1}.jpg`
    }
    return (
        <div className={style.pageItemWrapper}>
            <div className={style.imgWrapper}>
                <img src={getImg()}></img>
                <div className={style.pageName}>page name</div>
            </div>
        </div>
    )
}

export default PageItem