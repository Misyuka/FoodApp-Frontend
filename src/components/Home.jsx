import React from "react";
import { Link } from "react-router-dom";
import vertical from "../assets/img/vertical.png";
import Tacos from "../assets/img/taco.jpg";
import FruitCups from "../assets/img/fruitcup.png";
import Hotdogs from "../assets/img/hotdogs.jpg";
import IceCream from "../assets/img/Ice Cream.png";
import Churros from "../assets/img/churros.png";
import Corn from "../assets/img/corn.jpg";
import Lemondae from "../assets/img/lemondae.png";
import Soda from "../assets/img/soda.jpeg";
import Coconut from "../assets/img/coconut.jpeg";

const Home = () => {
    var selected = "all";
    const selectCategory = (data) => {
        document.getElementById("search").value = "";
        document.getElementById(selected).classList.remove("active");
        document.getElementById(data).classList.add("active");
        selected = data;
        let searchKeyWord = data.toUpperCase();
        let searchField = document.getElementById("item_field");
        let searchItem = searchField.getElementsByTagName("div");
        for (let i = 0; i < searchItem.length; i++) {
            let itemContent = searchItem[i].getElementsByTagName("p")[0];
            if (itemContent) {
                let contentValue = itemContent.textContent || itemContent.innerText;
                if (contentValue.toUpperCase().indexOf(searchKeyWord) > -1 || data === "all") {
                    searchItem[i].style.display = "";
                } else {
                    searchItem[i].style.display = "none";
                }
            }
        }
    }
    const searchFunc = (keyword) => {
        let searchKeyWord = keyword.toUpperCase();
        let searchField = document.getElementById("item_field");
        let searchItem = searchField.getElementsByTagName("div");
        for (let i = 0; i < searchItem.length; i++) {
            let itemContent = searchItem[i].getElementsByTagName("span")[0];
            if (itemContent) {
                let contentValue = itemContent.textContent || itemContent.innerText;
                if (contentValue.toUpperCase().indexOf(searchKeyWord) > -1) {
                    searchItem[i].style.display = "";
                } else {
                    searchItem[i].style.display = "none";
                }
            }
        }
    }

    return (
        <div className="page-container">
            <div className="layout-container">
                <div className="header">
                    <div className="layout">
                        <div className="btn flex">Long Beach, CA</div>
                        <div className="question-field">
                            <div>What Are You In The Mood</div>
                            <div>For Today?</div>
                        </div>
                        <div className="search-field">
                            <i className="fa fa-search"></i>
                            <input id="search" type="text" onKeyUp={(e) => searchFunc(e.target.value)} placeholder="Search For Vendors Near You" />
                            <img src={vertical} alt="img" />
                        </div>
                        <div className="categories">
                            Categories
                        </div>
                    </div>
                    <div className="body">
                        <div className="tab-field">
                            <div onClick={() => selectCategory("all")} className="active" id="all">All</div>
                            <div onClick={() => selectCategory("food")} id="food">Food</div>
                            <div onClick={() => selectCategory("dessert")} id="dessert">Dessert</div>
                            <div onClick={() => selectCategory("drinks")} id="drinks">Drinks</div>
                        </div>
                        <div className="item-field" id="item_field">
                            <div className="card">
                                <img src={Tacos} alt="img" />
                                <span>Tacos</span>
                                <p>food</p>
                            </div>
                            <div className="card">
                                <img src={FruitCups} alt="img" />
                                <span>Fruit Cups</span>
                                <p>dessert</p>
                            </div>
                            <div className="card">
                                <img src={Hotdogs} alt="img" />
                                <span>Hot dogs</span>
                                <p>food</p>
                            </div>
                            <div className="card">
                                <img src={IceCream} alt="img" />
                                <span>Ice Cream</span>
                                <p>dessert</p>
                            </div>
                            <div className="card">
                                <img src={Churros} alt="img" />
                                <span>Churros</span>
                                <p>dessert</p>
                            </div>
                            <div className="card">
                                <img src={Corn} alt="img" />
                                <span>Corn</span>
                                <p>food</p>
                            </div>
                            <div className="card">
                                <img src={Lemondae} alt="img" />
                                <span>Lemondae</span>
                                <p>drinks</p>
                            </div>
                            <div className="card">
                                <img src={Soda} alt="img" />
                                <span>Soda</span>
                                <p>drinks</p>
                            </div>
                            <div className="card">
                                <img src={Coconut} alt="img" />
                                <span>Coconut</span>
                                <p>drinks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Link to="/" ><i className="fas fa-home selected"></i></Link>
                    <Link to="/Map"><i className="fas fa-map-marker-alt"></i></Link>
                    <Link to="/User"><i className="fas fa-user-alt"></i></Link>
                    <Link to="/Chatting"><i className="fas fa-comments"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;