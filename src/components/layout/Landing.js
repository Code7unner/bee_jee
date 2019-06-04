import React from 'react';
import { getTasks } from '../../redux/actions/getTasks';
import { connect } from 'react-redux';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

import TaskItem from '../task/TaskItem';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            tasks: null
        }
    }

    componentDidMount() {
        this.props.onFetchData()
            .then(() => {
                this.setState({
                    tasks: this.props.task.task.message.tasks
                });

                console.log(this.state.tasks)
            })
    }

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
        //fetch a data
        //or update a query to get data
    };

    renderTaskItem() {
        return this.state.tasks.map(item => {
            return (
                <div className="col-sm-4" key={item.id}>
                    <TaskItem/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="landing">
                <div className="row m-5">
                    {/* { this.renderTaskItem() } */}
                </div>
                <div className="w-100 px-auto text-center">
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={5}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="bottom-border"
                    />
                    <h2>current Page:{this.state.currentPage}</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({task}) => {
    return {
        task
    }
}

const mapDispatchprops = (dispatch) => {
    return { 
        onFetchData: () => dispatch(getTasks()) 
    }
}

export default connect(mapStateToProps, mapDispatchprops)(Landing);
