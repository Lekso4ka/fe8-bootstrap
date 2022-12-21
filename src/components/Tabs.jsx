import React, {useState} from "react";
import {} from "react-bootstrap-icons";
import {Container} from "react-bootstrap";
const data = [<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda eius, praesentium possimus similique ducimus ipsam laudantium atque beatae adipisci.</p>,
<p>Architecto, unde ipsum neque porro quidem hic esse illum quos rem voluptate soluta assumenda deserunt ratione et ullam molestias facilis?</p>,
<p>Dolor adipisci sed ad dignissimos, voluptatum quam praesentium magni iure perspiciatis accusantium hic animi aspernatur quis reiciendis quidem ducimus labore?</p>,
<p>Cupiditate maiores consequatur tempora reprehenderit, voluptate facere dolores temporibus vero. Ut et numquam repellendus quibusdam omnis non magnam earum harum.</p>,
<p>Ad, officiis. Fugiat quis delectus repudiandae amet veritatis quod! Necessitatibus facere soluta quia. Ipsa omnis ex optio exercitationem eaque vero.</p>]

export default () => {
    const names = data.map((el, i) => `Tab ${i + 1}`);
    // const [active, setActive] = useState(0);
    const [active, setActive] = useState(names[0]);


    const handler = (e) => {
        setActive(e.target.textContent);
    }
    // return <>
    //     <h2>Вкладочки</h2>
    //     <div className="tabs-container">
    //         {/* p*5>lorem20 */}
    //         <div className="tabs-nav">
    //             {names.map((el, i) => <button 
    //                 key={i} 
    //                 onClick={e => setActive(i)}
    //             className={active === i ? "active" : ""}>{el}</button>)}
    //         </div>
    //         {data.map((el, i) => <div 
    //             className="tabs-data" 
    //             style={{display: active === i ? "block" : "none"}}
    //         >
    //             <h3>{names[i]}</h3>
    //             {el}
    //         </div>)}
    //     </div>
    // </>
    return <Container>
        <h2>Вкладочки</h2>
        <div className="tabs-container">
            {/* p*5>lorem20 */}
            <div className="tabs-nav">
                {names.map((el, i) => <button 
                    key={i} 
                    onClick={handler}
                className={active === el ? "active" : ""}>{el}</button>)}
            </div>
            {data.map((el, i) => <div 
                className="tabs-data" 
                style={{display: active === names[i] ? "block" : "none"}}
            >
                <h3>{names[i]}</h3>
                {el}
            </div>)}
        </div>
    </Container>

}
