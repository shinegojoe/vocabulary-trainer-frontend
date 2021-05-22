import { Route } from "react-router-dom"
import PageMain from "../component/page/main"
import Home from '../component/main/main'

const Router = () => {
    return (
        <div>

            <Route path='/page' component={PageMain}></Route>
            <Route exact path='/' component={Home}></Route>
        </div>
    )
}

export { Router }