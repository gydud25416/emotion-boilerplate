 /** @jsxImportSource @emotion/react */


 
function Button({  colorChange}){

    return(
         <div>
        <button onClick={()=>{colorChange('pink')}}
        css={{
            marginRight: "5px",
            marginTop: "30px",
            
        }}>
           분홍
        </button>
        <button onClick={()=>{colorChange('yellow')}}
        css={{
            marginRight: "5px",
            marginTop: "30px"
        }}>
           노랑
        </button>
        <button onClick={()=>{colorChange('green')}}
        css={{
            marginTop: "30px"
        }}>
           초록
        </button>
        </div>
    )
};

export default Button;