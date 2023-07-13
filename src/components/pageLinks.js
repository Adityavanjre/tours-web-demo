import { pageLinks } from "../data";

// const Pagelink = () => {
//     return (
//         <ul className="nav-links" id="nav-links">
//             {pageLinks.map((link) => {
//                 return (
//                     <li key={link.id}>
//                         <a href={link.href} className="nav-link"> {link.text} </a>
//                     </li>
//                 );
//             })}
//         </ul>
//     )
// }

const Pagelink = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.href} className={itemClass}> {link.text} </a>
                    </li>
                );
            })}
        </ul>
    )
}
export default Pagelink;