import { useState, useEffect } from 'react'
import pageApi from '../../api/page'
import { Page } from '../../type/api.type'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PageItem from './pageItem'
import style from '../../sass/page.module.sass'
import { withRouter, RouterProps } from "react-router-dom"
import { makeStyles, withStyles } from '@material-ui/core/styles'


const mystyle = makeStyles({
  root: {
    color: "#E9E9E9",
    // backgroundColor: "DodgerBlue",
  },
  label: {
    textTransform: 'capitalize'
  }
})

const inputText = makeStyles({
  root: {
    color: 'red',
  },
  colorSecondary: {
    borderBottomColor: 'red'
  }
  
})

const NewBtn = withStyles({
  root: {
    // backgroundColor: 'red',
  }
})(TextField)


const Home = (props: RouterProps) => {
    console.log('home', props)
    const [ pageList, setPageList ] = useState<Page[]>([])
    const [ pageName, setPageName ] = useState('')

    useEffect(()=> {
        getPages()
    }, [])

    const getPages = async()=> {
        const res = await pageApi.list()
        console.log('res', res)
        setPageList(res.data)
    }


    const inputUpdate = (e: any) => {
        const val: string = e.target.value
        // console.log('val', val)
        setPageName(val)
    }

    const addClick = async() => {
        const page: Page = {
            name: pageName
        }
        const res = await pageApi.add(page)
        getPages()
    }

    const pageClick = (page: Page) => {
        console.log('xxx', page.id)
        props.history.push({
            pathname: '/page',
            state:  page
        })
    }

    const cc = mystyle() 

    const xx = inputText() as any

   
    

    return (
        <div className={style.pageContainer}>
            <div className={style.addWrapper}>
                <TextField className="MuiInput-underline MuiFormLabel-root" color='secondary' onChange={inputUpdate} id="add-page" label="new page"/>
                <Button className="qq123" data-testId="add-page-btn" variant="contained" color='secondary' onClick={addClick}>add</Button>
            </div>
            
            <div  className={style.pageWrapper}>
                {pageList.map((item: Page, index: number)=> {
                    return <div key={index} onClick={()=> {pageClick(item)}}>
                            <PageItem  index={index} page={item} getPages={getPages} ></PageItem>
                        </div>
                })}
            </div>
        </div>
    )
}

export default withRouter(Home)

