import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignUpUser from '../SignUpUser/SignUpUser' 
import SignUpProfile from '../SignUpProfile/SignUpProfile' 
import WebcamCapture from '../WebcamCapture/WebcamCapture' 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const getSteps = () => [{
  name: 'Create an account',
  component: SignUpUser,
}, {
  name: 'Create a profile',
  component: SignUpProfile,
}, {
  name: 'Upload a picture',
  component: WebcamCapture,
}]

export default function SignUpStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0)

  const steps = getSteps()
  const { component: CurrentStepComponent } = steps[activeStep]

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ name }) => (
          <Step key={name}>
            <StepLabel>{name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
                <CurrentStepComponent />
            </div>    
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}