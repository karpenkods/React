import {
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import { capitalizeFirstLetter } from '../../common/utils/formatUtils'
import { ToDoFormControl, ToDoInput, ToDoLabel } from '../../reusable/customMUI/customInput'
import { validateNumber, validateText } from '../../common/utils/valitatorUtils'
import React, { useContext, useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import CircleCheckedFilled from '@material-ui/icons/CheckCircle'
import { AppModalContext } from '../../reusable/components/Modal/AppModalProvider'
import { AppThemeContext } from '../../common/theme/AppThemeProvider'
import AdjustIcon from '@material-ui/icons/Adjust'
import SnoozeIcon from '@material-ui/icons/Snooze'
import { MessageSwitch } from '../../reusable/customMUI/customSwitch'
import useSettingPageStyles from './settingPageStyles'
import modalVariants from '../../reusable/components/Modal/modalVariants'
import { Helmet } from 'react-helmet'

function SettingPage() {
  const classes = useSettingPageStyles()
  const { isModalOpen, setModalProps, setModalOpen } = useContext(AppModalContext)
  const { currentThemeName, setCurrentThemeName } = useContext(AppThemeContext)
  const isDarkTheme = currentThemeName === 'darkTheme'

  const [settings, setSettings] = useState(reactLocalStorage.getObject('settings'))
  const [errors, setErrors] = useState({})
  const [fieldTouched, setFieldTouched] = useState({})
  const [isSendMessages, setIsSendMessages] = useState(
    reactLocalStorage.get('isSendMessages') === 'true',
  )

  const handleChangeSetting = (value, key, validation, min = 1, max = 50) => {
    setSettings({ ...settings, [key]: value })
    if (validation) {
      setErrors({ ...errors, [key]: validation(value, min, max) })
    }
  }

  function handleTouched(ev, key) {
    ev.preventDefault()
    setFieldTouched({ ...fieldTouched, [key]: true })
  }

  function saveChanges(ev) {
    ev.preventDefault()
    let modalProps = modalVariants.errorBySettings

    if (
      Object.values(errors).reduce((sum, item) => sum + item, 0) <= 0 ||
      !Object.keys(errors).length
    ) {
      reactLocalStorage.setObject('settings', settings)
      modalProps = modalVariants.successBySettings
    }
    setModalOpen(!isModalOpen)
    setModalProps(modalProps)
  }

  const handleThemeChange = (ev) => {
    const choice = ev.target.checked
    if (choice) {
      setCurrentThemeName('darkTheme')
    } else {
      setCurrentThemeName('lightTheme')
    }
  }

  const handleIsSendMessagesChange = (ev) => {
    setIsSendMessages(ev.target.checked)
    reactLocalStorage.set('isSendMessages', ev.target.checked)
  }

  const numericalSettings = [
    {
      label: 'время помидора, мин',
      value: settings.durationOfPomodoro,
      key: 'durationOfPomodoro',
      error: errors.durationOfPomodoro,
      touched: fieldTouched.durationOfPomodoro,
    },
    {
      label: 'пауза короткая, мин',
      value: settings.durationOfShotPause,
      key: 'durationOfShotPause',
      error: errors.durationOfShotPause,
      touched: fieldTouched.durationOfShotPause,
    },
    {
      label: 'частота пауз',
      value: settings.frequencyOfLongPauses,
      key: 'frequencyOfLongPauses',
      error: errors.frequencyOfLongPauses,
      touched: fieldTouched.frequencyOfLongPauses,
    },
    {
      label: 'пауза длинная, мин',
      value: settings.durationOfLongPause,
      key: 'durationOfLongPause',
      error: errors.durationOfLongPause,
      touched: fieldTouched.durationOfLongPause,
    },
  ]

  return (
    <section className="container flex-column">
      <Helmet>
        <title>{'pomodoro_box | Настройки'}</title>
      </Helmet>
      <Typography variant="h1" color="secondary" className="heading">
        Настройки приложения
      </Typography>
      <Divider className="mb-30" />

      <form onSubmit={(ev) => saveChanges(ev)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <ToDoFormControl className={classes.settingInput}>
                  <ToDoLabel variant="filled">Ваше имя</ToDoLabel>
                  <ToDoInput
                    type="text"
                    disableUnderline={true}
                    value={settings.userName}
                    onChange={(ev) =>
                      handleChangeSetting(
                        capitalizeFirstLetter(ev.target.value),
                        'userName',
                        validateText,
                        3,
                        15,
                      )
                    }
                    onBlur={(ev) => handleTouched(ev, 'userName')}
                  />
                  {errors.userName !== -1 && fieldTouched.userName && (
                    <FormHelperText className={classes.errorText}>{errors.userName}</FormHelperText>
                  )}
                </ToDoFormControl>
              </Grid>
              <Grid item xs={3} sm={1} className={classes.btnGrid}>
                <IconButton aria-label="сохранить данные" variant="contained" type="submit">
                  <CircleCheckedFilled className={classes.saveBtn} style={{ fontSize: '40px' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container spacing={3}>
              {numericalSettings.map((item, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={8} sm={8}>
                    <ToDoFormControl className={classes.settingInput}>
                      <ToDoLabel variant="filled">{item.label}</ToDoLabel>
                      <ToDoInput
                        type="number"
                        disableUnderline={true}
                        value={item.value}
                        onChange={(ev) =>
                          handleChangeSetting(ev.target.value, item.key, validateNumber)
                        }
                        onBlur={(ev) => handleTouched(ev, item.key)}
                      />
                      {item.error !== -1 && item.touched && (
                        <FormHelperText className={classes.errorText}>{item.error}</FormHelperText>
                      )}
                    </ToDoFormControl>
                  </Grid>

                  <Grid item xs={3} sm={1} className={classes.btnGrid}>
                    <IconButton aria-label="сохранить данные" variant="contained" type="submit">
                      <CircleCheckedFilled
                        className={classes.saveBtn}
                        style={{ fontSize: '40px' }}
                      />
                    </IconButton>
                  </Grid>
                </React.Fragment>
              ))}

              <Grid item xs={12} sm={12}>
                <FormControlLabel
                  control={
                    <MessageSwitch
                      style={{ height: '38px' }}
                      checked={isSendMessages}
                      onChange={handleIsSendMessagesChange}
                      icon={<SnoozeIcon style={{ color: '#B7280F', fontSize: '28px' }} />}
                      checkedIcon={<SnoozeIcon style={{ color: '#7ecb20', fontSize: '28px' }} />}
                    />
                  }
                  label={isSendMessages ? 'Отключить оповещения' : 'Включить оповещения'}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControlLabel
                  control={
                    <MessageSwitch
                      style={{ height: '38px' }}
                      checked={isDarkTheme}
                      onChange={handleThemeChange}
                      icon={<AdjustIcon style={{ color: '#B7280F', fontSize: '28px' }} />}
                      checkedIcon={<AdjustIcon style={{ color: '#7ecb20', fontSize: '28px' }} />}
                    />
                  }
                  label={isDarkTheme ? 'Светлая тема' : 'Темная тема'}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </section>
  )
}

export default SettingPage
