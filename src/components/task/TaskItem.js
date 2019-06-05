import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';

class TaskItem extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const currentPage = this.props.page;

        // Logic for displaying tasks
        const indexOfLastTask = currentPage * 3;
        const indexOfFirstTask = indexOfLastTask - 3;
        const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

        if (currentTasks === null) {
            return <Spinner/>
        } else {
            return (
                currentTasks.map(item => (
                    <div className="col-sm-4" key={item.id}>
                        <div className="card">
                            <div className="card-header">
                                <div className="row h-100">
                                    <div className="col">                
                                        <h5 className="card-title">{item.username}</h5>
                                        <p className="email_label">{item.email}</p>
                                    </div>
                                    <div className="col-1 p-0">                
                                        <input className="my-auto status" type="checkbox"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))
            );
        }
    }
}

export default connect()(TaskItem);
