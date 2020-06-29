import React, {useState,useEffect} from 'react';
import Card from "./card";
import "./App.scss";
import MainContent from "./MainContent"
// Start App

const App=(props)=>{
    const [datas, setDatas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [choosencarts, setChoosencarts] = useState([]);
    const [myfavCards, setmyfavCards] = useState([]);

    const showCart = (e) => {
        const choosencart = datas.filter((card) => parseInt(e.target.parentElement.parentElement.getAttribute('id')) === card.id);
        choosencarts.push(choosencart);
        setShowModal(!false);
        console.log(showModal);
        setChoosencarts (choosencarts);
        localStorage.setItem("Cards", JSON.stringify(choosencarts));
    };
    const deletedcart=(e)=>{


        const id=parseInt(e.target.parentElement.parentElement.getAttribute('id')) ;
        const choosencart = datas.filter((card) => id === card.id);
        const i= choosencarts.indexOf(choosencart);
        choosencarts.splice(i,1);
        e.target.parentElement.parentElement.parentElement.remove();
        // setShowModal(true);
        setChoosencarts (choosencarts);
        localStorage.setItem("Cards", JSON.stringify(choosencarts));
        console.log(choosencarts);
    };
    const addFavorites = (e) => {
        const myfavCard = datas.filter((card) => parseInt(e.target.parentElement.parentElement.parentElement.getAttribute('id')) === card.id);
        if (!e.target.classList.contains("choosen")) {
            e.target.className += " choosen";
            myfavCards.push(myfavCard);
            setmyfavCards(myfavCards);
            console.log(myfavCards);
            localStorage.setItem("Favorites", JSON.stringify(myfavCards));
        }
        else {
            e.target.classList.remove("choosen");
        }
        console.log(myfavCard);
        console.log(e.target.parentElement.parentElement.parentElement);
    };
    const hideCard = () => {
        setShowModal(false);
    };

    const outCartHide = (e) => {
        // console.log('modal');
            setShowModal(true);
        // console.log(showModal)
    };

    useEffect(() => {

        fetch("/data.json").then(r => r.json())
            .then(data => {
                setDatas(data);
            });
    },[datas.length]);
    const cards = datas.map((item) => {
        return <Card data={item} key={item.id} openCart={showCart}  handleFav={addFavorites}/>;
    });
    console.log(cards);

    return (
        <div >

            <MainContent
                cards={cards}
                datas={datas}
                outCartHide ={outCartHide}
                hideCard ={hideCard}
                showModal={showModal}
                myfavCards={myfavCards}
                choosencarts ={ choosencarts }
                deletedcart={deletedcart}/>
        </div>
    );
}

export default App;
