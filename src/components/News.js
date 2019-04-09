import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'
import axios from 'axios';
import uuidV4 from 'uuid/v4';


const news = (props) => {

    useEffect(() => {
        if (typeof props.news === 'undefined') {
            axios.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=5e61e110059c4a9c832c81d75fc8a6ee')
            .then(response => {
                console.log(response.data.articles)
                props.onGetNews(response.data.articles)
            })
        }
    }, [])

    let content = <p>Loading news</p>;
    if(typeof props.news !== 'undefined'){
        content = props.news.map(article => {
            return(
                <div key={uuidV4()}>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                </div>
            )
        })   
    }

    return (
        <div>
            {content}
        </div>

    );
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onGetNews: (newsData) => dispatch({type: actionTypes.STORE_NEWS, payload: newsData})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(news);