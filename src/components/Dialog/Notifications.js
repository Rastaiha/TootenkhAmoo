import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Grid,
  Divider,
  Hidden,
  makeStyles,
  Paper,
  ListItemText,
  ListItem,
  ListItemIcon,
  Slide,
  Typography,
  InboxIcon,
  List,
  Zoom,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { connect } from 'react-redux';
import NotificationCard from '../Cards/Notification'
import { toPersianNumber } from '../../utils/translateNumber'
import {
  getUserNotificationsAction,
  markNotificationAsSeenAction,
} from '../../redux/slices/account'


const useStyles = makeStyles((theme) => ({
}));

function Index({
  handleClose,
  markNotificationAsSeen,
  getUserNotifications,

  open,
  notifications,
}) {
  const classes = useStyles();

  React.useEffect(() => {
    getUserNotifications()
  }, [])

  return (
    <Dialog maxWidth="sm" TransitionComponent={Slide} open={open} onClose={handleClose} >
      <DialogTitle>
        <Typography variant='h2' gutterBottom>
          {'اعلان‌ها'}
        </Typography>
      </DialogTitle>
      <List>
        {notifications?.map((notification) => (
          <>
            <ListItem alignItems="flex-start" key={notification.id}>
              <ListItemText
                primary={notification.title}
                secondary={notification.body} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => markNotificationAsSeen({ notification: notification.id })}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        ))}
        {notifications?.length == 0 &&
          <DialogContent>
            <Typography variant='h5' align='center'>
              {'شما اعلان نخونده‌ای ندارید!'}
            </Typography>
          </DialogContent>
        }
      </List>
    </Dialog >
  );
}

const mapStateToProps = (state, props) => ({
  notifications: state.account.notifications,
})

export default connect(
  mapStateToProps,
  {
    getUserNotifications: getUserNotificationsAction,
    markNotificationAsSeen: markNotificationAsSeenAction,
  }
)(Index);