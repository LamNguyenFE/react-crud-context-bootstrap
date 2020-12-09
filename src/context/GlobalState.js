import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    cats: [
        {
            id: "F3kAnldw1",
            name: "Cat 1",
            image: "",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw2",
            name: "Cat 2",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw3",
            name: "Cat 3",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw4",
            name: "Cat 4",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw5",
            name: "Cat 5",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw6",
            name: "Cat 6",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw7",
            name: "Cat 7",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
        {
            id: "F3kAnldw8",
            name: "Cat 8",
            image: "https://loremflickr.com/320/240",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit beatae quaerat, incidunt voluptatibus et explicabo fugiat aut dolor voluptatem, sit quasi nostrum? Nisi eum, aut iste commodi explicabo earum officiis.",
            price: 2000
        },
    ]
}


//Create Context
export const GlobalContext = createContext(initialState);




//Provider Component
export const GlobalProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(AppReducer, initialState)

    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem("cats");

        console.log('localData', localData);

        const newAr = localData
            ? JSON.parse(localData).map(cat => ({

                id: cat.id,
                name: cat.name,
                image: cat.image,
                description: cat.description,
                price: cat.price,

            }))
            : [];
        const newState = {};
        newState.cats = newAr;

        console.log('newAr', newAr);

        return localData ? newState : initialState;
    });

    useEffect(() => {
        console.log(state.cats);
        localStorage.setItem("cats", JSON.stringify(state.cats));
    }, [state.cats]);


    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // localStorage.clear("cartItems");
    //cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") 
    //Action creater
    const removeCat = (id) => {
        dispatch({
            type: 'REMOVE_CAT',
            payload: id
        })
    }


    const addCat = (cat) => {
        dispatch({
            type: 'ADD_CAT',
            payload: cat
        })
    }

    const editCat = (cat) => {
        dispatch({
            type: 'EDIT_CAT',
            payload: cat
        })
    }

    return (
        <GlobalContext.Provider value={{

            cats: state.cats,
            removeCat,
            addCat,
            editCat,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


