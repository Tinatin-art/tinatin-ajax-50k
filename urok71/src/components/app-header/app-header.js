import React from 'react';
import "./app-header.css"

import styled from 'styled-components'
const AppDev = styled.div

`
display: flex;
justify-content: space-between;
align-items: center;

`

const AppDev2 = styled(AppDev)
`background-color: red`

const AppHeader = () => {
    return (
        <AppDev>
            <AppDev2>Hello</AppDev2>
            <h1>Omurova Tinatin</h1>
            <h2>3 записи, из них 0 понравилось</h2>
        </AppDev>
    )
}


export default AppHeader