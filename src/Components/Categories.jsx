import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"All games"
                },
                {
                    key:"Interactivemovie",
                    name:"Interactivemovie"
                },
                {
                    key:"RPG",
                    name:"RPG"
                },
                {
                    key:"Action",
                    name:"Action"
                },
                {
                    key:"Shooter",
                    name:"Shooter"
                },
                {
                    key:"Fighting",
                    name:"Fighting"
                },
                
            ]
        }
    }
    render() {
        return(
            <div className = "categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories