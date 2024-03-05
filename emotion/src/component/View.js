 /** @jsxImportSource @emotion/react */
 
 const bgColor = {
    white: "#fff",
    pink: "pink",
    yellow: "yellow",
    green: "green",
 }

function View({bg = 'white'}){

    return(
        <div
        css ={{
            width: "300px",
            border: "1px solid #333",
            height: "300px",
            margin: "0 auto",
            backgroundColor: bgColor[bg]
        }}>
            View 상자
        </div>
    )
};

export default View;