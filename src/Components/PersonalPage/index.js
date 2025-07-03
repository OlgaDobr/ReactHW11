import React from "react";

const initData = {
    name: 'name',
    city: "city",
    email: "email@example.com",
}
class PersonalPage extends React.Component {

    constructor() {
        super()
        this.state = {
            name: initData.name,
            city: initData.city,
            email: initData.email,
            isEdit: false
        }
    }

    render() {
        return(<div>
            PersonalPage
            <div>
                <label>   personal info:</label>
                <div>name: 
                    <input value={this.state.name} name='name' disabled={!this.state.isEdit} onChange={(e)=>this.changeHanler(e)}/>
                </div>
                <div>city: 
                     <input value={this.state.city} name='city' disabled={!this.state.isEdit} onChange={(e)=>this.changeHanler(e)}/>
                </div>
                <div>email: 
                     <input value={this.state.email} name='email'  disabled={!this.state.isEdit} onChange={(e)=>this.changeHanler(e)}/>
                </div>
                <div>
                    <button onClick={()=>this.editToggler()}> {this.state.isEdit ? 'save' : 'edit fields'}</button>
                    <button onClick={()=>this.clear()}> clear</button>
                </div>
            </div>
        </div>)
    }

    editToggler() {
        this.setState({isEdit: !this.state.isEdit})
    }

    changeHanler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    clear() {
        this.setState({
            name: initData.name,
            city: initData.city,
            email: initData.email
        })
    }
}

export default PersonalPage;