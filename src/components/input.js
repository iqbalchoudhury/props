import { Fragment } from "react";

export function Input() {
    return(
    <Fragment>
    <div><input type = 'number' placeholder='mobile ...'></input></div><br/>
    <div><input type = 'password' placeholder='password ...'></input></div><br/>
    </Fragment>
    )
}