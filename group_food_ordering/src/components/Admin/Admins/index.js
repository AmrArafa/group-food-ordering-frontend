import React, { Component } from 'react';
import './index.css';
import  Admin from '../Admin';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Admins extends Component {
    constructor(){
      super();
        this.state = {
            email: '',
            success: '',
           
          }
          this._handleChange = this._handleChange.bind(this)
    }
     componentWillMount(){
        this.props.getAdmins();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.success) {
        this.setState({email: ''});
        this.setState({success: 'SUCCESS'});

      }
    }

     _handleChange(e){
      this.setState({...this.state, [e.target.name] :e.target.value})
    }
    
    render(){
      console.log('this is Porps')
        console.log(this.props)
        const { admins, loading, error, deleteAdmin, addAdmin} = this.props;
        var admin = { admin: {
          email: this.state.email
        }
        }
        console.log('this is Admin')
        console.log(admin)
        if(loading){
            return (
                <p>Is loading</p>
                )            
        }else if(error){
            return (
                <p>{error}</p>
                )
        }else{
            return (
                <div className='admins'>
                    <from>
                        <div className="adminName">
                          <label>Invitation</label>
                          <input type="text" value={this.state.email} name="email" onChange={this._handleChange} />
                          <Button onClick={() => addAdmin(admin)}>Submit</Button>
                          <p>{this.state.success}</p>
                        </div>          
                    </from>
                    <p>Admins</p>
                    {admins.map((admin) => {
                     return  (
                        <Admin admin={admin} 
                        handleDelete={deleteAdmin}
                         />
                        )
                     })
                     }
                 </div>
                 
                )
        }
    }
}


