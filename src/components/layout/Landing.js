import React from 'react';
import { getTasks } from '../../redux/actions/tasks';
import { connect } from 'react-redux';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

import TaskItem from '../task/TaskItem';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            totalPages: 1,
            data: []
            
        };
    }

    componentDidMount() {
        this.props.onFetchData()
            .then(data => {
                this.setState({
                    data: data.payload.message.tasks,
                    totalPages: Math.ceil(data.payload.message.total_task_count / 3)
                })
            });
    };

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
    };

    render() {
        return (
            <div className="landing">
                <div className="row m-5">
                    <TaskItem tasks={this.state.data} page={this.state.currentPage} />
                </div>
                <div className="w-100 px-auto text-center">
                    <form>
                        <input type="text" />
                    </form>
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={this.state.totalPages}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="bottom-border"
                    />
                    <h2>current Page: {this.state.currentPage}</h2>
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
