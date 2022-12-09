import { IState as IProps } from "../App"
// if i do not import IState I should rewrite it
/* interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
} */

const List:React.FC<IProps> = ({people}) => {

    const renderList = ():JSX.Element[] => {
        return people.map((person, index) => {
            return(
                <li key={index} className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt={person.name}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p className="List-age">{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List

//   >>> I could write the following <<<
// but check the type for people

/* export default function List(people:IProps) {

    const renderList = () => {
        people.map(person => {
            return(
                <li className="List">
                    <div className="List-header">
                        <img src={person.url} alt={person.name}/>
                    </div>
                </li>
            )
        })
    }
    return (
        <div>I am a list</div>
    )
} */
