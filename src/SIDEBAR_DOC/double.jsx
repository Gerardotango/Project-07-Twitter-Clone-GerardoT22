export default function Double({texte , img}) {
    return (
        <div className="double">
            <h4> {texte} </h4>
            <img src={img} alt="" />
        </div>
    )
}