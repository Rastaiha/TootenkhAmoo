import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  DescriptionOutlined as DescriptionOutlinedIcon,
} from '@material-ui/icons';
import ClearIcon from '@material-ui/icons/Clear';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Message from '../components/Dialog/Message';
import TinyPreview from '../components/tiny_editor/react_tiny/Preview';
import TinyEditor from '../components/tiny_editor/react_tiny/TinyEditorComponent';
import {
  addNotificationAction,
} from '../redux/slices/notifications';
import {
  getProblemFromGroupAction,
  submitAnswerAction,
} from '../redux/slices/problem';
import Layout from './Layout';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

const ViewProblem = ({
  submitAnswer,
  addNotification,
  getProblemFromGroup,

  problem,
}) => {
  const classes = useStyles();
  const { problemGroupId, submitId, problemId } = useParams();
  const [text, setText] = useState();
  const [file, setFile] = useState({ file: '', value: '' });
  const [openDialog, setOpenDialog] = useState(false);

  React.useEffect(() => {
    getProblemFromGroup({ problemGroupId })
  }, [])

  const handleFileChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      if (e.target.files[0].size <= 8e6) {
        setFile({
          file: e.target.files[0],
          value: e.target.value,
        });
      } else {
        setFile('')
        e.target.setCustomValidity('Maximum upload file size is 8 MB.');
        e.target.reportValidity();
      }
    }
  };

  const doSubmitAnswer = () => {
    if (!file?.file && !text) {
      addNotification({
        message: 'حداقل یک متن یا یک فایل برای پاسخ سوال قرار دهید.',
        type: 'error',
      });
      return;
    }

    if (problem?.problem?.problem_type == 'DescriptiveProblem') {
      submitAnswer({
        submitId,
        problemId,
        text,
        file: file.file,
      })
    } else {
      submitAnswer({
        submitId,
        problemId,
        text,
      })
    }
  }

  const clearFile = () => {
    setFile({ file: '', value: '' });
  }

  return (
    <Layout>
      <Grid container spacing={2} justify='center'>
        <Grid item>
          <Typography variant='h1' align="center">{problem?.problem?.title ? `«${problem?.problem?.title}»` : ''}</Typography>
        </Grid>
        <Grid container item spacing={2} justify='center'>
          <Grid container item direction='column' xs={12} md={8} spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item container direction='column'>
                  <Grid item>
                    <Typography gutterBottom variant='h3' align='center'>
                      {'صورت'}
                    </Typography>
                  </Grid>
                  <Divider className={classes.divider} />
                  <Grid item>
                    <TinyPreview
                      frameProps={{
                        frameBorder: '0',
                        scrolling: 'no',
                        width: '100%',
                      }}
                      content={problem?.problem?.text} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid item container direction='column' spacing={1}>
                  <Grid item>
                    <Typography gutterBottom variant='h3' align='center'>پاسخ</Typography>
                  </Grid>
                  <Divider className={classes.divider} />
                  {problem?.problem?.problem_type == 'DescriptiveProblem' &&
                    <>
                      <Grid item>
                        <TinyEditor
                          initialValue={problem?.text_answer}
                          onChange={setText} />
                      </Grid>
                      <Grid item container spacing={2} alignItems='center'>
                        <Grid item>
                          <Button variant='contained' color='secondary' onClick={() => document.getElementById('userProfilePicture').click()}>
                            {'انتخاب فایل'}
                          </Button>
                          <input
                            value={file.value} accept="application/pdf,image/*"
                            id='userProfilePicture' type="file"
                            style={{ display: 'none' }} onChange={handleFileChange} />
                        </Grid>
                        <Grid item>
                          {file.file &&
                            <Grid container justify='center' alignItems='center'>
                              <Grid item>
                                <Button
                                  size="small"
                                  startIcon={
                                    <IconButton size='small' onClick={clearFile}>
                                      <ClearIcon />
                                    </IconButton>}
                                  endIcon={<DescriptionOutlinedIcon />}
                                  className={classes.lastUploadButton}>
                                  {file.file?.name}
                                </Button>
                              </Grid>
                            </Grid>
                          }
                        </Grid>
                      </Grid>
                    </>
                  }
                  {problem?.problem?.problem_type == 'ShortAnswerProblem' &&
                    <Grid item>
                      <TextField
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                        variant='outlined'
                        fullWidth />
                    </Grid>
                  }
                  <Grid item>
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      onClick={() => setOpenDialog(true)}>
                      {'ثبت پاسخ'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
      <Message
        open={openDialog}
        text={'آیا مطمئنید که می‌خواهید پاسخ مسئله را ارسال کنید؟ شما فقط یک‌بار امکان این کار را دارید!'}
        handleClose={() => { setOpenDialog(!openDialog) }}
        callbackFunction={doSubmitAnswer}
      />
    </Layout>
  );

}

const mapStateToProps = (state) => ({
  problem: state.problem.problem,
});


export default connect(
  mapStateToProps,
  {
    getProblemFromGroup: getProblemFromGroupAction,
    submitAnswer: submitAnswerAction,
    addNotification: addNotificationAction,
  }
)(ViewProblem);