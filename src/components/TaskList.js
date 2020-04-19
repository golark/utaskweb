import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccessTime from '@material-ui/icons/AccessTime';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#6772e5',
        border: 10,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 50,
    },
}));

function getItems() {
    const items = "";
    return items;
}

class TaskList extends React.Component {

    state = { };
    handleClick = (e) => {
        this.setState({ [e]: !this.state[e] });
    };

    // createListItem given the parameters
    createListItem(prim, secon) {

        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccessTime />
                   </Avatar>
                </ListItemAvatar>
                <ListItemText primary={prim} secondary={secon} />
            </ListItem>
       )
    }


    getList() {
        const classes = this.props;

        return (
            <List className={classes.root}>
                {this.createListItem("primary task", "secondary task")}
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTime />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Task A" secondary="task details" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTime />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Task B" secondary="task details" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTime />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Task C" secondary="task details" />
                </ListItem>
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

TaskList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default TaskList;
