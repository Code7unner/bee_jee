import React from 'react';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <div className="row h-100">
                        <div className="col">                
                            <h5 className="card-title">Name</h5>
                            <p className="email_label">Test@gmail.com</p>
                        </div>
                        <div className="col-1 p-0">                
                            <input className="my-auto status" type="checkbox"/>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}

export default TaskItem;
