import React, { Component } from "react";
import { Card, Divider, PageHeader } from 'antd'
import { SecurityScanTwoTone } from "../../../../asset-tagging/node_modules/@ant-design/icons/lib";
import { Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";

class PostDetail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: null,
            user_information: null,
            comment: [],
            search: "",
            id: this.props.location.state ? this.props.location.state.id : null,
        };
    }


    async getPostDetail() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.id)
        const data = await response.json()
        this.setState({
            data: data
        })
        await this.getUserInformation(data.id)
    }

    async getUserInformation(userid) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userid)
        const data = await response.json()
        this.setState({
            user_information: data
        })
    }

    async getPostComment() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.id + "/comments")
        const data = await response.json()
        this.setState({
            comment: data
        })
    }

    async componentDidMount() {
        await this.getPostDetail();
        await this.getPostComment();
    }

    render() {
        return (
            <div className="container mx-auto px-4 bg-softWhite">
                {this.state.data !== null ?
                    <>
                        <PageHeader onBack={() => window.history.back()} title="Post Detail" />
                        <Card
                            title={this.state.data.title}
                        >
                            {this.state.data.body}

                            {this.state.user_information !== null ?
                                <>

                                    <Divider orientation="left">User Information</Divider>
                                    {this.state.user_information.name} <br/>
                                    {this.state.user_information.address.city} <br/>
                                    E-mail : {this.state.user_information.email} <br/>
                                    Phone : {this.state.user_information.phone}
                                </>
                                : ""
                            }
                        </Card>
                    </>
                    : ""
                }

                <Divider orientation="left">Comment</Divider>

                {this.state.comment &&
                    this.state.comment.map((item) => {
                        return (
                            <div className="my-2 mx-8">
                                <Card
                                    title={item.email}
                                >
                                    {item.body}
                                </Card>
                            </div>
                        )
                    })

                }
            </div>
        );
    }
}

export default PostDetail;
