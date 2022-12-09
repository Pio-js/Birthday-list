import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age:"",
        img: "",
        note: ""
    });

    //adding void it will not return anything
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = ():void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
            //I do not need to put here note because is optional
        ) {
            return //in this case I do not need to return anything
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age), //the input field is a string so I need to change it to a number
                url: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age:"",
            img: "",
            note: ""
        });
    }

    function onlyNumbers(str: string) {
        return /^[0-9]+$/.test(str);
    }

    function checkNumbers(e: React.ChangeEvent<HTMLInputElement>): void {
        if (onlyNumbers(e.target.value)) {
            handleChange(e);
        } else {
            alert('Only numbers please!');
            setInput({
                ...input,
                age: ""
            })
        }
    }

    return (
        <form>
            <div className="AddToList">
                <input
                    type="text"
                    placeholder="Name"
                    className="AddToList-input"
                    value={input.name}
                    onChange={handleChange}
                    name="name"
                    required
                />
                <input
                    type="text"
                    id="age"
                    placeholder="Age"
                    className="AddToList-input"
                    value={input.age}
                    onChange={checkNumbers}
                    name="age"
                    pattern="[0-9]*"
                    maxLength={2}
                    required
                />
                <input
                    type="text"
                    placeholder="Image url"
                    className="AddToList-input"
                    value={input.img}
                    onChange={handleChange}
                    name="img"
                    required
                />
                <textarea
                    placeholder="Notes"
                    className="AddToList-input"
                    value={input.note}
                    onChange={handleChange}
                    name="note"
                />
                <button
                    className="AddToList-btn"
                    onClick={handleClick}
                >
                    Add to list
                </button>
            </div>
        </form>
    )
}

export default AddToList