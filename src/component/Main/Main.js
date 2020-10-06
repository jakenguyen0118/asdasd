import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import ChampionList from '../ChampionList/ChampionList'
import Champion from '../Champion/Champion'

const Main = () => {

    const [champClicked, setChampClicked] = useState(null)

    const handleClick = champ => {
        console.log('clicked')
        setChampClicked(champ)
    }

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <ChampionList />
                </Route>
                <Route
                    path='/champions/:champ'
                    render={routerProps => (
                        <Champion
                        handleClick={handleClick}
                        {...routerProps} />
                    )}
                />
            </Switch>
        </>
    )
}

export default Main