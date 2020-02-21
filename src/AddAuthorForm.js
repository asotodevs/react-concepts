import React from 'react';
import "./AddAuthorForm.css"




//El proposito de esta clase es permitir hacer el bind del component State
class AuthorForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {  //defaultState
            name: '',
            imageUrl:''
        };
        //Esto garantiza que el valor que se pase al metodo sea el msimo que se encuentra en el constructor
        this.onFieldChange = this.onFieldChange.bind(this);
        //Otro bainding para manejar el boton de submit
        this.handleSubmit = this.handleSubmit.bind(this);

}
handleSubmit(event){
    //Evita que el formaulario realice sumbite por defecto
    event.preventDefault();
    this.props.onAddAuthor(this.state);

}

onFieldChange(event) {
    this.setState({[event.target.name]: event.target.value});
}


    render(){
       return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm_input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}/>
            </div>

            <div className="AddAuthorForm_input">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
            </div>

            <input type="submit" value="Add"/>
        </form>
    }
}



function AddAuthorForm(match, onAddAuthor){
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
       <AuthorForm onAddAuthor={onAddAuthor}/>

    </div>

}

export default AddAuthorForm;