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

    // createListItem generate single item given primary and secondary text
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


    // createListView a full list view with multiple parsed list elements
    createListView() {
        const classes = this.props;

        const items  = []
        for (let i = 0; i < 5; i++) {
            items.push(this.createListItem("Task " + i.toString(), "item" + i.toString()))
        }

        return (
            <List className={classes.root}>
                {items}
            </List>
        );
    }

    render() {
        const items = getItems();
        console.log(items)
        return (
            <div>
                {this.createListView()}
            </div>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default TaskList;
