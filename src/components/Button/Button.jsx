import "./Button.css"

function Btn({btnLable}) {
    // const handleButton => {};
    return(
        <div>
            <button className="btn">{btnLable}</button>
        </div>
    )
};

export default Btn;