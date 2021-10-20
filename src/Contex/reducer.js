import React,{useEffect} from "react";
export let authuser=[];


export function reducer(state, action) {
    switch (action.type) {
        case "AUTH-USER": {
            return {
                ...state,
                authuser:action.payload
            }
        }
        default:
            return state;
            
        }
    }
    // [{uid}]