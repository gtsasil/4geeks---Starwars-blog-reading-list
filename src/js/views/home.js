import React from "react";
import { Heart} from "@phosphor-icons/react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="card" style={{width: '18rem'}}>
		<img src={rigoImage} class="card-img-top" atl=""/>
		<div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	<Link to="/demo">
		<a href="#" className="btn btn-primary">Leanr More!</a>
	</Link>
	<Heart className="heart" size={32} />

    
  </div>
	</div>

);
