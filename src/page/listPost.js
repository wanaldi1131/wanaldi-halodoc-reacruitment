import React, { Component } from "react";
import { Card } from 'antd'
import { Link } from "react-router-dom";

class ListPost extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: "",
        };
    }


    async getListPost() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        this.setState({
            data: data
        })
    }

    searchPost = (event) => {
        // if (event.key === "Enter") {
        //     const temp = this.state.data.find((item)=>{
        //         return item.title === event.target.value
        //     })
        //     console.log(temp)
        //     if (temp !== undefined) {
        //         this.setState({
        //                 data : [temp]
        //             })
        //         }
        //     } else {
        //         this.setState({
        //             data : []
        //         })
        //     }
    }

    clearSearch = () => {
        this.getListPost()
    }

    async componentDidMount() {
        await this.getListPost();
    }

    render() {
        return (
            <div className="container mx-auto px-4 bg-softWhite">
                <div className="col-start-1 col-span-4 mx-2">
                    <p className="font-bold text-xl text-black py-1.5 px-4">Post List</p>
                </div>
                <div className="relative mx-2">
                    <input
                        placeholder="Search Post"
                        type="text"
                        className="rounded-md pl-10 pr-8 h-10 w-full focus:outline-none"
                        style={{ border: "1px solid #CCCCCC" }}
                        onKeyDown={(event) => this.searchPost(event)}
                    />
                </div>
                <div className="container">
                    {this.state.data &&
                        this.state.data.map((item) => {
                            return (
                                <div className="m-2">
                                    <Link key={item.id}
                                        to={{
                                            pathname: "/postdetail",
                                            state: { id: item.id }
                                        }}>
                                        <Card
                                            title={item.title}
                                        >
                                            {item.body}
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        );
    }
}

export default ListPost;
