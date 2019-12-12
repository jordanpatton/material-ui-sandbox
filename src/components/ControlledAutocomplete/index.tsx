import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputBase from '@material-ui/core/InputBase';
import Popper from '@material-ui/core/Popper';
import { useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import SettingsIcon from '@material-ui/icons/Settings';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TWidget, WIDGETS } from './constants';
import { useStyles } from './styles';

export default function GitHubLabel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<TWidget[]>([WIDGETS[1], WIDGETS[2]]);
  const [pendingValue, setPendingValue] = React.useState<TWidget[]>([]);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ButtonBase
          disableRipple
          className={classes.button}
          aria-describedby={id}
          onClick={handleClick}
        >
          <span>Labels</span>
          <SettingsIcon />
        </ButtonBase>
        {value.map((label: TWidget) => (
          <div
            key={label.name}
            className={classes.tag}
            style={{
              backgroundColor: label.color,
              color: theme.palette.getContrastText(label.color),
            }}
          >
            {label.name}
          </div>
        ))}
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        className={classes.popper}
      >
        <div className={classes.header}>Apply labels to this pull request</div>
        <Autocomplete
          open
          onClose={handleClose}
          multiple
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          value={pendingValue}
          onChange={(event, newValue) => {
            setPendingValue(newValue);
          }}
          disableCloseOnSelect
          disablePortal
          renderTags={() => null}
          noOptionsText="No labels"
          renderOption={(option: TWidget, { selected }) => (
            <React.Fragment>
              <DoneIcon
                className={classes.iconSelected}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
              <span className={classes.color} style={{ backgroundColor: option.color }} />
              <div className={classes.text}>
                {option.name}
                <br />
                {option.description}
              </div>
              <CloseIcon
                className={classes.close}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
            </React.Fragment>
          )}
          options={[...WIDGETS].sort((a, b) => {
            // Display the selected labels first.
            let ai = value.indexOf(a);
            ai = ai === -1 ? value.length + WIDGETS.indexOf(a) : ai;
            let bi = value.indexOf(b);
            bi = bi === -1 ? value.length + WIDGETS.indexOf(b) : bi;
            return ai - bi;
          })}
          getOptionLabel={(option: TWidget) => option.name}
          renderInput={params => (
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              className={classes.inputBase}
            />
          )}
        />
      </Popper>
    </React.Fragment>
  );
}
