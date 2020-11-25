import React from 'react';
import './App.css';
import { store } from './index'
import { connect } from 'react-redux'

function App(props){

  // state = {
  //   likes: 0,
  //   text: '',
  //   darkMode: false,
  //   thangs: []
  // }

  // The TYPE of change I want to happen
  // Any data I need to make this change happen - PAYLOAD
  // action = {type: "CHANGE_USER_NAME", payload: {user_id: 6, username: "The Cheese"}}
  // reducer = (action) => {
  //   switch (action.type){
  //     case "LIKE":
  //       return ({ likes: this.state.likes + 1 });
  //     case "DISLIKE":
  //       return ({ likes: this.state.likes - 1 });
  //     case "TOGGLE":
  //       return ({ darkMode: !this.state.darkMode });
  //     case "SUBMIT":
  //       return ({
  //         text: '',
  //         thangs: [this.state.text, ...this.state.thangs]
  //       })
  //     case "FORM_CHANGE":
  //       return ({ [action.payload.name]: action.payload.value })
  //     default:
  //       return {...this.state}
  //   }
  // }

  // dispatch = (action) => this.setState(this.reducer(action))


  // like = () => {
  //   this.setState({ likes: this.state.likes + 1 })
  // }

  // dislike = () => {
  //   this.setState({ likes: this.state.likes - 1 })
  // }

  // toggle = () => {
  //   this.setState({ darkMode: !this.state.darkMode })
  // }

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // addText = () => {
  //   this.setState({
  //     text: '',
  //     thangs: [this.state.text, ...this.state.thangs]
  //   })
  // }

    return (
      <div className={"App" + (props.darkMode ? " dark" : "")}>
        <button onClick={props.toggle}>Dark mode</button>
        <h3>{props.text}</h3>
        <input
          name="text"
          value={props.text}
          onChange={props.handleChange}/>
        <button onClick={props.submit}>Add!</button>

        <h4>{props.likes} likes</h4>
        <button onClick={props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          props.things.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
}

// use this to take the keys you want from our redux state, and put them in this component's props
const mapStateToProps = (state) => {
  let wellLiked = state.likes > 5
  return {
    wellLiked: wellLiked,
    likes: state.likes,
    text: state.text,
    darkMode: state.darkMode,
    things: state.thangs
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({type: "TOGGLE"}),
    like: () => dispatch({type: "LIKE"}),
    dislike: () => dispatch({type: "DISLIKE"}),
    submit: () => dispatch({type: "SUBMIT"}),
    handleChange: (event) => dispatch({type: "FORM_CHANGE", payload: event.target})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
