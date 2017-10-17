Actions://Actions are payloads of information that send data from your application to 
//your store. They are the only source of information for the store.
// we can send them to the store using dtore.dispatch 
ex:
export function increment(index) {     ////increment
    return {
    type: 'INCREMENT_LIKES',
    index
    }
}

///add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postID,
        author,
        comment
    }
}
///Action creators are exactly that—functions that create actions. 
//It's easy to conflate the terms “action” and “action creator,”

// Reducers : reducers will specify how the application state
 //changes in responce.
 // reducers takes in two things
 // 1. the action(info about what happend)
 // 2 .copy of curent state
ex: 
function posts(state = [], action) {  ///post reducer
    console.log(state, action);
    return state;
}

//store: store is the object that brings actions and reducers together
//store methods:
    //getState()      ---- Returns the current state tree of your application.
    //dispatch(action)-----  Dispatches an action. This is the only way to trigger a state change
    //subscribe(listener)-----It will be called any time an action is dispatched, and some part of the state tree may potentially have changed
    //replaceReducer(nextReducer)--- Replaces the reducer currently used by the store to calculate the state
