import "./component.css"

function Components({color , width , opacity}){
    return(
        <>
        <label>Paint color : </label>
        <input onChange={(e)=>color(e.target.value)} type="color"></input>
        <label>Brush-width : </label>
        <input onChange={(e)=>width(e.target.value)} type="range"></input>
         <label>Brush-opacity : </label>
        <input onChange={(e)=>opacity(e.target.value)} type="range"></input>
        </>
    )
}
export default Components