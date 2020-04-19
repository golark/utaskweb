import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'

function getItems() {
    const items = ""
    return items;
}

class TaskList extends React.Component {
    state = { };
    handleClick = (e) => {
        this.setState({ [e]: !this.state[e] });
    };

    getList(){
        return (
            <List component="div">

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Posts
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Contact
                    </TypoGraphy>
                </ListItemText>
            </List>
        );
    }

    render() {
        const items = getItems();
        console.log(items)
        return (
            <div>
                {this.getList()}
            </div>
        );
    }
}

export default TaskList;