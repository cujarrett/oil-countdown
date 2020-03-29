import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import "./style.css"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

export const AdditionalInfo = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        more info
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent dividers>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            SOURCE
          </DialogTitle>
          <Typography gutterBottom>
            As you can imagine, it&apos;s not an exact science to determine how much oil is left. After researching the topic I
            ended up sourcing my data from the <a href="https://github.com/cujarrett/oil-countdown/blob/master/media/source.pdf">
              2019 BP Statistical Review of World Energy</a>.
          </Typography>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            HOW LONG WILL THE OIL LAST?
          </DialogTitle>
          <Typography gutterBottom>
            {props.timeLeft}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

AdditionalInfo.propTypes = {
  timeLeft: PropTypes.string
}
