import "./Button.css"

function Btn({btnLable}) {
    // const handleButton => {};
    return(
        <div>
            <button className="btn" style={{ cursor: "pointer" }}>{btnLable}</button>
        </div>
    )
};

export default Btn;