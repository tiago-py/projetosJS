type Props ={
    label: string;
    color: string;
}
export const Button = ({label, color}: Props)=>{
    return(
        <button
        className={`${color}px-10 py-5`}
        >{label}</button>
    )
}