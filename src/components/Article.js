import './Article.css';
import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return (
            <div id="article">
                <div className="imgArt">
                    <img src="../tartines.jpeg" alt="" height="200"/>
                </div>
                <div className="textArt">
                    <h1>Mon premier article</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate deserunt rem soluta molestiae ipsa, animi error quae aliquam laudantium eligendi reiciendis odio perferendis repudiandae ratione in est. Dicta, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, voluptates? Labore natus veritatis, facilis nihil rem corrupti libero beatae eum laboriosam atque harum magni, eaque incidunt repellat temporibus assumenda doloribus?</p>
                </div>
            </div>
        )
    }
}

export default Article
