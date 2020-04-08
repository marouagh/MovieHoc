import React, { Component } from 'react'
import MovieList from './MovieList'
import {moviesData} from './Data'
import RatingFilter from './RatingFilter'
import NameFilter from './NameFilter'
import AddMovie from './AddMovie'
import WithLoading from './WithLoading'


const MovieListWithLoading=WithLoading(MovieList)
export default class MovieApp extends Component {
    state={
        nameSearch : '',
        rateSearch:1,
        dataList: moviesData,
        isLoading: false,
    }
    
    componentDidMount = () =>{
        this.setState({isLoading: true})
        setTimeout(()=>this.setState({isLoading: false}),3000)
    }
    handleChangeName = myInput =>{
        this.setState({nameSearch: myInput})
    }
    handleChangeRating = (myRating) =>{
        this.setState({rateSearch : myRating})

    }
    AddNewMovie = newMovie =>{
        this.setState({dataList: [...this.state.dataList, newMovie]})
    }
    render() {
        return (
            <div>
               
                
                <div className="input-group">     
                <NameFilter handleChangeName={this.handleChangeName}/>
                <span className="input-group-text" id="basic-addon2"><RatingFilter stars={this.state.rateSearch} handleChangeRating={this.handleChangeRating}/></span>
                </div>
                
                <MovieListWithLoading isLoading={this.state.isLoading} movies={this.state.dataList.filter((el) =>el.rate >= this.state.rateSearch).filter((elt) => elt.title.toLowerCase().includes(this.state.nameSearch.toLowerCase().trim()))}>
                </MovieListWithLoading>
                <AddMovie Loading={this.state.isLoading} addMovie={this.AddNewMovie}/>
                
                
                
            </div>
        )
    }
}
