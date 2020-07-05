import React,{Component} from "react";
import TodoList from "./Components/TodoList";
import Card from "./Components/Card";
import {NavLink,Route,Redirect} from "react-router-dom";
import './App.css'
import Basket from "./Components/Basket";
import Actual from "./Components/Actual";

export default class MainComponent extends Component{
    state={
        val1:'',
        val2:'',
        val3:'',
        clas1:'',
        clas2:'',
        arr:[
            {id:0,name:'Tsiran',surName:100,btn:false,count:10,magCount:0,magPrice:1},
            {id:1,name:'Banan',surName:200,btn:false,count:15,magCount:0,magPrice:1},
            {id:2,name:'Xndzor',surName:300,btn:false,count:20,magCount:0,magPrice:1},
        ],
        magArr:[],
        classss:['font','foo'],
        total:0,
    }

    ChangeOne =(e)=>{

        this.setState({
            val1:e.target.value
        })


    }
    ChangeTwo=(e)=>{
        this.setState({
            val2:e.target.value
        })

    }
    Changetree=(e)=>{
        this.setState({
            val3:e.target.value
        })
    }
    Click =()=>{
        var x = {
            id:Date.now(),
            name:this.state.val1,
            surName:parseInt(this.state.val2),
            count:parseInt(this.state.val3),
            magCount:0,
            magPrice:1,
            btn:false,
        }
        var a = this.state.arr.find( i => i.name === x.name && i.surName === x.surName)
        if(a === undefined){
            this.state.arr.unshift(x)
        }
        this.setState({
            val1:'',
            val2:'',
            val3:'',
        })

    }

    Delete=(i,e)=>{
        var a = this.state.magArr.find(h => h === e)
        if (a !== undefined){
            this.state.magArr.splice(this.state.magArr.indexOf(a),1)
            this.setState({})
        }
        this.state.arr.splice(i,1)
        this.setState({})

    }
    btnDel =(i,e)=>{
        this.state.magArr.splice(i,1)
        var x = this.state.arr.find(k => k === e)
        if(x !== undefined){

            e.count += e.magCount
            e.magCount = 0
            this.setState({})

        }else{

            e.count += e.magCount
            this.state.arr.push(e)
            this.setState({})

        }
        this.setState({})
    }

    Add=(elem,i)=>{
        var x = this.state.magArr.find(k => k === elem)
    console.log(x)
        if(x === undefined){
            elem.count --
            elem.magCount ++
            elem.magPrice = elem.magCount * elem.surName
            this.state.magArr.push(elem)
            this.setState({})

        }else{
            elem.count --
            elem.magCount ++
            elem.magPrice = elem.magCount * elem.surName
            this.setState({})
        }
        if(elem.count === 0 ){
            this.state.arr.splice(i,1)
            this.setState({})
        }


    }
    Actual =(i)=>{
        this.state.arr[i].btn = !this.state.arr[i].btn
        this.setState({})
    }

    render() {
        return(
            <div>


                <nav>
                    <ul>
                        <li>
                            <NavLink exact to = {'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = {'/actual'}>Actual</NavLink>
                        </li>
                        <li>
                            <NavLink to = {'/basket'}>
                                Basket
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={'Main'}>
                    <Route exact path = {'/'}>
                        <div>

                            <h2>USERS</h2>
                            <TodoList
                                val1 = {this.state.val1}
                                val2 = {this.state.val2}
                                val3={this.state.val3}
                                ChangeOne={this.ChangeOne}
                                ChangeTwo = {this.ChangeTwo}
                                Changetree = {this.Changetree}
                                Click = {this.Click}
                                clas1={this.state.clas1}
                                clas2={this.state.clas2}
                            />
                            <Card
                                Actual = { this.Actual }
                                Add = {this.Add}
                                Delete = { this.Delete }
                                arr = { this.state.arr}
                            />
                        </div>
                    </Route>
                    <Route path = {'/basket'}>
                            <Basket total={this.state.total} btnDel={this.btnDel} magArr = {this.state.magArr}/>
                    </Route>
                    <Route path={'/actual'} >
                         <Actual arr={this.state.arr} />
                    </Route>
                    <Redirect to = {'/'}/>
                </div>

            </div>

        )
    }
}


