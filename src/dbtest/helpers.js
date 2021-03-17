import React, {Component} from 'react';
import Localbase from 'localbase';
import { render } from '@testing-library/react';

let db = new Localbase('Mani')
//deletes all boards
export function deleteCollection(){
    db.collection('boards').delete()
    db.collection('boards').get().then(b => {
        console.log(b)
    })

}
//delets the entire database
export function deletedatabase(){
    db.delete()
    db.collection('boards').get().then(b => {
        console.log(b)
    })

}
//adds a board to the database
export function addBoardToDB(){
    db.collection('boards').get().then(arr =>{
        db.collection('boards').add({
            id: arr.length + 1,
            title: 'Board',
            notes:[{}]
        })
    })
}
//deletes a board from the database with the given ID
export function deleteBoardFromDB(givenId){
    db.collection('boards').get().then(arr =>{
        if(givenId<=arr.length){
        for(var i=givenId+1; i<=arr.length; i++) {
            db.collection('boards').doc({id:i}).update({
                id: i-1
            })

        }
        db.collection('boards').doc({id:givenId}).delete()
        }
        else{
            console.log("Error!")
        }
    })
    
}
export function addBoardToFE(givenId, name){
    addBoardToDB()
    
    
}
